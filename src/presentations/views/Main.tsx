import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Mission from "./Mission";
import Experience from "./Experience";
import Roadmap from "./Roadmap";
import Community from "./Community";
import Faq from "./Faq";
import Launcher from "./Launcher";
import Footer from "./Footer";
import { useInView, InView } from "react-intersection-observer";

export default function Main() {
  // const [screenSize, setScreenSize] = useState(0 as number);
  const [activeSectionIndex, setActiveSectionIndex] = useState<any>(null);

  const handleResize = () => {
    // setScreenSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log(activeSectionIndex);
  }, [activeSectionIndex]);
  return (
    <>
      <div className="overflow-hidden">
        <Header activeIndex={activeSectionIndex} />
        <div className="bg-[#111111] text-white ">
          <Home />
          <div className="relative z-10 bg-[#111111]">
            <InView
              as="div"
              onChange={(inView, entry) => {
                // console.log("Inview:", index, inView);
                if (inView) {
                  setActiveSectionIndex(0);
                }
              }}
              threshold={0.6}
            >
              <Mission screen={window.innerWidth} />
            </InView>
            <InView
              as="div"
              onChange={(inView, entry) => {
                console.log("Inview:", inView);
                if (inView) {
                  setActiveSectionIndex(1);
                }
              }}
              threshold={0.6}
            >
              <div />
            </InView>
            <Experience />

            <InView
              as="div"
              onChange={(inView, entry) => {
                // console.log("Inview:", index, inView);
                if (inView) {
                  setActiveSectionIndex(2);
                }
              }}
              threshold={0.6}
            >
              <Roadmap screen={window.innerWidth} />
            </InView>
            <InView
              as="div"
              onChange={(inView, entry) => {
                // console.log("Inview:", index, inView);
                if (inView) {
                  setActiveSectionIndex(3);
                }
              }}
              threshold={0.6}
            >
              <Community />
            </InView>
            <InView
              as="div"
              onChange={(inView, entry) => {
                // console.log("Inview:", index, inView);
                if (inView) {
                  setActiveSectionIndex(4);
                }
              }}
              threshold={0.6}
            >
              <Faq />
            </InView>
            <Launcher />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
