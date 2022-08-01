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
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


export default function ChanalCreation(){
    let navigate = useNavigate();
    const [pfps, setPfps] = useState([]);
    const [selectedPFP, setSelectedPFP] = useState();
   
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
    const [userid, setUserid] = useState();
    const [channalName, setChannalName] = useState();
    

    const [referal, setReferal] = useState();
    const [file2,setfile2]=useState('');
    let formData = new FormData();
  formData.append('username', username); 
   
  formData.append('About', bio); 
 
  formData.append('img', file2); 
  formData.append('telegram', telegram);  
  formData.append('youtube', youtube); 
  formData.append('instagram', instagram); 
  formData.append('userid', userid);
  formData.append('channalName', channalName); 
  

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
useEffect(() => {
  let loginToken = Cookies.get("user_id");
  setUserid(loginToken)
  

}, []);


const onSubmit = async e => {
    
    
    
    e.preventDefault();
   const res= await axios.post(`http://localhost:5000/channal/create`,
    formData, config)
    if(res){
      navigate(`/channel/${userid}`);
    }
   
    

  };
    
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
                            
<div>
                            <Input
          label="ChannalName"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setChannalName(e.target.value)}
        />                            </div>
        <br/>
        <Input
          label="userName"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setUsername(e.target.value)}
        />                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="About"
          name="About"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setBio(e.target.value)}
        />
                            </div>
                           
                            
                            <div className="px-8 py-3">
                            <div className="pfp">
          Profile Banner
          <div className="pfpOptions">
            
            <input
              type="file"
              className="form-control form-control-lg"
              
              name="file2"
            
              onChange={(e)=>setfile2(e.target.files[0])}
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

                            <button className="text-white w-48 bg-[#303336] mx-auto rounded-lg py-2 px-4" onClick={e => onSubmit(e)}><i class="fas fa-pencil-alt"></i>upload</button>
                            </div>

                           



                    </div>


                </div>
            </div>
           
            
            
            
            </>
        );

}