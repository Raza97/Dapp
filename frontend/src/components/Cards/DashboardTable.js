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


export default function DashboardTable(){
    const [openTab, setOpenTab] = React.useState(1);
        return(
            <>
             <div className="flex flex-wrap ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-6 flex-row mx-auto w-[50rem] xsm:w-[10rem] xl:w-[50rem] lg:w-[50rem]"
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
                <img src={Pcontroller}/><p className='pl-2'>Player</p>
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

                <img src={Pvalidator}/><p className='pl-2'>Validator</p>
              </a>
            </li>
            
          </ul>
          <hr className="ml-10 mr-4"/>
          <div className="relative flex flex-col min-w-0 break-words bg-[#090d15] w-full px-2 mb-6 shadow-lg rounded">
            <div className=" xsm:px-0 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <div className="last-match-banner-sec h-[7rem] grid grid-cols-3 xsm:grid-cols-1 xl:grid-cols-3 xl:h-[7rem] lg:grid-cols-3 lg:h-[7rem] xsm:h-[20rem] bg-cover bg-center py-8 mx-auto text-center">
                        <div>
                            <h2 className="font-bold text-3xl text-center text-[#11ff8b]">33 WINS</h2>
                        </div>
                        <div>
                            <h2 className="font-bold text-3xl text-center text-white">LAST 50 MATCHES</h2>
                        </div>
                        <div>
                            <h2 className="font-bold text-3xl text-center text-[#e73333]">17 LOSE</h2>
                        </div>
                  </div>

                       <div className="grid grid-cols-9 xsm:grid-cols-2 md:grid-cols-9 md:px-12 xl:grid-cols-9  xl:px-6  mx auto my-4 py-2 items-center bg-[#171928] rounded-lg text-center">

                            <div>
                                <img className="mx-auto" src={Csgologo}/><br/>
                                <p className="text-[#626f8c]">23:00, 16 APR</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center">
                                <img src={P}/><p className="pl-2 text-white">XXXX</p>
                            </div>
                            <div>
                                <img src={VS}/>
                            </div>
                            <div className="flex flex-wrap items-center justify-center">
                                <img src={p2}/><p className="pl-2 text-white">XXXX</p>
                            </div>
                            <div>
                            <p className="text-[#be71d7]">Kills<br/><span className="font-bold text-2xl">13</span></p>

                            </div>
                            <div>
                            <p className="text-[#717cdf]">Deaths<br/><span className="font-bold text-2xl">2</span></p>
                            </div>
                            <div>
                            <p className="text-[#be71d7]">Win Round<br/><span className="font-bold text-2xl">4</span></p>
                            </div>
                            <div>
                            <p className="text-[#717cdf]">Lose  Round<br/><span className="font-bold text-2xl">7</span></p>
                            </div>

                            <div>
                                <button className="bg-[#303336c2] rounded-lg px-8 py-3 text-white">Report</button>
                                    </div>
                        </div> 
                       
                        

                 
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="last-match-banner-sec h-[7rem] grid grid-cols-3 xsm:grid-cols-1 xl:grid-cols-3 xl:h-[7rem] lg:grid-cols-3 lg:h-[7rem] xsm:h-[20rem] bg-cover bg-center py-8 mx-auto text-center">
                        <div>
                            <h2 className="font-bold text-3xl text-center text-[#11ff8b]">33 WINS</h2>
                        </div>
                        <div>
                            <h2 className="font-bold text-3xl text-center text-white">LAST 50 MATCHES</h2>
                        </div>
                        <div>
                            <h2 className="font-bold text-3xl text-center text-[#e73333]">17 LOSE</h2>
                        </div>
                  </div>

                       <div className="grid grid-cols-9 xsm:grid-cols-2 md:grid-cols-9 md:px-12 xl:grid-cols-9  xl:px-6  mx auto my-4 py-2 items-center bg-[#171928] rounded-lg text-center">

                            <div>
                                <img className="mx-auto" src={Csgologo}/><br/>
                                <p className="text-[#626f8c]">23:00, 16 APR</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center">
                                <img src={P}/><p className="pl-2 text-white">XXXX</p>
                            </div>
                            <div>
                                <img src={VS}/>
                            </div>
                            <div className="flex flex-wrap items-center justify-center">
                                <img src={p2}/><p className="pl-2 text-white">XXXX</p>
                            </div>
                            <div>
                            <p className="text-[#be71d7]">Kills<br/><span className="font-bold text-2xl">13</span></p>

                            </div>
                            <div>
                            <p className="text-[#717cdf]">Deaths<br/><span className="font-bold text-2xl">2</span></p>
                            </div>
                            <div>
                            <p className="text-[#be71d7]">Win Round<br/><span className="font-bold text-2xl">4</span></p>
                            </div>
                            <div>
                            <p className="text-[#717cdf]">Lose  Round<br/><span className="font-bold text-2xl">7</span></p>
                            </div>

                            <div>
                                <button className="bg-[#303336c2] rounded-lg px-8 py-3 text-white">Report</button>
                                    </div>
                        </div> 

                   
                 
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
            
            
            
            </>
        );
}