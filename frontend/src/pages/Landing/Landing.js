import React, { useEffect, useState } from "react";
import '../Landing/Landing.css'

import { Link } from "react-router-dom";
import Herologo from '../../images/hero-logo.png'
import Csgo from '../../images/csgo.png'
import Fortnite from '../../images/fortnite.png'
import Cod from '../../images/cod.png'
import Match from '../../images/match-card.png'
import B1 from '../../images/b1.png'
import B2 from '../../images/b2.png'
import B3 from '../../images/b3.png'
import B4 from '../../images/b4.png'
import Youtube from '../../images/subtract.png'
import Twitch from '../../images/twitch.png'
import Csicon from '../../images/cs-icon.png'
import P1 from '../../images/p1.png'
import P2 from '../../images/p2.png'
import P3 from '../../images/p3.png'
import P4 from '../../images/p4.png'
import Flag from '../../images/flag.png'
import Red from '../../images/red.png'
import Purple from '../../images/purple.png'
import Winner1 from '../../images/WINNERS-02.png'
import Winner2 from '../../images/WINNERS-03.png'
import Winner3 from '../../images/WINNERS-04.png'
import { ConnectButton, Icon } from "web3uikit";
import { useMoralis } from "react-moralis";



// components

import Navbar from "../../components/Header/Header.js";
import Table from "../../components/Table/Table";
import axios from "axios";


