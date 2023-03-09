import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FaqList({ data, index }: any) {
  const { t, i18n } = useTranslation();

  const [currentLang, setCurrentLang] = useState<string>();
  useEffect(() => {
    setCurrentLang(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return (
    <div className=" md:flex md:justify-center md:mx-[3rem] 2xl:ml-[3.6rem]">
      <li className="">
        <div
          className="relative flex flex-col justify-between bg-[#1d1d1d] border-[3px] border-black rounded-[20px]  min-h-[378px] px-[2.5rem] py-[3rem] 
        md:min-w-[650px] md:pr-[3rem] md:pl-[5.8rem] md:h-[410px]
        2xl:w-[1250px] 2xl:min-h-[660px] 2xl:py-[6rem] en-faq-card"
        >
          <div className="relative faq-img md:flex md:justify-between">
            <p
              className={`text-[1.8rem] font-bold leading-[2.8rem] w-[214px] faq-card-line en-faq-card-title
            md:w-[264px] md:text-[2.3rem] md:leading-[3.68rem]
           2xl:text-[3rem] 2xl:leading-[4.8rem] 2xl:w-[355px] 2xl:break-keep ${
             index === 0 ? "w-[240px] md:w-[307px] 2xl:w-[400px]" : ""
           } ${index === 3 ? "en-faq-title-last" : ""}`}
            >
              {data.quater}
              <br />
              <span
                className="text-[1.8rem] font-bold leading-[2.8rem] w-[214px] faq-card-line en-faq-card-title
            md:w-[264px] md:text-[2.3rem] md:leading-[3.68rem]
           2xl:text-[3rem] 2xl:leading-[4.8rem] 2xl:w-[355px] break-keep "
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
            </p>
            <img
              className={`md:w-[200px] 2xl:w-[400px] first:2xl:w-[300px] 2xl:absolute 2xl:right-0 2xl:-top-[3rem] faq-list ${
                index === 0 ? "md:w-[161px] 2xl:w-[300px]" : ""
              } `}
              src={`${
                index === 0
                  ? `/img/faq/img_faq_q${index + 1}_${currentLang}.png`
                  : `/img/faq/img_faq_q${index + 1}.png`
              } `}
              alt=""
            />
          </div>
          <p
            className="font-medium text-[1.4rem] leading-[2.4rem] break-keep 
          md:text-[1.7rem] md:leading-[3rem] md:w-[471px] 
          2xl:text-[2.4rem] 2xl:leading-[4.32rem] 2xl:w-[741px] absolute  top-[180px] mr-[2.5rem] md:top-[223px] 2xl:top-[325px] en-faq-card-desc"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </div>
      </li>
    </div>
  );
}
