import "src/presentations/styles/Header.scoped.scss";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const closePage = () => {
  // window.history.back();
  navigate(-1);
};

export default function MainHeader() {
  return (
    <div className="border-b-[1px] border-[#F0F0F0] p-2.5">
      <div className="relative flex flex-row justify-center">
        <img className="py-6" src="./img/logo.svg" alt="" />
        <button className="absolute right-4 top-4" onClick={closePage}>
          <img src="./img/ico_close.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
