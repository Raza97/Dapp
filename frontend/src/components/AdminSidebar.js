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

const AdminSidebar = () => {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  

  return (
    <>
      
      <nav className="lg:left-0 lg:block lg:fixed lg:top-0 lg:bottom-0 lg:overflow-y-auto lg:flex-row lg:flex-nowrap lg:overflow-hidden shadow-xl bg-[#171928] flex flex-wrap items-center justify-between relative lg:w-72 z-10  py-4 px-4 xsm:absolute">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          
          
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
                    (window.location.href.indexOf("/admin/leaderboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/chanelview"
                >
                  <img src={Sideicon10}/><p className="pl-2">Chanaal</p>
                </Link>
              </li>
             
              <br/>
              <hr/>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-6 font-bold block flex flex-wrap items-center justify-center" +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/ambasdorlist"
                >
                  <img src={Sideicon11}/><p className="pl-2">Ambasdor</p>
                </Link>
              </li>
              <br/>
              <hr/>
              
             
            </ul>

           
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default AdminSidebar;
