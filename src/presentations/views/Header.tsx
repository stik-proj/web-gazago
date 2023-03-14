/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import HeaderMenuList from "../components/HeaerMenuList";
import { useTranslation } from "react-i18next";

export default function Header({ activeIndex }: any) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const language = ["Korean", "English"];
  const [headerMenuListData, setHeaderMenuListData] = useState<any>(null);
  const { t, i18n } = useTranslation();

  const menu = [t(`menu0`), t(`menu1`), t(`menu2`), t(`menu3`), t(`menu4`)];
  useEffect(() => {
    if (menu) {
      setHeaderMenuListData(menu);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t]);

  const handleLangClick = (event: any, index: number, item: string) => {
    event.preventDefault();
    setLangOpen(false);
    setCurrentIdx(index);

    if (item === "Korean") {
      i18n.changeLanguage("ko");
    } else if (item === "English") {
      i18n.changeLanguage("en");
    }
  };
  const handleMenuOpen = (value: any) => {
    setMenuOpen(value);
  };
  const handleOpenLangMenu = () => {
    setLangOpen(!langOpen);
  };
  return (
    <header className="fixed top-0 left-0 z-50 w-full xl:mx-auto xl:flex xl:justify-center">
      <div className="flex items-center justify-between px-[2.5rem] my-[2rem] lg:w-[850px] lg:mx-auto xl:w-[1250px]">
        <h1>
          <a href="/">
            <img
              className="w-[113.5px] xl:w-[149px]"
              src="/img/header/img_header_logo_m.png"
              alt="logo"
            />
          </a>
        </h1>
        <nav
          className={`z-[9000] flex justify-center items-center bg-[#111111] fixed left-0 top-0 w-[100%] h-[100%] translate-x-[100%] trasition-all duration-[0.5s] ${
            menuOpen ? "translate-x-0" : ""
          } xl:translate-x-0 xl:h-auto xl:bg-transparent xl:items-center xl:block xl:relative`}
        >
          <ul className="flex flex-col text-center xl:flex-row xl:justify-end ">
            {headerMenuListData
              ? headerMenuListData.map((item: any, index: any) => (
                  <HeaderMenuList
                    data={item}
                    key={index.toString()}
                    index={index}
                    activeIndex={activeIndex}
                    menuOpen={handleMenuOpen}
                  />
                ))
              : null}
          </ul>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-[5rem] right-[2.4rem] xl:hidden"
          >
            <img src="img/header/img_header_close_btn.svg" alt="" />
          </button>
        </nav>
        <div className="flex items-center relative xl:ml-[4rem]">
          <button
            onClick={handleOpenLangMenu}
            className="relative flex w-[6rem] h-[3rem] justify-center items-center border-[1px] border-[#eeeeee] bg-white rounded-[30px] xl:w-[6.8rem] xl:h-[3.4rem]"
          >
            <img
              className="xl:w-[24px]"
              src="/img/header/img_header_lang_m.svg"
              alt=""
            />
            <img
              className={` transition-all duration-[0.5s] ${
                langOpen ? "rotate-180" : ""
              }`}
              src="/img/header/img_header_arrow_m.svg"
              alt=""
            />
          </button>
          <div
            className={`opacity-0 absolute top-[3.5rem] left-[-4rem] w-[9.6rem] bg-white border-[1px] border-[#eeeeee] rounded-[8px]  px-[1.4rem] py-[1.2rem] transition-all duration-[0.5s] xl:top-[4rem] xl:w-[11.4rem] xl:left-[-5rem] ${
              langOpen ? "visible opacity-100" : ""
            }`}
          >
            <ul className="">
              {language.map((item, index) => (
                <li className="" key={index.toString()}>
                  <a
                    href="#"
                    onClick={(e) => handleLangClick(e, index, item)}
                    className={`text-[1.3rem] font-[500] text-[#999999] xl:text-[1.4rem] ${
                      currentIdx === index
                        ? "font-bold underline text-black"
                        : ""
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pl-[0.8rem]">
            <button
              onClick={() => setMenuOpen(true)}
              className=" w-[7rem] h-[3rem] text-center bg-black rounded-[30px] border-[1px] border-[#fffff] xl:hidden"
            >
              <p className="font-bold text-[1.4rem] text-white">Menu</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
