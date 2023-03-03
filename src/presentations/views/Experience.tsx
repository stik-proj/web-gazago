import { forwardRef, useEffect, useState } from "react";
import listData from "../../data/experienceListData.json";
import itemListData from "../../data/experienceItemListData.json";
import ExperienceList from "../components/ExperienceList";
import ItemList from "../components/itemList";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Experience = forwardRef((ref) => {
  const [experienceListData, setExperienceListData] = useState<any>(null);
  const [experienceItemListData, setExperienceItemListData] = useState<any>(
    null
  );

  useEffect(() => {
    if (listData.data.length > 0) {
      setExperienceListData(listData.data);
      setExperienceItemListData(itemListData.data);
    }
  }, []);

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
      <ul>
        {experienceListData
          ? experienceListData.map((item: any, index: any) => (
              <ExperienceList
                data={item}
                key={index.toString()}
                index={index}
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
});
export default Experience;
