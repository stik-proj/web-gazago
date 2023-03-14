import { useTranslation } from "react-i18next";

export default function Launcher() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen launcher-bg ">
      <div className=" w-[80px] launcher-logo lg:w-[101px] launcher-bounce">
        <img src="img/launcher/img_launcher_logo.svg" alt="" />
      </div>
      <p className="font-[800] text-[2.5rem] leading-[3.5rem] text-center mt-[4rem] lg:text-[5rem] lg:leading-[7rem]">
        <span className="font-[800] text-[2.5rem] leading-[3.5rem]  block md:inline-block lg:text-[5rem] lg:leading-[7rem]">
          {t(`launcher.title0`)}
        </span>
        {` ${t(`launcher.title1`)}`}
      </p>
      <p className="font-[800] text-[1.7rem] leading-[2.5rem] mt-[1.4rem] lg:mt-[3.3rem] lg:text-[3.2rem]">
        {t(`launcher.desc`)}
      </p>
      <div className="flex flex-col  mt-[4rem] justify-between md:flex-row md:w-[272px] lg:w-[362px] lg:mt-[6rem]">
        <a
          href={`${t(`apple.link`)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="w-[132px] lg:w-[173px]"
            src="img/launcher/img_launcher_apple_btn.svg"
            alt=""
          />
        </a>
        <a
          className="mt-[1rem] md:mt-0"
          href={`${t(`google.link`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-[132px] lg:w-[173px]"
            src="img/launcher/img_launcher_google_btn.svg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
