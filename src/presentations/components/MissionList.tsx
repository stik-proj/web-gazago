import { useState } from "react";
import { InView } from "react-intersection-observer";
export default function MissionList({ data, current, index }: any) {
  const [activeSectionIndex, setActiveSectionIndex] = useState<any>(null);

  return (
    <InView
      as="div"
      key={index}
      onChange={(inView) => {
        if (inView) {
          setActiveSectionIndex(index);
        }
      }}
      threshold={0.6}
    >
      <div className="flex justify-center md:inline-block">
        <li
          className={`w-[259px] h-[259px] bg-[#1d1d1d] px-[1.2rem] py-[4.8rem] 
    flex flex-col items-center 
    border-[3px] border-black rounded-[20px] 
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
    md:w-[312px] md:h-[324px] md:flex md:flex-wrap md:mt-[3.1rem]
    xl:w-[294px] last:py-[3.7rem] mission-card${index} ${
            activeSectionIndex === index && current ? "active" : ""
          }`}
        >
          <img
            className="md:w-[26px]"
            src="img/mission/img_mission_card_shape_m.svg"
            alt=""
          />
          <div className="md:mt-[1rem]">
            <p className="text-[#b8ff70] text-[2.8rem] md:text-[3.2rem] xl:text-[3.6rem]">
              {data.title}
            </p>
            <p className="text-white text-[1.6rem] mt-[2.4rem] md:text-[1.8rem] break-keep md:w-[250px] xl:mt-[3rem] ">
              {data.desc}
            </p>
          </div>
        </li>
      </div>
    </InView>
  );
}
