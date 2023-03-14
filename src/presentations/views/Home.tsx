import { useTranslation } from "react-i18next";

export default function Home() {
  const { t }: any = useTranslation();
  return (
    <section id="Home" className="h-full ">
      <div className="w-full overflow-hidden home-background parallax ">
        <div className="relative z-30 flex flex-col items-center justify-center h-screen ">
          <div className="z-30 flex flex-col items-center justify-center main-cont">
            <img
              className="w-[239px] md:w-[362px] xl:w-[568px] xl:mt-[10rem]"
              src="img/home/img_home_logo.svg"
              alt=""
            />
            <p className="text-[1.8rem] font-extrabold mt-[1rem] text-black md:text-[2.4rem] xl:text-[3.2rem]">
              {t(`home.desc`)}
            </p>
            <div className="md:flex md:mt-[4.2rem] xl:mt-[5rem]">
              <a href={`${t(`apple.link`)}`} target="_blank" rel="noreferrer">
                <img
                  className="w-[131px] mt-[3.4rem] md:mt-0 xl:w-[164px]"
                  src="/img/home/img_home_apple_btn.svg"
                  alt=""
                />
              </a>
              <a href={`${t(`google.link`)}`} target="_blank" rel="noreferrer">
                <img
                  className="w-[131px] mt-[1rem] md:mt-0 md:ml-[1rem] xl:w-[164px]"
                  src="/img/home/img_home_google_btn.svg"
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
            className="absolute bottom-0 left-0 w-full bg-arch portrait:hidden"
            src="img/home/img_home_bg_shape_arch_portrait_t.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full landscape:hidden"
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
            className="absolute bottom-0 left-0 w-full portrait:hidden bg-big-thunder"
            src="img/home/img_home_bg_shape_portrait_bottom_t.png"
            alt=""
          />
          <img
            className="absolute bottom-0 left-0 w-full landscape:hidden bg-big-thunder"
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
          className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center snap-item bg-black/90"
        >
          <p className="section-title">{t(`mission.title`)}</p>
          <p className=" font-bold text-[1.8rem] max-w-[240px] mt-[3.4rem] md:max-w-[600px] md:text-[2.6rem] xl:max-w-full xl:text-[3.6rem] xl:leading-[5.4rem] xl:mt-[7.2rem] ">
            <span className="block font-bold text-[1.8rem] md:text-[2.6rem] xl:max-w-full xl:text-[3.6rem] xl:leading-[5.4rem]">
              {t(`mission.desc1`)}
            </span>
            {t(`mission.desc2`)}
          </p>
          <p
            className="font-semibold text-[1.4rem] w-[302px] break-keep mt-[2.4rem] md:w-[567px] xl:w-full xl:text-[2.4rem] xl:leading-[4.32rem] "
            dangerouslySetInnerHTML={{ __html: t(`mission.desc3`) }}
          />
          <p
            className="text-[1.2rem] text-[#808080] mt-[2.4rem] md:text-[1.4rem] xl:text-[1.8rem] 
           en-mission"
          >
            {t(`mission.desc4`)}
          </p>
        </div>
      </div>
    </section>
  );
}
