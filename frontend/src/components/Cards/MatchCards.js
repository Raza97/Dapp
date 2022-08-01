import React from "react";
import '../Cards/index.css'
import PropTypes from "prop-types";
import Flogo from '../../images/f-logo.png'
import Codlogo from '../../images/cod-logo.png'
import Csgologo from '../../images/csgo-logo.png'

export default function MatchCards(){
    return(
        <>
            <div className="">
                <div className="grid grid-cols-3 xsm:grid-cols-1 xsm:mt-80 xl:grid-cols-3  md:mt-0 bg-[#090d15]  mx-auto">
                        <div className="rounded-lg h-[16rem] mx-2 xsm:my-2 match-card-one">
                            <div className="grid grid-cols-2">
                                <div className="px-2">
                                    <img className="py-2 " src={Flogo}/>
                                        <div className="pt-6">
                                             <p className="text-white pt-4">Kills / Death</p>

                                            <div class="w-full bg-[#ffffff91] rounded-full h-2 ">
                                            <div class="bg-white rounded-full h-2 w-[4rem]" ></div>
                                            </div>
                                                <p className="text-white pt-4">Win / Loose</p>
                                            <div class="w-full bg-[#ffffff91] rounded-full h-2 ">
                                            <div class="bg-white rounded-full h-2 w-[4rem]" ></div>
                                            </div>
                                        </div>

                                    <div className="grid grid-cols-2 mx-auto text-center">
                                        <div>
                                            <p className="text-white font-lg text-md pt-4">Unbeaten Strike<br/><span className="text-white font-bold text-2xl">23</span></p>
                                        </div>

                                        <div>
                                        <p className="text-white font-lg text-md pt-4">Alive Steak<br/><span className="text-white font-bold text-2xl">12</span></p>

                                        </div>
                                    </div>

                                </div>
                                <div className="first-col h-[16rem]">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg h-[16rem] mx-2 xsm:my-2 match-card-two">
                        <div className="grid grid-cols-2">
                                <div className="px-2">
                                    <img className="py-2 " src={Codlogo}/>
                                        <div className="pt-6">
                                             <p className="text-white pt-4">Kills / Death</p>

                                            <div class="w-full bg-[#ffffff91] rounded-full h-2 ">
                                            <div class="bg-white rounded-full h-2 w-[4rem]" ></div>
                                            </div>
                                                <p className="text-white pt-4">Win / Loose</p>
                                            <div class="w-full bg-[#ffffff91] rounded-full h-2 ">
                                            <div class="bg-white rounded-full h-2 w-[4rem]" ></div>
                                            </div>
                                        </div>

                                    <div className="grid grid-cols-2 mx-auto text-center">
                                        <div>
                                            <p className="text-white font-lg text-md pt-4">Unbeaten Strike<br/><span className="text-white font-bold text-2xl">23</span></p>
                                        </div>

                                        <div>
                                        <p className="text-white font-lg text-md pt-4">Alive Steak<br/><span className="text-white font-bold text-2xl">12</span></p>

                                        </div>
                                    </div>

                                </div>
                                <div className="second-col h-[16rem]">
                                    
                                </div>
                            </div>


                        </div>
                        <div className="rounded-lg h-[16rem] mx-2 xsm:my-2 match-card-three">
                            
                        <div className="grid grid-cols-2">
                                <div className="px-2">
                                    <img className="py-2 " src={Csgologo}/>
                                        <div className="pt-6">
                                             <p className="text-white pt-4">Kills / Death</p>

                                            <div class="w-full bg-[#ffffff91] rounded-full h-2 ">
                                            <div class="bg-white rounded-full h-2 w-[4rem]" ></div>
                                            </div>
                                                <p className="text-white pt-4">Win / Loose</p>
                                            <div class="w-full bg-[#ffffff91] rounded-full h-2 ">
                                            <div class="bg-white rounded-full h-2 w-[4rem]" ></div>
                                            </div>
                                        </div>

                                    <div className="grid grid-cols-2 mx-auto text-center">
                                        <div>
                                            <p className="text-white font-lg text-md pt-4">Unbeaten Strike<br/><span className="text-white font-bold text-2xl">23</span></p>
                                        </div>

                                        <div>
                                        <p className="text-white font-lg text-md pt-4">Alive Steak<br/><span className="text-white font-bold text-2xl">12</span></p>

                                        </div>
                                    </div>

                                </div>
                                <div className="third-col h-[16rem]">
                                    
                                </div>
                            </div>

                        </div>

                </div>

            </div>


        </>
    );

}