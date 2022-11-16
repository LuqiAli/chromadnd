import React from "react";
import Image from "next/image";

const Hero = () => {
  //   const [winWidth, changeWinWidth] = useState(window.innerWidth);

  //   const detectSize = () => {
  //     changeWinWidth(window.innerWidth);
  //   };

  //   useEffect(() => {
  //     window.addEventListener("resize", detectSize);

  //     return () => {
  //       window.removeEventListener("resize", detectSize);
  //     };
  //   }, [winWidth]);

  //   console.log(winWidth);
  //   const heroSource =
  //     winWidth <= 992 ? "/mobile-background.jpg" : "/desktop-background.jpg";

  return (
    <div className="hero">
      <div className="hero-background">
        <div className="navbar-background"></div>
        <div className="hero-gradient"></div>
        {/* <div className="hero-image"></div> */}
        <Image
          className="hero-image desktop-hero"
          src={"/desktop-background.jpg"}
          width="1800"
          height="750"
        />
        <Image
          className="hero-image mobile-hero"
          src={"/mobile-background.jpg"}
          width="1200"
          height="1800"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-text">WATCH YOUR IDEAS COME TO LIFE</h1>
        <a href="#projects" className="hero-button">
          START HERE
        </a>
      </div>
    </div>
  );
};

export default Hero;
