import React from "react";
import { useState, useRef, useEffect } from "react";


import { Input } from "web3uikit";

import '../Cards/index.css'



import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


export default function Ambasdorcreate(){
    let navigate = useNavigate();
    
   
   
    const [username, setAmbasdorName] = useState();
    const [bio, setBio] = useState();
    const [twitter, setTwitter] = useState();
    const [youtube, setYoutube] = useState();
    const [file2,setfile2]=useState('');
    let formData = new FormData();
  formData.append('username', username); 
   
  formData.append('About', bio); 
 
  formData.append('img', file2); 
  formData.append('twitter', twitter);  
  formData.append('youtube', youtube); 
  
  

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
// useEffect(() => {
//   let loginToken = Cookies.get("user_id");
//   setUserid(loginToken)
 

// }, []);


const onSubmit = async e => {
    
    
    
    e.preventDefault();
   const res= await axios.post(`http://localhost:5000/ambasdor/create`,
    formData, config)
    if(res){
      navigate(`/admin/ambasdorView`);
    }

   
    

  };
    
        return(
            <>
           
            <div className="h-[42rem]  bg-[#090d15] pt-4 text-left">
            <div className=" rounded-md h-[32rem]">
                <h2 className="text-white text-left font-bold text-2xl">Add Ambasdor</h2>
                    <div className="pb-8">
                            <div className="grid bg-[#171928] rounded-lg mt-4 py-6">
                                <h2 class="text-left text-2xl text-white  font-bold px-8"></h2>
                            <div className="grid grid-cols-2 px-2 py-2">
                            <div className="px-8 py-3">
                            
<div>
                            <Input
          label="AmbasdorName"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setAmbasdorName(e.target.value)}
        />                            </div>
          
            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Description"
          name="About"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setBio(e.target.value)}
        />
                            </div>
                           
                            
                            <div className="px-8 py-3">
                            <div className="pfp">
         Ambasdor Profile 
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
                                <h2 class="text-left text-2xl text-white  font-bold px-8">Social Medias follwers</h2>
                            <div className="grid grid-cols-2 pt-6">
                            <div className="px-8 py-3">
                            

                            <Input
          label="Youtube"
          name="NameChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setYoutube(e.target.value)}
        />                            </div>
                            <div className="px-8 py-3">
                            <Input
          label="Twitter"
          name="bioChange"
          width="100%"
          labelBgColor="#141d26"
          onChange={(e)=> setTwitter(e.target.value)}
        />
                            </div>
                           
                            </div>
                            <hr className="mx-6"/>
                            <br/>

                            <button className="text-white w-48 bg-[#303336] mx-auto rounded-lg py-2 px-4" onClick={e => onSubmit(e)}><i class="fas fa-pencil-alt"></i>upload</button>
                            </div>

                           



                    </div>


                </div>
            </div>
           
            
            
            
            </>
        );

}