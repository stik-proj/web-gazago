import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import FaqList from "../components/faqList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { InView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
export default function Faq() {
  const [faqListData, setFaqListData] = useState<any>(null);
  const slideRef = useRef<any>(null);
  const [dataLength, setDataLength] = useState(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [currentView, setCurrentView] = useState<boolean>(false);
  const { t } = useTranslation();
  const listData = [
    {
      quater: t(`faq.list.quater0`),
      title: t(`faq.list.title0`),
      desc: t(`faq.list.desc0`),
    },
    {
      quater: t(`faq.list.quater1`),
      title: t(`faq.list.title1`),
      desc: t(`faq.list.desc1`),
    },
    {
      quater: t(`faq.list.quater2`),
      title: t(`faq.list.title2`),
      desc: t(`faq.list.desc2`),
    },
    {
      quater: t(`faq.list.quater3`),
      title: t(`faq.list.title3`),
      desc: t(`faq.list.desc3`),
    },
  ];
  useEffect(() => {
    setFaqListData(listData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  useEffect(() => {
    if (faqListData) {
      setDataLength(faqListData.length);
    }
  }, [faqListData]);
  const handleNextSlide = () => {
    slideRef.current.slickNext();
  };
  const handlePrevSlide = () => {
    slideRef.current.slickPrev();
  };

  const slickSettings = {
    slide: "li",
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: any, next: any) => {
      setActiveSlide(next + 1);
    },
  };
  return (
    <section
      id="FAQ"
      className="h-screen md:h-full 2xl:h-screen  px-[2.5rem] md:px-0 "
    >
      <div className="h-full relative py-[25%] md:py-[10%]">
        <p className="section-title ">FAQ</p>
        <InView
          as="div"
          onChange={(inView) => {
            if (inView) {
              setCurrentView(inView);
            } else {
              setCurrentView(false);
            }
          }}
          threshold={0.6}
        >
          <ul
            className={`mt-[3.4rem] md:mt-[7rem] ${
              currentView ? "faq-list" : ""
            }`}
          >
            <Slider ref={slideRef} {...slickSettings}>
              {faqListData
                ? faqListData.map((item: any, index: any) => (
                    <FaqList data={item} key={index} index={index} />
                  ))
                : null}
            </Slider>
          </ul>
        </InView>

        <div className="flex justify-center items-center mt-[3rem] md:mt-[4.7rem] ">
          <div className="flex justify-between items-center w-[184px] md:w-[240px]">
            <button onClick={handlePrevSlide}>
              <img
                className={`w-[40px] md:w-[57px] ${
                  activeSlide - 1 === 0 ? "opacity-[0.3]" : ""
                }`}
                src="/img/faq/img_faq_prev-button.svg"
                alt=""
              />
            </button>
            <p className="text-[1.8rem] font-[500] leading-[3.2rem] text-[#c6c6c6]">
              {activeSlide} / {dataLength}
            </p>
            <button onClick={handleNextSlide}>
              <img
                className={`w-[40px] md:w-[57px] ${
                  activeSlide === dataLength ? "opacity-[0.3]" : ""
                }`}
                src="/img/faq/img_faq_next-button.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
