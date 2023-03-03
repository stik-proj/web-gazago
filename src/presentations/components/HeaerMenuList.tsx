import { useEffect } from "react";
import { Link } from "react-scroll";

export default function MenuList(props: any) {
  useEffect(() => {
    console.log(props);
  }, [props]);
  const handleMenuOpen = () => {
    props.menuOpen(false);
  };
  return (
    <li
      className={`relative overflow-hidden mt-[5rem] xl:mt-0 xl:px-[2rem] xl:py-[0.5rem] xl:bg-[#111111] xl:ml-[1rem] xl:border-[1px] xl:border-white xl:rounded-[30px] ${
        props.activeIndex === props.index ? "active" : ""
      }`}
    >
      <Link
        onClick={handleMenuOpen}
        activeClass="active"
        smooth
        spy
        to={props.data.menu}
      >
        <p className="font-[700] text-[2.5rem] text-white xl:text-[1.4rem]">
          {props.data.menu}
        </p>
      </Link>
      <div className="guage w-0 h-full absolute left-0 top-0 bottom-0 mix-blend-difference bg-[#ddd]" />
    </li>
  );
}
