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
export default function Main() {
  const [screenSize, setScreenSize] = useState(0 as number);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
    // }
  };
  const [height, setHeight] = useState(0);
  const expRef = useRef<any>(null);
  useEffect(() => {
    console.log(expRef.current);
  }, [expRef]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="bg-[#111111] text-white">
          <div className="parallax">
            <Home />
            <Mission screen={window.innerWidth} />
          </div>
          <Experience
            ref={(ref) => {
              expRef.current = ref;
            }}
          />
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
