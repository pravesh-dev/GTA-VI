import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import logo from '/gta6-logo.png'
import rockstar from '/rockstar.png'

const App = () => {
  let [isContent, setIsContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power3.inOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 26,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setIsContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(()=> {
    if(!isContent) return;

  })
  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg2-trasparent.png"
            width="100%"
            height="100%"
            y="-10%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          ></image>
        </svg>
      </div>
      {isContent && (
        <div className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <header className="w-full py-2 px-16 flex justify-between items-center absolute top-0 left-0 z-[10] ">
              <div className="flex gap-2 items-center">
                <img className="w-10" src={rockstar} alt="Rockstar logo" />
                <span className="w-[2px] h-8 bg-white/80 ml-1 rounded-full"></span>
                <img className="w-12" src={logo} alt="GTA VI logo" />
              </div>
              <nav className="navbar">
                <a href="/">People</a>
                <a href="/">Places</a>
                <a href="/">Trailers</a>
                <a href="/">Downloads</a>
              </nav>
              <p>2026</p>
            </header>
            <div className="imagesdiv w-full h-screen relative overflow-hidden">
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src="./sky2.png"
                alt="sky image"
              />
              <img
                className="w-full h-full object-cover absolute top-0 left-0"
                src="./bg2-trasparent.png"
                alt="background image"
              />
              <img
                className="h-[70%] sm:h-[90%] absolute bottom-0 right-0"
                src="./girlbg.png"
                alt="girl image"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
