import MissionList from "../components/MissionList";
import listData from "../../data/missionListData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
export default function Mission({ screen }: any) {
  const [missionListData, setMissionListData] = useState<any>(null);
  const [screenSize, setScreenSize] = useState(screen as number);
  useEffect(() => {
    if (listData) {
      setMissionListData(listData.data);

      setScreenSize(screen);
    }
  }, [screen]);
  const slickSettiong = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // centerMode: true,
    // centerPadding: "60px",
    dotsClass: "dots_custom",
  };
  return (
    <section id="Mission" className="relative text-center bg-black">
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden ">
        <p className="section-title">Mission</p>
        <p className=" font-bold text-[1.8rem] max-w-[240px] mt-[3.4rem] md:max-w-[567px] md:text-[2.6rem] xl:max-w-[751px] xl:text-[3.6rem] xl:leading-[5.4rem] xl:mt-[7.2rem]">
          <span className="block font-bold text-[1.8rem] md:text-[2.6rem] xl:max-w-[751px] xl:text-[3.6rem] xl:leading-[5.4rem]">
            블록체인 기술로 더 많은 사람들이 새로운 금융 시장과
          </span>
          디지털 피트니스를 누릴 수 있도록
        </p>
        <p className="font-semibold text-[1.4rem] w-[302px] break-keep mt-[2.4rem] md:w-[567px] xl:w-[972px] xl:text-[2.4rem] xl:leading-[4.32rem]">
          대한민국의 국민 중 60.8%는 생활체육에 참여합니다.¹그 중 등산과 걷기를
          하는 54.9%의 국민들에게 디지털 피트니스를 누릴 수 있도록 아낌없이
          지원하겠습니다.
        </p>
        <p className="text-[1.2rem] text-[#808080] mt-[2.4rem] md:text-[1.4rem] xl:text-[1.8rem]">
          1. 문화체육관광부, 국민생활체육조사 2021
        </p>
      </div>
      <div className="h-full pb-[12.6rem] relative ">
        <div
          className="inline-block bg-[#1d1d1d] border-2 border-black rounded-[30px] shadow-[2px_4px_0px_0px_rgba(0,0,0,1)] px-[2rem] py-[1rem]
        md:border-3 md:px-[4rem] md:py-[1rem]"
        >
          <span className="font-bold text-[1.8rem] md:text-[2.6rem] xl:text-[3.2rem]">
            등산으로 시작하는 가자고
          </span>
        </div>
        <ul className="mt-[4.3rem] md:flex md:justify-between md:flex-wrap md:max-w-[650px] md:mx-auto xl:max-w-[1250px] xl:flex-nowrap xl:justify-around">
          {screen < 767 ? (
            <Slider {...slickSettiong}>
              {missionListData
                ? missionListData.map((item: any, index: any) => (
                    <MissionList key={index.toString()} data={item} />
                  ))
                : null}
            </Slider>
          ) : missionListData ? (
            missionListData.map((item: any, index: any) => (
              <MissionList key={index.toString()} data={item} />
            ))
          ) : null}
        </ul>
      </div>
      <div />
    </section>
  );
}
