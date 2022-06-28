import React, {useState, useRef} from "react";
import './home.css';
import './base.css';



import logo from '../images/logo.png';



const Home = () => {

    const isHovered = useRef(false);
    function enterMouse(e){
        isHovered.current = true;
    }
    function leaveMouse(e){
        isHovered.current = false;
    }
    return (
        <>
            <div className="nav-div">
                <nav className="nav">
                    <div className="nav-inner">
                        <a className="chakra-link nav-logo" href="#">
                            <div className="css-txft98">
                                <div className="css-ficzkz">
                                    <img alt="Logo" src={logo} loading="eager" className="chakra-image css-corjs" />
                                </div>
                                <strong translate="no">snappify</strong>
                            </div>
                        </a>
                        <div className="css-i9gxme"></div>
                        <button type="button" className="chakra-button chakra-menu__menu-button css-12920s0" aria-label="Open menu" id="menu-button-3" aria-expanded="false" aria-haspopup="menu" aria-controls="menu-list-3">
                            <span className="css-xl71ch">
                                <svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" className="css-eh0gyc" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor"></path>
                                    <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor"></path>
                                    <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                        <div className="chakra-stack css-8zgudq">
                            <a className="chakra-link chakra-link css-1ou18pb" aria-label="Pricing" role="group" __focus="[object Object]" href="/#pricing">Pricing<div aria-hidden="true" className="css-1sj25f6"></div></a>
                            <div className="css-1peclik"><div className="chakra-stack__divider css-ptp5tf"></div></div>
                            <div className="css-79elbk"><span aria-hidden="true" className="css-1f89hkk">New</span><a className="chakra-link chakra-link css-1ou18pb" aria-label="Dashboard" role="group" __focus="[object Object]" href="/dashboard">Dashboard<div aria-hidden="true" className="css-1sj25f6"></div></a></div>
                            <div className="css-1peclik"><div className="chakra-stack__divider css-ptp5tf"></div></div>
                            <a className="chakra-link chakra-link css-1ou18pb" aria-label="Editor" role="group" __focus="[object Object]" href="/editor">Editor<div aria-hidden="true" className="css-1sj25f6"></div></a>
                            <div className="css-1peclik"><div className="chakra-stack__divider css-ptp5tf"></div></div>
                            <div id="popover-trigger-5" aria-haspopup="dialog" aria-expanded="false" aria-controls="popover-content-5" className="css-0">
                                <span className="chakra-link css-krrdfs" aria-label="Resources" role="group" onMouseOver={enterMouse} onMouseLeave={leaveMouse}>Resources<div aria-hidden="true" className="css-1sj25f6"></div>
                                </span></div>
                            <div className="chakra-popover__popper css-1qq679y top-div" data-popper-placement="bottom">
                                <section id="popover-content-5" tabindex="-1" role="tooltip" className="chakra-popover__content css-18hijtz nav-section" aria-describedby="popover-body-5">
                                    <div id="popover-body-5" className="chakra-popover__body css-12x78yb">
                                        <div className="css-j7qwjs">
                                            <a className="chakra-link chakra-button css-1grxdwh" href="/#features">Features</a>
                                            <hr aria-orientation="horizontal" className="chakra-divider css-p3dvmf" />
                                            <a className="chakra-link chakra-button css-1grxdwh" href="/docs">Documentation</a>
                                            <hr aria-orientation="horizontal" className="chakra-divider css-p3dvmf" />
                                            <a className="chakra-link chakra-button css-1grxdwh" href="/blog">Blog</a>
                                            <hr aria-orientation="horizontal" className="chakra-divider css-p3dvmf" />
                                            <a className="chakra-link chakra-button css-1grxdwh" href="/changelog">Changelog</a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="css-1peclik"><div className="chakra-stack__divider css-ptp5tf"></div></div>
                            <a className="chakra-link chakra-button css-1dwclqh" href="/#login">Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Home;