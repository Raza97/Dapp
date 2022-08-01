import React from "react";
import '../Cards/index.css'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import News from '../../images/news1.png'
import News2 from '../../images/news2.png'
import News3 from '../../images/news3.png'
import News4 from '../../images/news4.png'



export default function CarouselCards(){
  
    return(
        <> 
           <div className=" bg-[#090d15] pt-2 pb-2 text-center">
            <div className=" mx-2 ml-10   rounded-md ">
                        <div className="px-4">
                            <h2 className="text-white text-left font-bold text-2xl py-3">Browse Games</h2>
                            <div className="grid grid-cols-6">
                    <div className="news-col-1 rounded-lg w-[15rem] h-[18rem] ">
                       
                    </div>
                    <div className="news-col-2 rounded-lg w-[15rem] h-[18rem] ">
                       
                       </div>
                       <div className="news-col-3 rounded-lg w-[15rem] h-[18rem] ">
                       
                    </div>
                    <div className="news-col-4 rounded-lg w-[15rem] h-[18rem] ">
                       
                    </div>
                    <div className="news-col-1 rounded-lg w-[15rem] h-[18rem] ">
                       
                    </div>
                    <div className="news-col-2 rounded-lg w-[15rem] h-[18rem] ">
                       
                    </div>
                    
                    </div>
                    
                   
                </div>


                </div>
                </div>
        
        </>
    );
}
