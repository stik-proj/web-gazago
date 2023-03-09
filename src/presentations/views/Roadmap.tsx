import { useEffect, useState } from "react";
import RoadmapListItem from "../components/RoadmapListItem";
import { useTranslation } from "react-i18next";
export default function Roadmap({ screen }: any) {
  const [roadmapListData, setRoadmapListData] = useState<any>(null);
  const [innerScreen, setInnerScreen] = useState(screen as Number);
  const { t } = useTranslation();
  const listData = [
    {
      quater: t(`roadmap.quater0`),
      list: [
        {
          title: t(`roadmap.title0`),
          desc: [t(`roadmap.1q.title0.desc0`), t(`roadmap.1q.title0.desc1`)],
        },
        {
          title: t(`roadmap.title1`),
          desc: [t(`roadmap.1q.title1.desc0`), t(`roadmap.1q.title1.desc1`)],
        },
        {
          title: t(`roadmap.title2`),
          desc: [t(`roadmap.1q.title2.desc0`), t(`roadmap.1q.title2.desc1`)],
        },
      ],
    },
    {
      quater: t(`roadmap.quater1`),
      list: [
        {
          title: t(`roadmap.title0`),
          desc: [t(`roadmap.2q.title0.desc0`), t(`roadmap.2q.title0.desc1`)],
        },
        {
          title: t(`roadmap.title1`),
          desc: [t(`roadmap.2q.title1.desc0`), t(`roadmap.2q.title1.desc1`)],
        },
        {
          title: t(`roadmap.title2`),
          desc: [t(`roadmap.2q.title2.desc0`), t(`roadmap.2q.title2.desc1`)],
        },
      ],
    },
    {
      quater: t(`roadmap.quater2`),
      list: [
        {
          title: t(`roadmap.title0`),
          desc: [t(`roadmap.3q.title0.desc0`), t(`roadmap.3q.title0.desc1`)],
        },
        {
          title: t(`roadmap.title1`),
          desc: [t(`roadmap.3q.title1.desc0`), t(`roadmap.3q.title1.desc1`)],
        },
        {
          title: t(`roadmap.title2`),
          desc: [t(`roadmap.3q.title2.desc0`), t(`roadmap.3q.title2.desc1`)],
        },
      ],
    },
    {
      quater: t(`roadmap.quater3`),
      list: [
        {
          title: t(`roadmap.title0`),
          desc: [t(`roadmap.4q.title0.desc0`), t(`roadmap.4q.title0.desc1`)],
        },
        {
          title: t(`roadmap.title1`),
          desc: [t(`roadmap.4q.title1.desc0`), t(`roadmap.4q.title1.desc1`)],
        },
        {
          title: t(`roadmap.title2`),
          desc: [t(`roadmap.4q.title2.desc0`), t(`roadmap.4q.title2.desc1`)],
        },
      ],
    },
  ];
  useEffect(() => {
    if (listData) {
      if (listData.length > 0) {
        arrayReDivide(listData, 2);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  useEffect(() => {
    if (screen) {
      setInnerScreen(screen);
    }
  }, [screen]);

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
      className=" h-full flex flex-col justify-center items-center mx-[2.5rem] py-[20rem]"
    >
      <p className="section-title ">{t(`roadmap.title`)}</p>
      <div
        className={
          innerScreen &&
          `${
            innerScreen < 767
              ? "w-[100%] bg-[#1d1d1d] border-[3px] border-black rounded-[20px] pl-[6rem]"
              : "md:w-[650px] md:pl-0 2xl:w-[1250px] 2xl:flex 2xl:bg-[#1d1d1d] 2xl:border-[3px] 2xl:border-black 2xl:rounded-[20px]"
          } mt-[7.4rem] 2xl:mt[7.4rem]`
        }
      >
        {roadmapListData &&
          roadmapListData.map((item: any, idx: number) => (
            <div
              key={idx.toString()}
              className={
                innerScreen &&
                `${
                  innerScreen > 767 && innerScreen < 1536
                    ? "md:flex md:justify-around md:bg-[#1d1d1d] md:border-[3px] md:border-black md:rounded-[20px] md:mt-[3.2rem]"
                    : "2xl:flex 2xl:w-full justify-around"
                }`
              }
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
