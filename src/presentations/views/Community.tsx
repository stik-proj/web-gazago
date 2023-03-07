import { useEffect, useState } from "react";
import listData from "../../data/communityListData.json";
import CommunityList from "../components/CommunityList";

export default function Community({ current }: any) {
  const [communityListData, setCommunityListData] = useState<any>();

  useEffect(() => {
    if (listData) {
      setCommunityListData(listData.data);
    }
  }, []);
  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <section
      id="Community"
      className="relative h-full flex flex-col md:justify-center items-center py-[10rem]"
    >
      <div className="px-[2.5rem] relative 2xl:w-[1250px] 2xl:mx-auto z-10 ">
        <p className=" section-title !text-start md:!text-center 2xl:!text-start md:pt-[10rem]">
          Community
        </p>
        <div className="flex flex-col items-start  md:justify-center md:items-start md:flex-row md:mt-[4rem] 2xl:justify-between 2xl:items-start">
          <div>
            <p className="font-bold text-[3.2rem] leading-[5rem] mt-[3rem] md:text-[4.0rem] md:leading-[5.8rem] 2xl:text-[5rem] 2xl:leading-[6.5rem]">
              가자고의
              <br />
              새로운 소식
            </p>
            <p className="text-[1.4rem] font-medium text-[#c6c6c6] mt-[1rem] md:text-[1.6rem] 2xl:text-[2.4rem] 2xl:leading-[3.2rem] 2xl:mt-[3rem]">
              가자고와 함께 커뮤니티를 경험해보세요.
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
