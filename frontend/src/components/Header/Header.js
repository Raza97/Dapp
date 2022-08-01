/*eslint-disable*/
import React from "react";
import '../Header/Header.css'
import { Link } from "react-router-dom";
import Gsplogo from '../../images/GET-SET-PLAY.png';
import { useMoralis } from "react-moralis";


import { ConnectButton, Icon } from "web3uikit";

// components


export default function Header(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [showMyModal, setShowMyModal] = React.useState(false);
  const [showMyWalletModal, setShowMyWalletModal] = React.useState(false);
  const [showMyRegisterModal, setShowMyRegisterModal] = React.useState(false);

  const handleOnClose= () => setShowMyModal(false)
  const handleOnCloseWallet= () => setShowMyWalletModal(false)

  const handleOnCloseRegister= () => setShowMyRegisterModal(false)

  return (
    <>
      <nav className="top-nav-bar top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          {/* <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Notus React
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div> */}
          <img src={Gsplogo}/>
          <div
            className={
              "lg:flex flex-grow items-center  lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
               <li className="flex items-center">
                <a
                  className="lg:text-grey lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  Token Price  <span class="text-white px-2">  $GSP 1.23</span>
                </a>
              </li> 
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {/* <li className="flex items-center">
                <PagesDropdown />
              </li> */}
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-telegram text-2xl leading-2xl " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-react%2F%23%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20React%20UI%20Kit%20and%20Admin.%20Let%20Notus%20React%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level.%20"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-youtube text-2xl leading-2xl " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-auth-navbar"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-discord text-2xl leading-2xl " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-react?ref=nr-auth-navbar"
                  target="_blank"
                >
                  <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-2xl leading-2xl " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li>

              <li className="flex items-center">
              {/* <button onClick={() => setShowMyWalletModal(true)}
                  className="header-login-btn text-blueGray-700 active:bg-blueGray-50 text-1xl font-bold uppercase px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   CONNECT
                </button>
                 */}
                <ConnectButton/>
                {/* <button onClick={() => setShowMyModal(true)}
                  className="header-login-btn text-blueGray-700 active:bg-blueGray-50 text-1xl font-bold uppercase px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Login
                </button>
                <button onClick={() => setShowMyRegisterModal(true)}
                  className="header-login-btn text-blueGray-700 active:bg-blueGray-50 text-1xl font-bold uppercase px-6 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                   Singup
                </button> */}
              </li>
            </ul>
          </div>
        </div>
       
      </nav>
      {/* <LoginModal onClose={handleOnClose} visible={showMyModal}/>
      <RegisterModal onClose={handleOnCloseRegister} visible={showMyRegisterModal}/>
      <WalletModal onClose={handleOnCloseWallet} visible={showMyWalletModal}/>  */}

    </>
  );
}
