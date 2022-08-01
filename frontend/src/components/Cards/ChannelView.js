import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import '../Cards/index.css'
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

import User from '../../images/Аватар.png'
import Flag from '../../images/flag.png'
import Networks from '../../images/networks.png'
import Gnetworks from '../../images/games-network.png'
import { defaultImgs } from "../../defaultimgs";
import Insta from '../../images/insta.png'
import Tg from '../../images/tg.png'
import Yt from '../../images/yt.png'
import Act from '../../images/act.png'
import Ps from '../../images/ps.png'
import Pf from '../../images/pf.png'
import Logout from '../../images/logout.png'


export default function ChannelView({data}){
    
    
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
    return(
        <>
        <div className="h-[36rem]  bg-[#090d15] pt-4 text-center">
            <div className="Channel-view-sec-1   rounded-md h-[32rem] xsm:h-[52rem] md:h-[36rem] xsm:mb-[10rem]">
            <div className="grid grid-cols-1 pt-6 px-6">
                <div className="text-right text-white">
                <button className="text-white w-48 bg-[#303336] mx-2 rounded-lg py-2 px-4"><i class="fas fa-pencil-alt"></i>Follow</button>
                <button className="text-white w-48 bg-[#303336] mx-2 rounded-lg py-2 px-4"><i class="fas fa-pencil-alt"></i>Subscribe</button>

                </div>
            </div>
                <div className="grid grid-cols-1 text-center ">
                    {/* <img className="mx-auto profilePFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}/> */}
                    <img className="mx-auto profilePFP" src={data.img}/>

                </div>
                <div className="flex flex-wrap items-center justify-center">
            {/* <img src={Flag}></img><p className="text-white text-center font-bold text-4xl pl-2">{user.attributes.username.slice(0, 6)}</p> */}
            <img src={Flag}></img><p className="text-white text-center font-bold text-4xl pl-2">{data.username.slice(0, 6)}</p>
            </div>
            <br/><p className="text-white text-center font-thin text-lg pl-2 -mt-3">{`${user.attributes.ethAddress.slice(0, 4)}...
            ${user.attributes.ethAddress.slice(38)}`}</p>
            <p className="text-sm pt-2 font-bold text-white">Referal : {user.attributes.referal}</p>

            
                    <div className="grid grid-cols-1 mx-auto -mt-6 mb-6 xsm:mt-4">
                        <button className="text-white w-48 bg-[#303336] mx-auto rounded-lg py-2 px-4"><i class="fas fa-pencil-alt"></i>Follow</button>
                    </div>
                    <div className="grid grid-cols-1 xsm:grid grid-cols-1 md:grid-cols-1 mx-auto text-center">
                    
                    <div className="mr-auto xsm:mx-auto">
                    <div className="grid grid-cols-3">

                        <div><a href={data.instagram} target="_blank"><img src={Insta}/></a></div>
                        <div><a href={data.telegram} target="_blank" ><img src={Tg}/></a></div>
                        <div><a href={data.youtube} target="_blank" ><img src={Yt}/></a></div>

                        </div>
                        {/* <img src={Networks}/> */}
                    </div>
            </div>

                    <div className="grid grid-cols-3 xsm:grid-cols-1 md:grid-cols-3 md:w-[40rem] xsm:mx-auto xsm:w-[10rem] xsm:h-[20rem] mx-auto text-center pt-8 w-[50rem]">
                    <div className="ml-auto xsm:mx-auto"><h2 className="text-white text-2xl font-bold">83<br/><span className="font-thin text-base text-[#8997A9]">Streams</span></h2> </div>
                    <div>
                    <div className="ml-auto xsm:mx-auto "><h2 className="text-white text-2xl font-bold">87.8k<br/><span className="font-thin text-base text-[#8997A9]">Followers</span></h2> </div>
                    </div>
                    <div className="mr-auto xsm:mx-auto">
                    <div className="ml-auto"><h2 className="text-white text-2xl font-bold">5k<br/><span className="font-thin text-base text-[#8997A9]">Subscribers</span></h2> </div>

                    </div>
                    
            </div>
            

            </div>
        </div>
        
        </>
    );
}
