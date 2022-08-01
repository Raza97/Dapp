import React, { useEffect, useState } from "react";
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
import Cookies from 'js-cookie'
import axios from "axios";


export default function ProfileView(){
    
    const [channal, setchannal] = useState();
    const [userid, setUserid] = useState();
  const { Moralis } = useMoralis();
  const user = Moralis.User.current();
 
  Cookies.set('user_id', user.attributes.accounts[0])
  console.log(user.attributes.accounts[0])
  let data = user.attributes.accounts[0];
  
  async function getData() {
    const res = await axios.get(`http://localhost:5000/channal/${data}`);
    
    setchannal(res.data.channl)
    
    
  }
  useEffect(() => {

    getData();
  }, []);
 
    return(
        <>
        <div className="h-[36rem]  bg-[#090d15] pt-4 text-center">
            <div className="profile-view-sec-1   rounded-md h-[32rem] xsm:h-[52rem] md:h-[32rem] xsm:mb-[10rem]">
            <div className="grid grid-cols-1 pt-6">
                <div className="text-right text-white">
                <div

                        className="logout"
                        onClick={() => {
                        Moralis.User.logOut().then(() => {
                            window.location.reload();
                        });
                        }}
                        >
                        <img src={Logout} />Logout
                        </div>
                </div>
            </div>
                <div className="grid grid-cols-1 text-center ">
                    <img className="mx-auto profilePFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}/>
                </div>
                <div className="flex flex-wrap items-center justify-center">
            <img src={Flag}></img><p className="text-white text-center font-bold text-4xl pl-2">{user.attributes.username.slice(0, 6)}</p>
            </div>
            <br/><p className="text-white text-center font-thin text-lg pl-2 -mt-3">{`${user.attributes.ethAddress.slice(0, 4)}...
            ${user.attributes.ethAddress.slice(38)}`}</p>
            <p className="text-sm pt-2 font-bold text-white">Referal : {user.attributes.referal}</p>

            <div className="grid grid-cols-3 xsm:grid grid-cols-1 md:grid-cols-3 mx-auto text-center">
                    <div className="ml-auto xsm:mx-auto">
                    <div className="grid grid-cols-3">

<div><a href={user.attributes.activision} target="_blank"><img src={Act}/></a></div>
<div><a href={user.attributes.steam} target="_blank" ><img src={Ps}/></a></div>
<div><a href={user.attributes.fortnite} target="_blank" ><img src={Pf}/></a></div>

</div>
                        {/* <img src={Gnetworks}/> */}
                    </div>
                    <div>
                        <p className="text-sm pt-2 font-bold text-white" > BIO : {user.attributes.bio}</p>

                    </div>
                    <div className="mr-auto xsm:mx-auto">
                    <div className="grid grid-cols-3">

                        <div><a href={user.attributes.instagram} target="_blank"><img src={Insta}/></a></div>
                        <div><a href={user.attributes.telegram} target="_blank" ><img src={Tg}/></a></div>
                        <div><a href={user.attributes.youtube} target="_blank" ><img src={Yt}/></a></div>

                        </div>
                        {/* <img src={Networks}/> */}
                    </div>
            </div>
                    <div className="grid grid-cols-1 mx-auto -mt-6 mb-6 xsm:mt-4">
                        <Link to="/settings">
                        <button className="text-white w-48 bg-[#303336] mx-auto rounded-lg py-2 px-4"><i class="fas fa-pencil-alt"></i>Edit Profile</button>
                        </Link>
                        
                    </div>
                    <br/>

                    <div className="grid grid-cols-1 mx-auto -mt-6 mb-6 xsm:mt-4">
                    {channal?<Link to={`/channel/${user.attributes.accounts[0]}`}>
                        <button className="text-white w-48 bg-[#303336] mx-auto rounded-lg py-2 px-4"><i class="fas fa-pencil-alt"></i>View Chanaal</button>
                        </Link>:
                        <Link to="/createChanal">
                        <button className="text-white w-48 bg-[#303336] mx-auto rounded-lg py-2 px-4"><i class="fas fa-pencil-alt"></i>Create Chanaal</button>
                        </Link>
                        }
                        
                        
                    </div>

                    <div className="grid grid-cols-3 xsm:grid-cols-1 md:grid-cols-3 md:w-[40rem] xsm:mx-auto xsm:w-[10rem] xsm:h-[20rem] mx-auto text-center pt-8 w-[50rem]">
                    <div className="ml-auto xsm:mx-auto"><h2 className="text-white text-2xl font-bold">$GSP 2,023<br/><span className="font-thin text-base text-[#8997A9]">Total Earning</span></h2> </div>
                    <div>
                    <div className="ml-auto xsm:mx-auto "><h2 className="text-white text-2xl font-bold">56.1%<br/><span className="font-thin text-base text-[#8997A9]">Win / Loss %</span></h2> </div>
                    </div>
                    <div className="mr-auto xsm:mx-auto">
                    <div className="ml-auto"><h2 className="text-white text-2xl font-bold">$GSP 2,023<br/><span className="font-thin text-base text-[#8997A9]">Total Earning</span></h2> </div>

                    </div>
                    
            </div>
            

            </div>
        </div>
        
        </>
    );
}
