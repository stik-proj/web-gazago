export default function Launcher() {
  return (
    <div className="launcher-bg h-screen flex flex-col justify-center items-center ">
      <div className=" w-[80px] launcher-logo lg:w-[101px]">
        <img src="img/launcher/img_launcher_logo.svg" alt="" />
      </div>
      <p className="font-[900] text-[2.5rem] leading-[3.5rem] text-center mt-[4rem] lg:text-[5rem] lg:leading-[7rem]">
        <span className="font-[900] text-[2.5rem] leading-[3.5rem]  block md:inline-block lg:text-[5rem] lg:leading-[7rem]">
          당신의 모든 움직임은
        </span>
        {` 빛나니까`}
      </p>
      <p className="font-[800] text-[1.7rem] leading-[2.5rem] mt-[1.4rem] lg:mt-[3.3rem] lg:text-[3.2rem]">
        가자고 - 돈이 되는 챌린지 시즌 1
      </p>
      <div className="flex flex-col  mt-[4rem] justify-between md:flex-row md:w-[272px] lg:w-[362px] lg:mt-[6rem]">
        <a href="https://gazago.page.link/gazaGO_home">
          <img
            className="w-[132px] lg:w-[173px]"
            src="img/launcher/img_launcher_apple_btn.png"
            alt=""
          />
        </a>
        <a
          className="mt-[1rem] md:mt-0"
          href="https://play.google.com/store/apps/details?id=kr.co.eztechfin.gazaGo&hl=ko&gl=US"
          target="_blank"
        >
          <img
            className="w-[132px] lg:w-[173px]"
            src="img/launcher/img_launcher_google_btn.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}
