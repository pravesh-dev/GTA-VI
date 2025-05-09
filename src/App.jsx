import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
        <div className="w-full">
          <div className="landing w-full h-screen bg-black">
            <nav className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-16 bg-red-600"></nav>
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
