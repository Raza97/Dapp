import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Icon } from "web3uikit";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { defaultImgs } from "../defaultimgs";


import Avatar from '../images/avatar.png'
import Metamask from '../images/metamsk.png'
import Sideicon1 from '../images/sidebar-icon-1.png'
import Sideicon2 from '../images/sidebar-icon-2.png'
import Sideicon3 from '../images/sidebar-icon-3.png'
import Sideicon4 from '../images/sidebar-icon-4.png'
import Sideicon5 from '../images/sidebar-icon-5.png'
import Sideicon6 from '../images/sidebar-icon-6.png'
import Sideicon7 from '../images/sidebar-icon-7.png'
import Sideicon8 from '../images/sidebar-icon-8.png'
import Sideicon9 from '../images/sidebar-icon-9.png'
import Sideicon10 from '../images/sidebar-icon-10.png'
import Sideicon11 from '../images/sidebar-icon-11.png'
import axios from "axios";

const Sidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const [channal, setchannal] = useState();

  const { Moralis} = useMoralis();
  const user = Moralis.User.current();
  async function getData() {
    const res = await axios.get(`http://localhost:5000/fulldata/data`);
    console.log(res.data.channl,"datafull");
    setchannal(res.data.channl)
    
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      
      <nav className="lg:left-0 lg:block lg:fixed lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-nowrap lg:overflow-hidden shadow-xl bg-[#171928] flex flex-wrap items-center justify-between relative lg:w-72 z-10  py-4 px-4 xsm:absolute">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50  px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <div className="dsidebar-sec-1 xsm:hidden xl:block w-full h-[22rem]  mt-12">
          <Link  to='/'>

            <div className="pt-12 flex flex-wrap items-center justify-center">
            <img className="mx-auto profilePFP" src={user.attributes.pfp ? user.attributes.pfp : defaultImgs[0]}/>
                        </div>
            <div className="profileName"></div>
            <p className="text-white text-center font-bold">{user.attributes.username.slice(0, 6)}</p>
            <p className="text-white text-center font-thin text-sm pt-4 pl-2 -mt-3">{`${user.attributes.ethAddress.slice(0, 4)}...
            ${user.attributes.ethAddress.slice(38)}`}</p>
            <div className="flex flex-wrap items-center justify-center">
            <img src={Metamask}></img><p className="text-white text-center font-bold">3.54 BNB</p>
            </div>
              <div className="grid grid-cols-2 pt-4 text-center">
              <div>
                <h2 className="text-white font-bold">$GSP 2,023<br/><span className="text-[#3D475F] text-sm font-thin">Total Earning</span></h2>   
              </div>
  
              <div>
                <h2 className="text-white font-bold">32<br/><span className="text-[#3D475F] text-sm font-thin">Matches</span></h2>
                
              </div>
              </div>
              </Link>
          </div>
          
          {/* User */}
          {/* <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul> */}
          {/* Collapse */}
          <div
            className={
              "xsm:w-[20rem] lg:flex lg:flex-col lg:items-stretch lg:opacity-100 lg:relative lg:mt-4 lg:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                   GSP DASHBOARD
                  </Link>
                </div>
                
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6> */}
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none text-[#8997A9] mt-2">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/matches"
                >
                  
                  <img src={Sideicon1}></img><p className="pl-2">Matches</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/matches"
                >
                  
                  <img src={Sideicon2}></img><p className="pl-2">CS GO</p>

                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/matches"
                >
                  <img src={Sideicon3}></img><p className="pl-2"> Fortnite</p>
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/matches"
                >
                  <img src={Sideicon4}/><p className="pl-2">Call of Duty</p>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <img src={Sideicon5}/><p className="pl-2">Speculators</p>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/live"
                >
                  <img src={Sideicon6}/><p className="pl-2">My lives</p>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 text-[#8997A9]">
            <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/staking"
                >
                  <img src={Sideicon7}/><p className="pl-2">Staking</p>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/live"
                >
                  <img src={Sideicon8}/><p className="pl-2">Streaming</p>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/referral"
                >
                  <img src={Sideicon9}/><p className="pl-2">Referral</p>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/leaderboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/leaderboard"
                >
                  <img src={Sideicon10}/><p className="pl-2">Leaderboard</p>
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/news"
                >
                  <img src={Sideicon11}/><p className="pl-2">News</p>
                </Link>
              </li>
              <br/>
              <hr/>
              
              {channal?.map((cards) => {
            
            return (
              <>
              
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to={`/channel/${cards.userid}`}
                >
                  <img src={cards.img} style={{width:"20px",height:"20px"}}/><p className="pl-2">{cards.channalName}</p>
                </Link>
              </li>

              </>
            )})}
            </ul>

           
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Sidebar;
