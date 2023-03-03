import { useEffect, useState } from "react";
import listData from "../../data/roadmapData.json";
import RoadmapListItem from "../components/RoadmapListItem";
export default function Roadmap({ screen }: any) {
  const [roadmapListData, setRoadmapListData] = useState<any>(null);
  const [innerScreen, setInnerScreen] = useState(screen as Number);
  useEffect(() => {
    if (listData.data.length > 0) {
      arrayReDivide(listData.data, 2);
    }
    setInnerScreen(screen);
  }, []);

  const arrayReDivide = (arr: any, n: any) => {
    const oldArr = arr;
    const arrLength = oldArr.length;
    const cnt =
      Math.floor(arrLength / n) + (Math.floor(arrLength % n) > 0 ? 1 : 0);
    const newArr = [];
    for (let i = 0; i < cnt; i++) {
      newArr.push(oldArr.splice(0, n));
    }
    setRoadmapListData(newArr);
  };
  return (
    <section
      id="Roadmap"
      className=" h-full flex flex-col justify-center items-center mx-[2.5rem] my-[20rem]"
    >
      <p className="section-title ">Roadmap</p>
      <div
        className={`${
          screen < 767
            ? "w-[100%] bg-[#1d1d1d] border-[3px] border-black rounded-[20px] pl-[6rem]"
            : "md:w-[650px] md:pl-0 2xl:w-[1250px] 2xl:flex 2xl:bg-[#1d1d1d] 2xl:border-[3px] 2xl:border-black 2xl:rounded-[20px]"
        } mt-[5rem] 2xl:mt[7rem]`}
      >
        {roadmapListData &&
          roadmapListData.map((item: any, idx: number) => (
            <div
              key={idx.toString()}
              className={`${
                screen > 767 && screen < 1536
                  ? "md:flex md:justify-around md:bg-[#1d1d1d] md:border-[3px] md:border-black md:rounded-[20px] md:mt-[3.2rem]"
                  : "2xl:flex 2xl:w-full justify-around"
              }`}
            >
              {item.map((newItem: any, index: any) => (
                <RoadmapListItem
                  key={index.toString()}
                  data={newItem}
                  index={index}
                />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
}
