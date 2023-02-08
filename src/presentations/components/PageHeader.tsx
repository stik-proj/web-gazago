import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "src/presentations/styles/Header.scoped.scss";

export default function PageHeader(props: { title: string }) {
  const [isPathComplete, setIsPathComplete] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    // window.history.back();
    navigate(-1);
  };

  const goHome = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    setIsPathComplete(location.pathname.includes("complete"));
  }, [location.pathname]);

  return (
    <div className="border-b-[1px] border-[#F0F0F0] p-2.5">
      <div className="relative flex flex-row justify-center">
        {isPathComplete ? (
          <button className="absolute left-4 top-6" onClick={goHome}>
            <img className="w-[20px] h-[20px]" src="/img/ico_home.png" alt="" />
          </button>
        ) : (
          <button className="absolute left-4 top-6" onClick={goBack}>
            <FontAwesomeIcon icon={solid("chevron-left")} size="2x" />
          </button>
        )}

        <img className="py-6" src="/img/logo.svg" alt="" />
      </div>
    </div>
  );
}
