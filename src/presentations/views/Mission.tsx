import MissionList from "../components/MissionList";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
export default function Mission({ screen, current }: any) {
  const [missionListData, setMissionListData] = useState<any>(null);
  const [screenSize, setScreenSize] = useState(screen as number);
  const { t } = useTranslation();
  const cardData = [
    {
      title: t(`mission.list.title0`),
      desc: t(`mission.list.desc0`),
    },
    {
      title: t(`mission.list.title1`),
      desc: t(`mission.list.desc1`),
    },
    {
      title: t(`mission.list.title2`),
      desc: t(`mission.list.desc2`),
    },
    {
      title: t(`mission.list.title3`),
      desc: t(`mission.list.desc3`),
    },
  ];
  useEffect(() => {
    setScreenSize(screen);
  }, [screen, screenSize]);

  useEffect(() => {
    if (cardData) {
      setMissionListData(cardData);
    }
  }, [t]);
  const slickSettiong = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    dotsClass: "dots_custom",
  };
  return (
    <section className="h-full relative text-center pt-[9rem] md:pt-[24rem]">
      <div className="pb-[12.6rem] ">
        <div
          className="inline-block bg-[#1d1d1d] border-2 border-black rounded-[30px] shadow-[2px_4px_0px_0px_rgba(0,0,0,1)] px-[2rem] py-[1rem]
        md:border-3 md:px-[4rem] md:py-[1rem]"
        >
          <span className="font-bold text-[1.8rem] md:text-[2.6rem] xl:text-[3.2rem]">
            {t(`mission.list.sectionTitle`)}
          </span>
        </div>
        <ul className="mt-[4.3rem] md:flex md:justify-between md:flex-wrap md:max-w-[650px] md:mx-auto xl:max-w-[1250px] xl:flex-nowrap xl:justify-around mission-list">
          {screenSize && screenSize < 767 ? (
            <Slider {...slickSettiong}>
              {missionListData
                ? missionListData.map((item: any, index: any) => (
                    <MissionList key={index.toString()} data={item} />
                  ))
                : null}
            </Slider>
          ) : missionListData ? (
            missionListData.map((item: any, index: any) => (
              <MissionList
                key={index.toString()}
                data={item}
                index={index}
                current={current}
              />
            ))
          ) : null}
        </ul>
      </div>
    </section>
  );
}
