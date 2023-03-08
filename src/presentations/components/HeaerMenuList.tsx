import { Link } from "react-scroll";

export default function MenuList(props: any) {
  const handleMenuOpen = () => {
    props.menuOpen(false);
  };
  return (
    <li
      className={` overflow-hidden mt-[5rem] xl:mt-0 xl:px-[2rem] xl:py-[0.5rem] xl:bg-[#111111] xl:ml-[1rem] xl:border-[1px] cursor-pointer xl:border-white xl:rounded-[30px] menu ${
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
        <p className="relative inline-block font-[700] text-[2.5rem] text-white xl:text-[1.4rem]">
          {props.data.menu}
        </p>
      </Link>
    </li>
  );
}
