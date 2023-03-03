import { useEffect } from "react";

export default function Home() {
  useEffect(() => {}, []);
  return (
    <section id="Home" className="z-20 overflow-hidden home-background">
      <div className="relative z-30 flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center main-cont">
          <img
            className="w-[239px] md:w-[362px] xl:w-[568px] xl:mt-[10rem]"
            src="img/home/img_home_logo.svg"
            alt=""
          />
          <p className="text-[1.8rem] font-extrabold mt-[1rem] text-black md:text-[2.4rem] xl:text-[3.2rem]">
            돈이 되는 챌린지 시즌1
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
        <img
          className="absolute pr-[70%] top-[10rem] mobile md:hidden"
          src="img/home/img_home_bg_shape_top_left-L_m.svg"
          alt=""
        />
        <img
          className="absolute pr-[50%] top-[10rem] md:hidden"
          src="img/home/img_home_bg_shape_top_left-S_m.svg"
          alt=""
        />
        <img
          className="absolute pl-[65%] top-[10rem] md:hidden"
          src="img/home/img_home_bg_shape_top_right-L_m.svg"
          alt=""
        />
        <img
          className="absolute pl-[50%] top-[10rem] md:hidden"
          src="img/home/img_home_bg_shape_top_right-S_m.svg"
          alt=""
        />
        <img
          className="absolute pr-[60%] top-[14rem] hidden md:block xl:hidden"
          src="img/home/img_home_bg_shape_top_left-L_t.svg"
          alt=""
        />
        <img
          className="absolute pr-[55%] top-[12rem] hidden md:block xl:hidden"
          src="img/home/img_home_bg_shape_top_left-S_t.svg"
          alt=""
        />
        <img
          className="absolute pl-[70%] top-[20rem] hidden md:block xl:hidden"
          src="img/home/img_home_bg_shape_top_right-L_t.svg"
          alt=""
        />
        <img
          className="absolute pl-[55%] top-[13rem] hidden md:block xl:hidden"
          src="img/home/img_home_bg_shape_top_right-S_t.svg"
          alt=""
        />
        <img
          className="absolute pr-[70%] top-[30%] hidden md:block xl:hidden"
          src="img/home/img_home_bg_shape_left-L_t.svg"
          alt=""
        />
        <img
          className="absolute pl-[75%] top-[18rem] hidden md:block xl:hidden"
          src="img/home/img_home_bg_shape_right-L_t.svg"
          alt=""
        />
        <img
          className="absolute pr-[45%] top-[15%] hidden xl:block main-left-thunder thunder"
          src="img/home/img_home_bg_shape_top_left-L_w.svg"
          alt=""
        />
        <img
          className="absolute pr-[36%] top-[15%] hidden xl:block main-left-thunder thunder "
          src="img/home/img_home_bg_shape_top_left-S_w.svg"
          alt=""
        />
        <img
          className="absolute pl-[60%] top-[17%] hidden xl:block main-right-thunder thunder"
          src="img/home/img_home_bg_shape_top_right-L_w.svg"
          alt=""
        />
        <img
          className="absolute pl-[40%] top-[15%] hidden xl:block main-right-thunder thunder"
          src="img/home/img_home_bg_shape_top_right-S_w.svg"
          alt=""
        />
        <img
          className="absolute pr-[60%] top-[25%] hidden xl:block main-left-thunder thunder "
          src="img/home/img_home_bg_shape_left-L_w.svg"
          alt=""
        />
        <img
          className="absolute pl-[60%] top-[18rem] hidden xl:block main-right-thunder thunder"
          src="img/home/img_home_bg_shape_right-L_w.svg"
          alt=""
        />
      </div>
      <div className="md:hidden">
        <img
          className="absolute bottom-0 left-0 z-10 w-full "
          src="img/home/img_home_mountain_L_m.png "
          alt=""
        />
        <img
          className="absolute bottom-0 left-0 z-10 w-full"
          src="img/home/img_home_mountain_S_m.png"
          alt=""
        />
        <img
          className="absolute bottom-0 left-0 w-full"
          src="img/home/img_home_bg_shape_bottom_m.png"
          alt=""
        />
        <img
          className="absolute w-full top-[11rem] left-[50%] -translate-x-[50%]"
          src="img/home/img_home_bg_shape_arch_m.png"
          alt=""
        />
      </div>
      <div className="hidden overflow-hidden md:block xl:hidden">
        <img
          className="absolute bottom-0 left-0 w-full bg-arch"
          src="img/home/img_home_bg_shape_arch_t.png"
          alt=""
        />
        <img
          className="absolute bottom-[-1px] left-0 w-full z-10 bg-mountain"
          src="img/home/img_home_bg_mountain_t.png"
          alt=""
        />
        <img
          className="absolute bottom-0 left-0 w-full bg-big-thunder"
          src="img/home/img_home_bg_shape_bottom_t.png"
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
    </section>
  );
}
