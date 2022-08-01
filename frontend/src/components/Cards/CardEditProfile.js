import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import PropTypes from "prop-types";
import { Input } from "web3uikit";

import '../Cards/index.css'
import Btwitch from '../../images/button-twitch.png'
import Byoutube from '../../images/button-youtube.png'
import Bsteam from '../../images/button-steam.png'
import Bactivision from '../../images/button-activision.png'
import { defaultImgs } from "../../defaultimgs";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export default function CardEditProfile(){
    const [pfps, setPfps] = useState([]);
    const [selectedPFP, setSelectedPFP] = useState();
    const inputFile = useRef(null);
    const [selectedFile, setSelectedFile] = useState(defaultImgs[1]);
    const [theFile, setTheFile] = useState();
    const [username, setUsername] = useState();
    const [bio, setBio] = useState();
    const [telegram, setTelegram] = useState();
    const [youtube, setYoutube] = useState();
    const [instagram, setInstagram] = useState();
    const [activision, setActivision] = useState();
    const [steam, setSteam] = useState();
    const [fortnite, setFortnite] = useState();

    const [referal, setReferal] = useState();

    const { Moralis, isAuthenticated, account } = useMoralis();
    const Web3Api = useMoralisWeb3Api();
  
  
    const resolveLink = (url) => {
      if (!url || !url.includes("ipfs://")) return url;
      return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
    };
  
    useEffect(() => {
  
      const fetchNFTs = async () => {
        const options = {
          chain: "mumbai",
          address: account
        }
  
        const mumbaiNFTs = await Web3Api.account.getNFTs(options);
        const images = mumbaiNFTs.result.map(
          (e) => resolveLink(JSON.parse(e.metadata)?.image)
        );
        setPfps(images);
      }
  
      fetchNFTs();
  
    },[isAuthenticated, account])
  
    const onBannerClick = () => {
      inputFile.current.click();
    };
  
    const changeHandler = (event) => {
      
      const img = event.target.files[0];
      setTheFile(img);
      setSelectedFile(URL.createObjectURL(img));
    };
  
    const saveEdits = async () => {
      const User = Moralis.Object.extend("_User");
      const query = new Moralis.Query(User);
      const myDetails = await query.first();
  
      if (bio){
        myDetails.set("bio", bio);
      }
  
      if (selectedPFP){
        myDetails.set("pfp", selectedPFP);
      }
  
      if (username){
        myDetails.set("username", username);
      }
      if (referal){
        myDetails.set("referal" , referal)
      }
      if (telegram){
        myDetails.set("telegram" , telegram)
      }
      if (youtube){
        myDetails.set("youtube" , youtube)
      }
      if (instagram){
        myDetails.set("instagram" , instagram)
      }
      if (steam){
        myDetails.set("steam" , steam)
      }
      if (activision){
        myDetails.set("activision" , activision)
      }
      if (fortnite){
        myDetails.set("fortnite" , fortnite)
      }
  
      if (theFile) {
        const data = theFile;
        const file = new Moralis.File(data.name, data);
        await file.saveIPFS();
        myDetails.set("banner", file.ipfs());
      }
  
      await myDetails.save();
      window.location.replace('/');
    }
        return(
            <>
            <div className="h-[42rem]  bg-[#090d15] pt-4 text-left">
            <div className=" rounded-md h-[32rem]">
                <h2 className="text-white text-left font-bold text-2xl">Edit Profile</h2>
                    <div className="pb-8">
                            <div className="grid bg-[#171928] rounded-lg mt-4 py-6">
                                <h2 class="text-left text-2xl text-white  font-bold px-8">Account</h2>
                            <div className="grid grid-cols-2 px-2 py-2">
                            <div className="px-8 py-3">
                            

                            <Input
          label="Name"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setUsername(e.target.value)}
        />                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Bio"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setBio(e.target.value)}
        />
                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Refereal Code"
          name="ReferalChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setReferal(e.target.value)}
        />
                            </div>
                            <div className="px-8 py-3">
                            <div className="pfp">
          Profile Image (Your NFTs)

          <div className="pfpOptions">
            {pfps.map((e,i) => {

              return(
                <>
                <img
                src={e}
                className={
                  selectedPFP === e ? "pfpOptionSelected" : "pfpOption"
                }
                onClick={() => {setSelectedPFP(pfps[i]);}}
                ></img>
                </>
              )
            })}
          </div>
        </div>
                            </div>
                            <div className="px-8 py-3">
                            <div className="pfp">
          Profile Banner
          <div className="pfpOptions">
            <img
              src={selectedFile}
              onClick={onBannerClick}
              className="banner"
            ></img>
            <input
              type="file"
              name="file"
              ref={inputFile}
              onChange={changeHandler}
              style={{ display: "none" }}
            />
          </div>
        </div>
                            </div>
                            
                                

                            </div>
                           
                            </div>



                        <div className="grid bg-[#171928] rounded-lg mt-4 py-6">
                                <h2 class="text-left text-2xl text-white  font-bold px-8">Social Medias</h2>
                            <div className="grid grid-cols-2 pt-6">
                            <div className="px-8 py-3">
                            

                            <Input
          label="Telegram Link"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setTelegram(e.target.value)}
        />                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Youtube Link"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setYoutube(e.target.value)}
        />
                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Instagram Link"
          name="ReferalChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setInstagram(e.target.value)}
        />
                            </div>
                            </div>
                            <hr className="mx-6"/>
                            <div className="px-6 pt-4">
                            <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked=""/>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Display this information on my profile</span>
                            </label>
                            </div>

                            </div>

                            <div className="grid bg-[#171928] rounded-lg mt-4 py-6">
                                <h2 class="text-left text-2xl text-white  font-bold px-8">Game Profiles</h2>
                            <div className="grid grid-cols-3 pt-6">
                            <div className="px-8 py-3">
                            

                            <Input
          label="Steam ID Link"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setSteam(e.target.value)}
        />                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Fortnite Link"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setFortnite(e.target.value)}
        />
                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Activision Link"
          name="ReferalChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setActivision(e.target.value)}
        />
                            </div>
                           
                            </div>
                            <div className="save w-[20rem] mx-8 mb-5" onClick={() => saveEdits()}>
          Save
        </div>
                            <hr className="mx-6"/>
                            <div className="px-6 pt-4">
                            <label for="checked-toggle" class="inline-flex relative items-center cursor-pointer">
                            <input type="checkbox" value="" id="checked-toggle" class="sr-only peer" checked=""/>
                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Display this information on my profile</span>
                            </label>
                            </div>

                            </div>



                    </div>


                </div>
            </div>
            
            
            
            
            </>
        );

}