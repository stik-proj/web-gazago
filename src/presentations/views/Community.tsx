import { useEffect, useState } from "react";
import listData from "../../data/communityListData.json";
import CommunityList from "../components/CommunityList";
import { useTranslation } from "react-i18next";
export default function Community({ current }: any) {
  const [communityListData, setCommunityListData] = useState<any>();
  const { t } = useTranslation();
  const listData = [
    {
      title: t(`community.list.title0`),
      desc: t(`community.list.desc0`),
      link: t(`community.list.link0`),
    },
    {
      title: t(`community.list.title1`),
      desc: t(`community.list.desc1`),
      link: t(`community.list.link1`),
    },
    {
      title: t(`community.list.title2`),
      desc: t(`community.list.desc2`),
      link: t(`community.list.link2`),
    },
    {
      title: t(`community.list.title3`),
      desc: t(`community.list.desc3`),
      link: t(`community.list.link3`),
    },
  ];
  useEffect(() => {
    if (listData) {
      setCommunityListData(listData);
    }
  }, [t]);
  return (
    <section
      id="Community"
      className="relative h-full flex flex-col md:justify-center items-center py-[10rem]"
    >
      <div className="px-[2.5rem] relative 2xl:w-[1250px] 2xl:mx-auto z-10 ">
        <p className=" section-title !text-start md:!text-center 2xl:!text-start md:pt-[10rem]">
          {t(`community.title`)}
        </p>
        <div className="flex flex-col items-start  md:justify-center md:items-start md:flex-row md:mt-[4rem] 2xl:justify-between 2xl:items-start">
          <div>
            <p className="font-bold text-[3.2rem] leading-[5rem] mt-[3rem] md:text-[4.0rem] md:leading-[5.8rem] 2xl:text-[5rem] 2xl:leading-[6.5rem]">
              {t(`community.subTitle1`)}
              <br />
              {t(`community.subTitle2`)}
            </p>
            <p className="text-[1.4rem] font-medium text-[#c6c6c6] mt-[1rem] md:text-[1.6rem] 2xl:text-[2.4rem] 2xl:leading-[3.2rem] 2xl:mt-[3rem]">
              {t(`community.desc`)}
            </p>
          </div>
          <div className="md:ml-[5rem]">
            <ul className={`community-list ${current ? "active" : ""}`}>
              {communityListData
                ? communityListData.map((item: any, index: any) => (
                    <CommunityList
                      key={index.toString()}
                      data={item}
                      index={index}
                    />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
      <img
        className="hidden  w-full left-0 bottom-0 md:block md:mt-[7rem] 2xl:mt-[22rem]"
        src="img/community/img_community_bg.png"
        alt=""
      />
    </section>
  );
}
