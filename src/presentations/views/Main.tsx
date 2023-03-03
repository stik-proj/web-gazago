import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Home from "./Home";
import Mission from "./Mission";
import Experience from "./Experience";
import Roadmap from "./Roadmap";
import Community from "./Community";
import Faq from "./Faq";
import Launcher from "./Launcher";
import Footer from "./Footer";
import { useInView } from "react-intersection-observer";

export default function Main() {
  // const [screenSize, setScreenSize] = useState(0 as number);
  // const { ref, inView, entry } = useInView({
  //   threshold: 0,
  // });

  // const handleResize = () => {
  //   setScreenSize(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="bg-[#111111] text-white">
          <div className="parallax">
            <Home />
            <Mission screen={window.innerWidth} />
          </div>
          <Experience />
          <Roadmap screen={window.innerWidth} />
          <Community />
          <Faq />
          <Launcher />
          <Footer />
        </div>
      </div>
    </>
  );
}
