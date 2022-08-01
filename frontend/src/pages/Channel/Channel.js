import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { defaultImgs } from "../../defaultimgs";
import { TextArea, Icon } from "web3uikit";
import { useState, useRef } from "react";
import TweetInFeed from "../../components/TweetInFeed";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import MatchCards from '../../components/Cards/MatchCards.js';
import ProfileView from "../../components/Cards/ProfileView";
import DashboardTable from "../../components/Cards/DashboardTable";
import ChannelView from "../../components/Cards/ChannelView";
import ChannelTabs from "../../components/Cards/ChannelTabs";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { faL } from "@fortawesome/free-solid-svg-icons";


const Channel = () => {

  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
  const contractProcessor = useWeb3ExecuteFunction();

  const inputFile = useRef(null);
  const [selectedFile, setSelectedFile] = useState();
  const [theFile, setTheFile] = useState();
  const [tweet, setTweet] = useState();
  const [channal, setchannal] = useState();
  const [loading, setloading] = useState(true);
  const {id}=useParams()

  async function maticTweet() {

    if (!tweet) return;

    let img;
    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      img = file.ipfs();
    }else{
      img = "No Img"
    }

    let options = {
      contractAddress: "0x8E452D8573e2B1e8341D3f4aCC07939247cf99c6",
      functionName: "addTweet",
      abi: [{
        "inputs": [
          {
            "internalType": "string",
            "name": "tweetTxt",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "tweetImg",
            "type": "string"
          }
        ],
        "name": "addTweet",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      }],
      params: {
        tweetTxt: tweet,
        tweetImg: img,
      },
      msgValue: Moralis.Units.ETH(1),
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        saveTweet();
      },
      onError: (error) => {
        console.log(error.data.message)
      }
    });

  }


  async function saveTweet() {

    if(!tweet) return;

    const Tweets = Moralis.Object.extend("Tweets");

    const newTweet = new Tweets();

    newTweet.set("tweetTxt", tweet);
    newTweet.set("tweeterPfp", user.attributes.pfp);
    newTweet.set("tweeterAcc", user.attributes.ethAddress);
    newTweet.set("tweeterUserName", user.attributes.username);

    if (theFile) {
      const data = theFile;
      const file = new Moralis.File(data.name, data);
      await file.saveIPFS();
      newTweet.set("tweetImg", file.ipfs());
    }

    await newTweet.save();
    window.location.reload();

  }

  const onImageClick = () => {
    inputFile.current.click();
  };

  const changeHandler = (event) => {
    const img = event.target.files[0];
    setTheFile(img);
    setSelectedFile(URL.createObjectURL(img));
  };
  async function getData() {
    const res = await axios.get(`http://localhost:5000/channal/${id}`);
    console.log(res.data.channl,"data");
    setchannal(res.data.channl)
    setloading(false)
    
  }
  useEffect(() => {
    getData();
  }, []);
  

  return loading?(<><h1>wait</h1></>): (
    <>

    {channal&&<ChannelView data={channal}/>}
    {channal&&<ChannelTabs data={channal.About}/>}
      


    {/* <div className="pageIdentify">Home</div>
      <div className="mainContent">
        <div className="profileTweet">
          <img src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]} className="profilePic"></img>
          <div className="tweetBox">
            <TextArea
              label=""
              name="tweetTxtArea"
              value="GM World"
              type="text"
              onChange={(e) => setTweet(e.target.value)}
              width="95%"
            ></TextArea>
            {selectedFile && (
              <img src={selectedFile} className="tweetImg"></img>
            )}
            <div className="imgOrTweet">
              <div className="imgDiv" onClick={onImageClick}>
              <input
                  type="file"
                  name="file"
                  ref={inputFile}
                  onChange={changeHandler}
                  style={{ display: "none"}}
                />
                <Icon fill="#1DA1F2" size={20} svg="image"></Icon>
              </div>
              <div className="tweetOptions">
                <div className="tweet" onClick={saveTweet}>Tweet</div>
                <div className="tweet" onClick={maticTweet} style={{ backgroundColor: "#8247e5" }}>
                  <Icon fill="#ffffff" size={20} svg="matic" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <TweetInFeed profile={false}/>
      </div> */}
    </>
  );
};

export default Channel;
