import { useEffect, useState } from "react";
import itemListData from "../../data/experienceItemListData.json";
import ExperienceList from "../components/ExperienceList";
import ItemList from "../components/itemList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
const Experience = ({ current }: any) => {
  const [experienceListData, setExperienceListData] = useState<any>(null);
  const [experienceItemListData, setExperienceItemListData] = useState<any>(
    null
  );
  const { t } = useTranslation();
  const dataList = [
    {
      part: t(`experience.list.part0`),
      title: t(`experience.list.title0`),
      desc: t(`experience.list.desc0`),
    },
    {
      part: t(`experience.list.part1`),
      title: t(`experience.list.title1`),
      desc: t(`experience.list.desc1`),
    },
    {
      part: t(`experience.list.part2`),
      title: t(`experience.list.title2`),
      desc: t(`experience.list.desc2`),
    },
    {
      part: t(`experience.list.part3`),
      title: t(`experience.list.title3`),
      desc: t(`experience.list.desc3`),
    },
  ];
  useEffect(() => {
    if (dataList) {
      setExperienceListData(dataList);
      setExperienceItemListData(itemListData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const slickSettiong = {
    arrows: false,
    dots: false,
    slide: "li",
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 1500,
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1740,
        settings: {
          slidesToShow: 7,
        },
      },
    ],
  };

  return (
    <section
      id="Experience"
      className="relative text-center h-full flex-col justify-center items-center py-[10rem] md:text-start"
    >
      <p className="section-title">Experience</p>
      <ul className={`${current ? "experience-list" : ""}`}>
        {experienceListData
          ? experienceListData.map((item: any, index: any) => (
              <ExperienceList
                data={item}
                key={index.toString()}
                index={index}
                current={current}
              />
            ))
          : null}
      </ul>
      <ul className=" mt-[9.2rem] md:mt-[12rem] xl:mt-[28rem]">
        <Slider {...slickSettiong}>
          {experienceItemListData
            ? experienceItemListData.map((item: any, index: any) => (
                <ItemList data={item} key={index.toString()} />
              ))
            : null}
        </Slider>
      </ul>
    </section>
  );
};
export default Experience;
