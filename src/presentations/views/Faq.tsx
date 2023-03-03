import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import listData from "../../data/faqListData.json";
import FaqList from "../components/faqList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Faq() {
  const [faqListData, setFaqListData] = useState<any>(null);
  const slideRef = useRef<any>(null);
  const [dataLength, setDataLength] = useState(null);
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    setFaqListData(listData.data);
  }, []);

  useEffect(() => {
    if (faqListData) {
      setDataLength(faqListData.length);
    }
  }, [faqListData]);
  const slickSettings = {
    slide: "li",

    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // centerPadding: "40px",
    // centerMode: true,
    dotsClass: "dots_custom",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          // customPaging: (i: any) => <div>{i + 1}</div>,
        },
      },
    ],
    beforeChange: (current: any, next: any) => {
      setActiveSlide(next + 1);
    },
  };
  return (
    <section id="FAQ" className="h-screen px-[2.5rem] md:px-0 ">
      <div className="relative mt-[50%] ">
        <p className="section-title ">FAQ</p>
        <ul className="mt-[3.4rem] md:mt-[7rem]">
          <Slider ref={slideRef} {...slickSettings}>
            {faqListData
              ? faqListData.map((item: any, index: any) => (
                  <FaqList data={item} key={index} />
                ))
              : null}
          </Slider>
        </ul>
        <p>
          {activeSlide}/{dataLength}
        </p>
      </div>
    </section>
  );
}