export default function Landing() {
  const [channal, setchannal] = useState();
  async function getData() {
    const res = await axios.get(`http://localhost:5000/ambasdor/data`);
    console.log(res.data.ambasdor,"landing");
    setchannal(res.data.ambasdor)
    
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar transparent />
      <main>
        <div className=" hero-landing-bg relative  flex content-center items-center h-[80rem] bg-[#090d15]		">
          <div className="top-0 w-full h-full bg-center">
          <div className="grid grid-cols-2">
                <div className="mx-auto px-40 pt-40 xsm:px-12 2xl:px-40 xl:px-40">
                <div className="">
                  <img src={Herologo}/>
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-white ">
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.

                  </p>
                  <br></br>
                  <ConnectButton/>

                  
                </div>
                </div>
            </div>
          </div>
            

          {/* <div className="text-left ">
            <div className="flex flex-wrap items-center mt-[-30rem]">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-left">
             

              </div>
              

            </div>
          </div> */}
          
          {/* <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div> */}
        </div>

        {/* <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Divide details about your product or agency work into
                      parts. A paragraph describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Keep you user engaged by providing meaningful information.
                      Remember that by this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Write a few lines about each one. A paragraph describing a
                      feature will be enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                  Check Notus React!
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section> */}



<section className="pb-24 home-sec-2">

          <div className="container mx-auto px-28 xsm:px-0 sm:px-16 ">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold lg-tex-red-500">Upcoming <span>Games</span></h2>
                <p className=" subhead text-lg leading-relaxed m-4 text-blueGray-500">
                Choose a game right now. Participate in battles or place bets online.
                </p>
              </div>
            </div>
    
<div class="sm:hidden">
<label for="tabs" class="sr-only">Select your country</label>
<select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option>Profile</option>
<option>Canada</option>
<option>France</option>
<option>Germany</option>
</select>
</div>
<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
<li class=" w-full">
<a href="#" class=" csgo inline-block p-4 w-full text-gray-900 bg-gray-100 rounded-l-lg active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page"><img  class="home-sec-2-games  mx-auto" src={Csgo} /></a>
</li>
<li class=" w-full">
<a href="#" class=" cod inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50   focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"><img class="home-sec-2-games  mx-auto"src={Cod}/></a>
</li>
<li class="w-full ">
<a href="#" class=" fortnite inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50  focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"><img class="home-sec-2-games  mx-auto" src={Fortnite}/></a>
</li>

</ul>
<div class="container my-12 mx-auto xsm:px-0 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <div class="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/3">

            <article class="overflow-hidden rounded-lg shadow-lg">

              <div class="px-2 py-4 sec-2-match-cards">
                <div>
                  <img class="float-right" src={Csicon}/>
                </div>
                <br/>
                <div>
                  <p className="text-white text-center">de_dust2</p>
                  <h2 className="text-white text-center font-semibold	text-2xl xsm:text-lg mt-3  sm:text-xl xl:text-2xl">11:00 AM, 16 APR</h2>
                  <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p>
                </div>
                <div className="flex text-white items-center mt-9 xsm:mx-auto">
                  <span className="text-[#9d00cf] text-center text-xl px-6 font-semibold xsm:px-3 xl:px-4 xl:text-xl 2xl:px-6  2xl:text-2xl xsm:text-base">$GSP 2,023 <br/><p className="text-base text-[#727e8f]">Match Prize</p></span>|
                  <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">12 / 18 <br/><p className="text-base text-[#727e8f]">Players</p></span>|
                  <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">2x2<br/><p className="text-base text-[#727e8f]">Type</p></span>

                </div>
                  <div className="mt-8 px-4 flex">
                  <p className="text-[#727e8f] text-sm text-center">Entrance Fee:<span className="text-white font-medium	"> $GSP 50</span></p>
                  <button
                  className=" bg-[#292b39] rounded-lg   active:bg-blueGray-50 text-lg text-white font-bold ml-6 px-8 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   More <i className="fas fa-arrow-alt-circle-right"></i>
                </button>
                  </div>
              </div>

               {/* <img src={Match}/> */}

            </article>

        </div>
        <div class="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/3">

<article class="overflow-hidden rounded-lg shadow-lg">

  <div class="px-2 py-4 sec-2-match-cards">
    <div>
      <img class="float-right" src={Csicon}/>
    </div>
    <br/>
    <div>
      <p className="text-white text-center">de_dust2</p>
      <h2 className="text-white text-center font-semibold	text-2xl xsm:text-lg mt-3  sm:text-xl xl:text-2xl">11:00 AM, 16 APR</h2>
      <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p>
    </div>
    <div className="flex text-white items-center mt-9 xsm:mx-auto">
      <span className="text-[#9d00cf] text-center text-xl px-6 font-semibold xsm:px-3 xl:px-4 xl:text-xl 2xl:px-6  2xl:text-2xl xsm:text-base">$GSP 2,023 <br/><p className="text-base text-[#727e8f]">Match Prize</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">12 / 18 <br/><p className="text-base text-[#727e8f]">Players</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">2x2<br/><p className="text-base text-[#727e8f]">Type</p></span>

    </div>
      <div className="mt-8 px-4 flex">
      <p className="text-[#727e8f] text-sm text-center">Entrance Fee:<span className="text-white font-medium	"> $GSP 50</span></p>
      <button
      className=" bg-[#292b39] rounded-lg   active:bg-blueGray-50 text-lg text-white font-bold ml-6 px-8 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
    >
       More <i className="fas fa-arrow-alt-circle-right"></i>
    </button>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div><div class="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/3">

<article class="overflow-hidden rounded-lg shadow-lg">

  <div class="px-2 py-4 sec-2-match-cards">
    <div>
      <img class="float-right" src={Csicon}/>
    </div>
    <br/>
    <div>
      <p className="text-white text-center">de_dust2</p>
      <h2 className="text-white text-center font-semibold	text-2xl xsm:text-lg mt-3  sm:text-xl xl:text-2xl">11:00 AM, 16 APR</h2>
      <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p>
    </div>
    <div className="flex text-white items-center mt-9 xsm:mx-auto">
      <span className="text-[#9d00cf] text-center text-xl px-6 font-semibold xsm:px-3 xl:px-4 xl:text-xl 2xl:px-6  2xl:text-2xl xsm:text-base">$GSP 2,023 <br/><p className="text-base text-[#727e8f]">Match Prize</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">12 / 18 <br/><p className="text-base text-[#727e8f]">Players</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">2x2<br/><p className="text-base text-[#727e8f]">Type</p></span>

    </div>
      <div className="mt-8 px-4 flex">
      <p className="text-[#727e8f] text-sm text-center">Entrance Fee:<span className="text-white font-medium	"> $GSP 50</span></p>
      <button
      className=" bg-[#292b39] rounded-lg   active:bg-blueGray-50 text-lg text-white font-bold ml-6 px-8 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
    >
       More <i className="fas fa-arrow-alt-circle-right"></i>
    </button>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div><div class="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/3">

<article class="overflow-hidden rounded-lg shadow-lg">

  <div class="px-2 py-4 sec-2-match-cards">
    <div>
      <img class="float-right" src={Csicon}/>
    </div>
    <br/>
    <div>
      <p className="text-white text-center">de_dust2</p>
      <h2 className="text-white text-center font-semibold	text-2xl xsm:text-lg mt-3  sm:text-xl xl:text-2xl">11:00 AM, 16 APR</h2>
      <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p>
    </div>
    <div className="flex text-white items-center mt-9 xsm:mx-auto">
      <span className="text-[#9d00cf] text-center text-xl px-6 font-semibold xsm:px-3 xl:px-4 xl:text-xl 2xl:px-6  2xl:text-2xl xsm:text-base">$GSP 2,023 <br/><p className="text-base text-[#727e8f]">Match Prize</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">12 / 18 <br/><p className="text-base text-[#727e8f]">Players</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">2x2<br/><p className="text-base text-[#727e8f]">Type</p></span>

    </div>
      <div className="mt-8 px-4 flex">
      <p className="text-[#727e8f] text-sm text-center">Entrance Fee:<span className="text-white font-medium	"> $GSP 50</span></p>
      <button
      className=" bg-[#292b39] rounded-lg   active:bg-blueGray-50 text-lg text-white font-bold ml-6 px-8 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
    >
       More <i className="fas fa-arrow-alt-circle-right"></i>
    </button>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div><div class="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/3">

<article class="overflow-hidden rounded-lg shadow-lg">

  <div class="px-2 py-4 sec-2-match-cards">
    <div>
      <img class="float-right" src={Csicon}/>
    </div>
    <br/>
    <div>
      <p className="text-white text-center">de_dust2</p>
      <h2 className="text-white text-center font-semibold	text-2xl xsm:text-lg mt-3  sm:text-xl xl:text-2xl">11:00 AM, 16 APR</h2>
      <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p>
    </div>
    <div className="flex text-white items-center mt-9 xsm:mx-auto">
      <span className="text-[#9d00cf] text-center text-xl px-6 font-semibold xsm:px-3 xl:px-4 xl:text-xl 2xl:px-6  2xl:text-2xl xsm:text-base">$GSP 2,023 <br/><p className="text-base text-[#727e8f]">Match Prize</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">12 / 18 <br/><p className="text-base text-[#727e8f]">Players</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">2x2<br/><p className="text-base text-[#727e8f]">Type</p></span>

    </div>
      <div className="mt-8 px-4 flex">
      <p className="text-[#727e8f] text-sm text-center">Entrance Fee:<span className="text-white font-medium	"> $GSP 50</span></p>
      <button
      className=" bg-[#292b39] rounded-lg   active:bg-blueGray-50 text-lg text-white font-bold ml-6 px-8 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
    >
       More <i className="fas fa-arrow-alt-circle-right"></i>
    </button>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div><div class="my-1 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/3">

<article class="overflow-hidden rounded-lg shadow-lg">

  <div class="px-2 py-4 sec-2-match-cards">
    <div>
      <img class="float-right" src={Csicon}/>
    </div>
    <br/>
    <div>
      <p className="text-white text-center">de_dust2</p>
      <h2 className="text-white text-center font-semibold	text-2xl xsm:text-lg mt-3  sm:text-xl xl:text-2xl">11:00 AM, 16 APR</h2>
      <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p>
    </div>
    <div className="flex text-white items-center mt-9 xsm:mx-auto">
      <span className="text-[#9d00cf] text-center text-xl px-6 font-semibold xsm:px-3 xl:px-4 xl:text-xl 2xl:px-6  2xl:text-2xl xsm:text-base">$GSP 2,023 <br/><p className="text-base text-[#727e8f]">Match Prize</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">12 / 18 <br/><p className="text-base text-[#727e8f]">Players</p></span>|
      <span className="text-center text-xl xsm:text-base xsm:px-3 xl:text-xl xl:px-4 2xl:text-2xl 2xl:px-6 px-6">2x2<br/><p className="text-base text-[#727e8f]">Type</p></span>

    </div>
      <div className="mt-8 px-4 flex">
      <p className="text-[#727e8f] text-sm text-center">Entrance Fee:<span className="text-white font-medium	"> $GSP 50</span></p>
      <button
      className=" bg-[#292b39] rounded-lg   active:bg-blueGray-50 text-lg text-white font-bold ml-6 px-8 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
    >
       More <i className="fas fa-arrow-alt-circle-right"></i>
    </button>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
        {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                            Article Title
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/>
                        <p class="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>

        </div> */}


    </div>
    <div className="mx-auto mt-[2rem] text-center	">
    <button
                  className=" mx-auto header-login-btn text-blueGray-700 active:bg-blueGray-50 text-1xl font-bold uppercase px-24 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  See all
                </button></div>
</div>





          </div>
        </section>



        <section className="pt-48 pb-32 home-sec-3">
          <div className="container mx-auto px-28 xsm:px-0 sm:px-16">
            <div className="flex flex-wrap justify-center text-center mb-10">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold"><span>Brand </span>ambassodors</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted.
                </p>
              </div>
            </div>
           

            <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

    {channal?.map((cards) => {
            
            return (
              <>
              <div class="my-1 px-1 w-full md:w-1/2 sm:w-1/2  lg:my-4 lg:px-3 lg:w-1/4">

<article class="overflow-hidden rounded-lg shadow-lg">

  <div class="px-2 py-4 bg-[#241843]">
    <div>
      <img class="float-right" src={Csicon}/>
    </div>
    <br/>
    <div>
      {/* <p className="text-white text-center">de_dust2</p>
      <h2 className="text-white text-center font-semibold	text-2xl mt-3">11:00 AM, 16 APR</h2>
      <p className="text-center text-white mt-3 bg-[#9d00cf]  mx-24 text-smrounded-md">STAKED MATCH</p> */}
      <img src={cards?.img}/>
    </div>
    <div className="px-2 text-white items-center mt-9">
      <img src={Flag}/> <span> {cards?.username}</span><br/>
      <p className="text-sm text-[#727e8f]">{cards?.About}
</p>
    </div>
      <div className="mt-8 px-4 flex">
      <p className="text-white font-medium text-xl text-center px-6">{cards?.youtube} <br/><span className="text-[#727e8f] text-sm	"> Youtube</span></p>
      <p className="text-white font-medium text-xl text-center px-6">{cards?.twitter} <br/><span className="text-[#727e8f] text-sm	"> Youtube</span></p>
     
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
              
              
  
 


              </>
            )})}

  
<div class=" my-1 mx-auto sm:w-1/2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

<article class="youtube-col mx-auto flex items-center overflow-hidden rounded-lg ">

<img src={Youtube}/><p className="text-3xl pl-2 font-semibold">15400,0000<br/> <span className="text-white text-sm">Youtube subscriber</span></p>


</article>

</div>
<div class="twitch-col my-1 sm:w-1/2 mx-auto px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">

<article class="flex  items-center overflow-hidden rounded-lg ">

<img src={Twitch}/><p className="text-3xl pl-2 font-semibold">15400,0000<br/> <span className="text-white text-sm">Twitch subscriber</span></p>


</article>

</div>


    </div>

</div>
          </div>



        </section>

        <section className="pt-32 pb-48 home-sec-4">
          <div className="container mx-auto px-28 xsm:px-0 sm:px-16 ">
            <div className="flex flex-wrap justify-center text-center  mb-10">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Leaderboard</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted.
                </p>
              </div>
            </div>

            <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <div class="my-1 xsm:w-1/2 px-1 w-full sm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/6">

            <article class="overflow-hidden rounded-lg ">

              <div class="px-2 py-4">
                <img src={Winner1}/>
              </div>

               {/* <img src={Match}/> */}

            </article>

        </div>
        <div class="my-1 xsm:w-1/2 px-1 w-full md:w-1/2 sm:w-1/2 lg:my-4 lg:px-3 lg:w-1/6">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 pt-16">
      <div>
        <h2 class="font-bold text-2xl uppercase xsm:text-base sm:text-lg xl:text-xl 2xl:text-2xl">John m</h2>
        <p class="font-semibold text-xl xsm:text-base sm:text-lg uppercase xl:text-xl 2xl:text-2xl">$GSP 19,950</p>
        <p class="text-[#727e8f] xsm:text-base sm:text-lg">Earning</p>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 xsm:w-1/2 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 sm:w-1/2 lg:w-1/6">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 py-4">
    <img src={Winner2}/>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 sm:w-1/2 px-1 w-full md:w-1/2 xsm:w-1/2 lg:my-4 lg:px-3 lg:w-1/6">

<article class="overflow-hidden rounded-lg ">

<div class="px-2 pt-16">
      <div>
        <h2 class="font-bold text-2xl uppercase xsm:text-base sm:text-lg xl:text-xl 2xl:text-2xl">John m</h2>
        <p class="font-semibold text-xl xsm:text-base sm:text-lg uppercase xl:text-xl 2xl:text-2xl">$GSP 19,950</p>
        <p class="text-[#727e8f] xsm:text-base sm:text-lg">Earning</p>
      </div>
  </div>

{/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 px-1 sm:w-1/2 w-full xsm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/6">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 py-4">
    <img src={Winner3}/>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 px-1 w-full sm:w-1/2 xsm:w-1/2 md:w-1/2 lg:my-4 lg:px-3 lg:w-1/6">

<article class="overflow-hidden rounded-lg">

<div class="px-2 pt-16">
      <div>
        <h2 class="font-bold text-2xl uppercase xsm:text-base sm:text-lg xl:text-xl 2xl:text-2xl">John m</h2>
        <p class="font-semibold text-xl xsm:text-base sm:text-lg uppercase xl:text-xl 2xl:text-2xl">$GSP 19,950</p>
        <p class="text-[#727e8f] xsm:text-base sm:text-lg">Earning</p>
      </div>
  </div>

{/* <img src={Match}/> */}

</article>
</div>

    </div>
</div>

        <Table/>
            </div>
            </section>

            
        <section className="pt-32 pb-6 home-sec-5 ">
          <div className="container mx-auto px-28 xsm:px-0 sm:px-16">
            <div className="flex flex-wrap justify-center text-center  mb-10">
              <div className="w-full md:8/12 lg:w-10/12 px-4">
                <h2 className="text-4xl font-semibold">About <span>GetSetPlay</span></h2>
                <p className="text-lg leading-relaxed m-4 text-white">
                GetSetPlay is the most popular gaming platform today. The goal of our company is to renew the world and change the world for the better. A team of professionals worked on the creation of this service We strive to make sure that every person who loves games can also earn money on them.

                </p>
              </div>
            </div>

            <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

       
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 lg:w-1/4">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 ">
      <div class="text-center">
        <h2 class="font-bold text-3xl uppercase">$GSP 2,023,351</h2>
        <p class="text-[#727e8f]">Total Earning</p>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 lg:w-1/4">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 ">
      <div class="text-center">
        <h2 class="font-bold text-3xl uppercase">128,658</h2>
        <p class="text-[#727e8f]">Players</p>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 lg:w-1/4">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2">
      <div class="text-center">
        <h2 class="font-bold text-3xl uppercase">43,619</h2>
        <p class="text-[#727e8f]">Games Everyday</p>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 lg:w-1/4">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2">
      <div class="text-center">
        <h2 class="font-bold text-3xl uppercase">2,815</h2>
        <p class="text-[#727e8f]">New Players Today</p>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
</div>
</div>
<hr className="w-full"/>

<div class="container mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

       
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 lg:w-1/2">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 ">
      <div class="text-left">
        <p class="text-sm text-white">© 2022 Getsetplay. All rights reserved.</p>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>
<div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-3 lg:w-1/2">

<article class="overflow-hidden rounded-lg ">

  <div class="px-2 inline-flex float-right">
      <div class="text-center text-white">
          <span>Terms of service</span> |  
          <span>  Privacy Policy</span>
      </div>
  </div>

   {/* <img src={Match}/> */}

</article>

</div>

</div>
</div>
 
            </div>
            </section>
      
      </main>
    </>
  );
}
