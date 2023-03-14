import { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

export default function ExperienceList({ data, index, current }: any) {
  const [activeSectionIndex, setActiveSectionIndex] = useState<any>(null);
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string>();
  useEffect(() => {
    if (!current) {
      setActiveSectionIndex(9999);
    }
  }, [current]);
  useEffect(() => {
    setCurrentLang(i18n.language);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);
  return (
    <InView
      as="div"
      key={index.toString()}
      onChange={(inView) => {
        if (inView) {
          setActiveSectionIndex(index);
        }
      }}
      threshold={0.6}
    >
      <li
        className={`mt-[9rem] flex flex-col items-center md:mx-[auto] md:justify-around md:max-w-[700px]
      xl:max-w-[1424px] first:xl:mt-[12rem] xl:mt-[26rem] experience-card
      ${index % 2 ? "experience-order-reverse" : "experience-order"} ${
          activeSectionIndex === index && current ? "active" : ""
        }`}
      >
        <img
          className={`w-[285px] md:w-[300px] xl:w-[622px]`}
          src={`${
            currentLang
              ? `img/experience/img_experience_list${index +
                  1}_${currentLang}.png`
              : `img/experience/img_experience_list${index + 1}_ko.png`
          }`}
          alt=""
        />
        <div>
          <p className=" text-[1.6rem] font-bold text-[#1CE2D9] mt-[3.2rem] xl:text-[2.6rem] ">
            {data.part}
          </p>
          <p className="leading-[3.6rem] font-bold text-[3.6rem] text-[#b8ff70] mt-[1.8rem] xl:text-[6rem] xl:mt-[4rem] ">
            {data.title}
          </p>
          <p
            className="text-[1.4rem] leading-[2.4rem] mt-[3.2rem] w-[248px] md:w-[283px] break-keep md:text-[1.6rem] md:leading-[2.88rem] xl:text-[2.4rem] xl:leading-[5rem] xl:w-[435px] xl:mt-[4rem] en-experience-list-desc"
            dangerouslySetInnerHTML={{ __html: data.desc }}
          />
        </div>
      </li>
    </InView>
  );
}
