import React from "react";
import '../Cards/index.css'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Live1 from '../../images/live-recommend-1.png'
import Live2 from '../../images/live-recommend-2.png'
import Live3 from '../../images/live-recommend-3.png'
import Live4 from '../../images/live-recommend-4.png'
import Liveicon from '../../images/sidebar-icon-6.png'

// import Head1 from '../../assets/img/headline1.png'
// import Head2 from '../../assets/img/headline2.png'
// import Head3 from '../../assets/img/headline3.png'
// import Newsimg from '../../assets/img/edit-news-detail.png'
// import ChatD from '../../assets/img/chat-dots.png'



export default function LiveStreamCard(){
  
    return(
        <> 
           <div className=" bg-[#090d15] pt-2 pb-6 text-center">
            <div className=" mx-4 ml-10 mt-16  rounded-md ">
                      
                      <div>
                        <h2 className="text-white text-xl font-bold text-left my-3 mx-4">Recommended For you</h2>
                        <div className="grid grid-cols-5">
                            <div>
                                <div className="px-4 py-4 bg-[#171928] mx-4 my-2 rounded-lg">
                                    <img src={Live1}></img>
                                    <div className="text-left my-4">
                                    <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span> |  <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span>
                                    </div>
                                    <h2 className="text-white text-left pt-2 text-xl font-bold"> texting</h2>
                                    <p  className="text-[#8997a9] text-left">Jacob Jones</p>
                                    <div className="grid grid-cols-2 mt-4">
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>

                                    </div>
                                </div>
                            </div>
                            <div>
                            <div className="px-4 py-4 bg-[#171928] mx-4 my-2 rounded-lg">
                                    <img src={Live2}></img>
                                    <div className="text-left my-4">
                                    <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span> |  <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span>
                                    </div>
                                    <h2 className="text-white text-left pt-2 text-xl font-bold"> texting</h2>
                                    <p  className="text-[#8997a9] text-left">Jacob Jones</p>
                                    <div className="grid grid-cols-2 mt-4">
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>

                                    </div>
                                </div>


                            </div>
                            <div>
                            <div className="px-4 py-4 bg-[#171928] mx-4 my-2 rounded-lg">
                                    <img src={Live3}></img>
                                    <div className="text-left my-4">
                                    <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span> |  <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span>
                                    </div>
                                    <h2 className="text-white text-left pt-2 text-xl font-bold"> texting</h2>
                                    <p  className="text-[#8997a9] text-left">Jacob Jones</p>
                                    <div className="grid grid-cols-2 mt-4">
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>

                                    </div>
                                </div>


                            </div>
                            <div>
                            <div className="px-4 py-4 bg-[#171928] mx-4 my-2 rounded-lg">
                                    <img src={Live4}></img>
                                    <div className="text-left my-4">
                                    <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span> |  <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span>
                                    </div>
                                    <h2 className="text-white text-left pt-2 text-xl font-bold"> texting</h2>
                                    <p  className="text-[#8997a9] text-left">Jacob Jones</p>
                                    <div className="grid grid-cols-2 mt-4">
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>

                                    </div>
                                </div>

                            </div>
                            <div>
                            <div className="px-4 py-4 bg-[#171928] mx-4 my-2 rounded-lg">
                                    <img src={Live1}></img>
                                    <div className="text-left my-4">
                                    <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span> |  <span className="px-2 py-1 rounded-lg bg-[#1B2134] text-[#8997A9] text-sm">CS:GO</span>
                                    </div>
                                    <h2 className="text-white text-left pt-2 text-xl font-bold"> texting</h2>
                                    <p  className="text-[#8997a9] text-left">Jacob Jones</p>
                                    <div className="grid grid-cols-2 mt-4">
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>
                                        <div className="flex flex-wrap "><img src={Liveicon}/> Online :1406</div>

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
