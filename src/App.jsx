import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import logo from '/gta6-logo.png'
import rockstar from '/rockstar.png'

const App = () => {
  let [isContent, setIsContent] = useState(false);
  let mainRef = useRef(null)

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

    gsap.from(".main", {
      scale: 1.7,
      rotate: '-10deg',
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.from(".skyImage", {
      scale: 1.5,
      rotate: '-20deg',
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.from(".bgImage", {
      scale: 1.8,
      rotate: '-3deg',
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.from(".character", {
      scale: 3,
      x: "-50%",
      bottom: "100%",
      rotate: '-20deg',
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });


    mainRef.current?.addEventListener('mousemove', (e)=>{
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to('.main .text', {
        x: xMove * 0.4,
        y: yMove * 0.4
      })
      gsap.to('.skyImage', {
        x: xMove * 0.9,
        y: yMove * 0.9
      })
      gsap.to('.bgImage', {
        x: xMove * 1.6,
        y: yMove * 1.6
      })
    })
  }, [isContent])
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
        <div ref={mainRef} className="main w-full">
          <div className="landing w-full h-screen bg-black">
            <header className="w-full py-4 px-4 sm:px-8 lg:px-16 flex justify-between items-center absolute top-0 left-0 z-[10] ">
              <div className="flex gap-2 items-center">
                <img className="w-8 sm:w-10" src={rockstar} alt="Rockstar logo" />
                <span className="w-[1.4px] sm:w-[2px] h-6 sm:h-8 bg-white/80 ml-1 rounded-full"></span>
                <img className="w-10 sm:w-12" src={logo} alt="GTA VI logo" />
              </div>
              <nav className="navbar gap-5 lg:gap-12 hidden sm:flex">
                <a className="text-sm lg:text-lg text-white tracking-wider capitalize" href="/">People</a>
                <a className="text-sm lg:text-lg text-white tracking-wider capitalize" href="/">Places</a>
                <a className="text-sm lg:text-lg text-white tracking-wider capitalize" href="/">Trailers</a>
                <a className="text-sm lg:text-lg text-white tracking-wider capitalize" href="/">Downloads</a>
              </nav>
              <p className="px-6 py-1 rounded-sm text-white text-xs tracking-wide lg:text-lg border border-white">Soon in 2026</p>
            </header>
            <div className="imagesdiv w-full h-screen relative overflow-hidden pointer-events-none">
              <img
                className="skyImage w-full h-full object-cover absolute top-0 left-0 scale-[1.3]"
                src="./sky2.png"
                alt="sky image"
              />
              <img
                className="bgImage w-full h-full object-cover absolute top-0 left-0 scale-[1.3]"
                src="./bg2-trasparent.png"
                alt="background image"
              />
              <div className="text text-white flex flex-col gap-3 lg:gap-1 absolute top-20 left-[20%] lg:left-[50%] select-none">
                <h1 className="text-6xl sm:text-8xl lg:text-9xl leading-none">grand</h1>
                <h1 className="text-6xl sm:text-8xl lg:text-9xl leading-none ml-14 lg:ml-28 lg:pt-5">theft</h1>
                <h1 className="text-6xl sm:text-8xl lg:text-9xl leading-none">auto</h1>
              </div>
              <img
                className="character h-[70%] sm:h-[90%] absolute bottom-0 right-0"
                src="./girlbg.png"
                alt="girl image"
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-2 px-2 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-1 sm:gap-2 items-center">
                <i className="text-sm  sm:text-xl ri-arrow-down-line"></i>
                <h3 className="text-[0.6rem] sm:text-sm font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-5 sm:h-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
