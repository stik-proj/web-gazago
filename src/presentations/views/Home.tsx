import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18next }: any = useTranslation();
  return (
    <section id="Home" className=" h-full ">
      <div className="overflow-hidden home-background parallax w-full ">
        <div className="relative z-30 flex flex-col items-center justify-center h-screen ">
          <div className="z-30 flex flex-col items-center justify-center main-cont">
            <img
              className="w-[239px] md:w-[362px] xl:w-[568px] xl:mt-[10rem]"
              src="img/home/img_home_logo.svg"
              alt=""
            />
            <p className="text-[1.8rem] font-extrabold mt-[1rem] text-black md:text-[2.4rem] xl:text-[3.2rem]">
              돈이 되는 챌린지 시즌 1
            </p>
            <div className="md:flex md:mt-[4.2rem] xl:mt-[5rem]">
              <a
                href="https://gazago.page.link/gazaGO_home"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mt-[3.4rem] md:mt-0 xl:w-[164px]"
                  src="/img/home/img_home_apple_btn_m.svg"
                  alt=""
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=kr.co.eztechfin.gazaGo&hl=ko&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="mt-[1rem] md:mt-0 md:ml-[1rem] xl:w-[164px]"
                  src="/img/home/img_home_google_btn_m.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="absolute pr-[70%] top-[10rem] md:hidden main-left-thunder">
            <img
              className="bounce-thunder-left-m-L"
              src="img/home/img_home_bg_shape_top_left-L_m.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[50%] top-[10rem] md:hidden main-left-thunder-m">
            <img
              className="bounce-thunder-left-m-S"
              src="img/home/img_home_bg_shape_top_left-S_m.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[65%] top-[10rem] md:hidden main-right-thunder">
            <img
              className="bounce-thunder-right-m-L"
              src="img/home/img_home_bg_shape_top_right-L_m.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[50%] top-[10rem] md:hidden main-right-thunder-m">
            <img
              className="bounce-thunder-right-m-S"
              src="img/home/img_home_bg_shape_top_right-S_m.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[60%] pb-[30%] hidden md:block xl:hidden main-left-thunder-m">
            <img
              className="bounce-thunder-left-L"
              src="img/home/img_home_bg_shape_top_left-L_t.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[55%] pb-[40%] hidden md:block xl:hidden main-left-thunder-s">
            <img
              className="bounce-thunder-left-S"
              src="img/home/img_home_bg_shape_top_left-S_t.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[70%] pb-[21%]  hidden md:block xl:hidden main-right-thunder-m">
            <img
              className="bounce-thunder-right-L"
              src="img/home/img_home_bg_shape_top_right-L_t.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[55%] pb-[30%]  hidden md:block xl:hidden main-right-thunder-s">
            <img
              className="bounce-thunder-right-S"
              src="img/home/img_home_bg_shape_top_right-S_t.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[70%] pb-[15%] hidden md:block xl:hidden main-left-thunder">
            <img
              className="bounce-thunder-left-big"
              src="img/home/img_home_bg_shape_left-L_t.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[75%] pb-[20%] hidden md:block xl:hidden main-right-thunder">
            <img
              className="bounce-thunder-right-big"
              src="img/home/img_home_bg_shape_right-L_t.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[45%] pb-[25%] hidden xl:block main-left-thunder-m thunder">
            <img
              className="bounce-thunder-left-L"
              src="img/home/img_home_bg_shape_top_left-L_w.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[36%] pb-[28%] hidden xl:block main-left-thunder-s thunder">
            <img
              className="bounce-thunder-left-S"
              src="img/home/img_home_bg_shape_top_left-S_w.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[60%] pb-[23%] hidden xl:block main-right-thunder-m thunder">
            <img
              className="bounce-thunder-right-L"
              src="img/home/img_home_bg_shape_top_right-L_w.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[40%] pb-[30%] hidden xl:block main-right-thunder-s thunder">
            <img
              className="bounce-thunder-right-S"
              src="img/home/img_home_bg_shape_top_right-S_w.svg"
              alt=""
            />
          </div>
          <div className="absolute pr-[60%] pb-[16%] hidden xl:block main-left-thunder thunder">
            <img
              className="bounce-thunder-left-big"
              src="img/home/img_home_bg_shape_left-L_w.svg"
              alt=""
            />
          </div>
          <div className="absolute pl-[60%] pb-[17%] hidden xl:block main-right-thunder thunder">
            <img
              className="bounce-thunder-right-big"
              src="img/home/img_home_bg_shape_right-L_w.svg"
              alt=""
            />
          </div>
        </div>
        <div className="md:hidden ">
          <img
            className="absolute bottom-0 left-0 z-10 w-full bg-mountain"
            src="img/home/img_home_mountain_L_m.png "
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 z-10 w-full bg-mountain"
            src="img/home/img_home_mountain_S_m.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full bg-big-thunder"
            src="img/home/img_home_bg_shape_bottom_m.png"
            alt=""
          />
          <img
            className="absolute w-full top-[11rem] left-[50%] -translate-x-[50%]"
            src="img/home/img_home_bg_shape_arch_m.png"
            alt=""
          />
        </div>
        <div className="hidden overflow-hidden md:block xl:hidden ">
          <img
            className="absolute bottom-0 left-0 bg-arch w-full portrait:hidden"
            src="img/home/img_home_bg_shape_arch_portrait_t.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0  w-full landscape:hidden"
            src="img/home/img_home_bg_shape_arch_landscape_t.png"
            alt=""
          />
          <img
            className="absolute bottom-[-1px] left-0 w-full z-10 portrait:hidden bg-mountain"
            src="img/home/img_home_bg_mountain_portrait_t.png"
            alt=""
          />
          <img
            className="absolute bottom-[-1px] left-0 w-full z-10 landscape:hidden bg-mountain"
            src="img/home/img_home_bg_mountain_landscape_t.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 portrait:hidden w-full bg-big-thunder"
            src="img/home/img_home_bg_shape_portrait_bottom_t.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 landscape:hidden w-full bg-big-thunder"
            src="img/home/img_home_bg_shape_landscape_bottom_t.png"
            alt=""
          />
        </div>
        <div className="hidden overflow-hidden xl:block">
          <img
            className="absolute bottom-0 left-0 w-full bg-arch"
            src="img/home/img_home_bg_shape_arch_w.png"
            alt=""
          />
          <img
            className="absolute bottom-[-1px] left-0 w-full h-full z-10 bg-mountain"
            src="img/home/img_home_bg_mountain_w.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full h-full bg-big-thunder"
            src="img/home/img_home_bg_shape_bottom_w.png"
            alt=""
          />
        </div>
      </div>
      <div className="h-[200vh] snap-scroll ">
        <div className="h-screen " />
        <div
          id="Mission"
          className="snap-item relative flex flex-col items-center justify-center h-screen overflow-hidden text-center bg-black/90 snap-item"
        >
          <p className="section-title">Mission</p>
          <p className=" font-bold text-[1.8rem] max-w-[240px] mt-[3.4rem] md:max-w-[567px] md:text-[2.6rem] xl:max-w-[751px] xl:text-[3.6rem] xl:leading-[5.4rem] xl:mt-[7.2rem] ">
            <span className="block font-bold text-[1.8rem] md:text-[2.6rem] xl:max-w-[751px] xl:text-[3.6rem] xl:leading-[5.4rem]">
              블록체인 기술로 더 많은 사람들이 새로운 금융 시장과
            </span>
            디지털 피트니스를 누릴 수 있도록
          </p>
          <p className="font-semibold text-[1.4rem] w-[302px] break-keep mt-[2.4rem] md:w-[567px] xl:w-[972px] xl:text-[2.4rem] xl:leading-[4.32rem]">
            대한민국의 국민 중 60.8%는 생활체육에 참여합니다.¹그 중 등산과
            걷기를 하는 54.9%의 국민들에게 디지털 피트니스를 누릴 수 있도록
            아낌없이 지원하겠습니다.
          </p>
          <p className="text-[1.2rem] text-[#808080] mt-[2.4rem] md:text-[1.4rem] xl:text-[1.8rem]">
            1. 문화체육관광부, 국민생활체육조사 2021
          </p>
        </div>
      </div>
    </section>
  );
}
