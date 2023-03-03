import { useEffect, useState } from "react";

export default function ExperienceList({ data, index }: any) {
  const [list, setList] = useState(null);
  useEffect(() => {
    const newLine = data.desc.replace(/(?:\r\n|\r|\n)/g, "<br>");
    setList(newLine);
  }, []);
  return (
    <li
      className={`mt-[9rem] flex flex-col items-center md:mx-[auto] md:justify-around md:max-w-[700px]
      xl:max-w-[1424px] first:xl:mt-[12rem] xl:mt-[26rem]
      ${index % 2 ? "experience-order-reverse" : "experience-order"}`}
    >
      <img
        className={` w-[285px] md:w-[300px] xl:w-[622px]`}
        src={data.image}
        alt=""
      />
      <div className={``}>
        <p className="text-[1.6rem] font-bold text-[#1CE2D9] mt-[3.2rem] xl:text-[2.6rem] ">
          Experience {index + 1}
        </p>
        <p className="leading-[3.6rem] font-bold text-[3.6rem] text-[#b8ff70] mt-[1.8rem] xl:text-[6rem] xl:mt-[4rem] ">
          {data.title}
        </p>
        <p
          className="text-[1.4rem] leading-[2.4rem] mt-[3.2rem] w-[297px] break-keep md:text-[1.6rem] xl:text-[2.4rem] xl:leading-[5rem] xl:w-[418px] xl:mt-[4rem]"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
      </div>
    </li>
  );
}
