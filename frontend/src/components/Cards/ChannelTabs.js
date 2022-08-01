import React from "react";
import PropTypes from "prop-types";
import '../Cards/index.css'
import Pcontroller from '../../images/p-controller.png'
import Pvalidator from '../../images/p-validator.png'
import Lastbanner from '../../images/last-matches-banner.png'
import Csgologo from '../../images/csgo.png'
import Fortnite from '../../images/fortnite.png'
import P from '../../images/p.png'
import p2 from '../../images/p-2.png'
import VS from '../../images/vs.png'
import LiveStreamCard from "./LiveStreamCard";


export default function DashboardTable({data}){

    const [openTab, setOpenTab] = React.useState(1);
        return(
            <>
             <div className="flex flex-wrap ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-6 flex-row mx-auto w-[50rem] xsm:w-[10rem] xl:w-[70rem] lg:w-[70rem]"
            role="tablist"
          >
            <li className="-px mr-2 mb-6 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex-wrap flex items-center justify-center text-white " +
                  (openTab === 1
                    ? "text-white bg-" 
                    : "text-" )
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <img src={Pcontroller}/><p className='pl-2'>Home</p>
              </a>
            </li>
            <li className="-px mr-2 mb-6 last:mr-0 flex-auto text-center text-white">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex flex-wrap items-center justify-center text-white" +
                  (openTab === 2
                    ? "text-white bg-"
                    : "text-")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >

                <img src={Pvalidator}/><p className='pl-2'>About</p>
              </a>
            </li>
            <li className="-px mr-2 mb-6 last:mr-0 flex-auto text-center text-white">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex flex-wrap items-center justify-center text-white" +
                  (openTab === 3
                    ? "text-white bg-"
                    : "text-")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >

                <img src={Pvalidator}/><p className='pl-2'>Schedule</p>
              </a>
            </li>
            <li className="-px mr-2 mb-6 last:mr-0 flex-auto text-center text-white">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex flex-wrap items-center justify-center text-white" +
                  (openTab === 4
                    ? "text-white bg-"
                    : "text-")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >

                <img src={Pvalidator}/><p className='pl-2'>Videos</p>
              </a>
            </li>
            <li className="-px mr-2 mb-6 last:mr-0 flex-auto text-center text-white">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal flex flex-wrap items-center justify-center text-white" +
                  (openTab === 5
                    ? "text-white bg-"
                    : "text-")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >

                <img src={Pvalidator}/><p className='pl-2'>Chat</p>
              </a>
            </li>
            
          </ul>
          <hr className="ml-10 mr-4"/>
          <div className="relative flex flex-col min-w-0 break-words bg-[#090d15] w-full px-2 mb-6 shadow-lg rounded">
            <div className=" xsm:px-0 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  
                        <LiveStreamCard/>

                 
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                
                   <p>{data}
</p>
                 
                 
                </div>
                
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                
                   
                 
                 
                </div>

                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                
                   
                 
                 
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                
                   
                 
                 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
            
            
            
            </>
        );
}