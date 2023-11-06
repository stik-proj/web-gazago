import { useEffect, useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Mission from "./Mission";
import Experience from "./Experience";
import Roadmap from "./Roadmap";
import Community from "./Community";
import Launcher from "./Launcher";
import Footer from "./Footer";
import { InView } from "react-intersection-observer";
import Faq from "./Faq";

const Main = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState<any>(null);
  const [missionCheck, setMissionCheck] = useState<boolean>(false);
  const [experienceCheck, setExperienceCheck] = useState<boolean>(false);
  const [communityCheck, setCommunityCheck] = useState<boolean>(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth as number);
  const [screenScrollY, setScreenScrollY] = useState(window.scrollY as number);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };
  const handleScrollY = () => {
    setScreenScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Header activeIndex={activeSectionIndex} />
        <div className="bg-[#111111] text-white ">
          <Home current={screenScrollY} />
          <div className="relative z-10 bg-[#111111]">
            <InView
              as="div"
              onChange={(inView) => {
                if (inView) {
                  setActiveSectionIndex(0);
                  setMissionCheck(inView);
                } else {
                  setMissionCheck(false);
                }
              }}
              threshold={0.2}
            >
              <Mission
                screen={screenSize ? screenSize : 0}
                current={missionCheck}
              />
            </InView>
            <InView
              as="div"
              onChange={(inView) => {
                if (inView) {
                  setActiveSectionIndex(1);
                  setExperienceCheck(inView);
                } else {
                  setExperienceCheck(false);
                }
              }}
              threshold={0.0}
            >
              <Experience current={experienceCheck} />
            </InView>

            <InView
              as="div"
              onChange={(inView) => {
                if (inView) {
                  setActiveSectionIndex(2);
                }
              }}
              threshold={0.6}
            >
              <Roadmap screen={screenSize ? screenSize : 0} />
            </InView>
            <InView
              as="div"
              onChange={(inView) => {
                if (inView) {
                  setActiveSectionIndex(3);
                  setCommunityCheck(inView);
                } else {
                  setCommunityCheck(false);
                }
              }}
              threshold={0.2}
            >
              <Community current={communityCheck} />
            </InView>
            <InView
              as="div"
              onChange={(inView) => {
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
};

export default Main;
