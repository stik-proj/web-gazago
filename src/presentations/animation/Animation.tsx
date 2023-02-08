import Lottie from "lottie-web";
import React, { Fragment, useEffect, useRef } from "react";
import popupAnimation from "./popup.json";

const Animation = () => {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (element.current) {
      Lottie.loadAnimation({
        container: element.current,
        autoplay: true,
        loop: true,
        animationData: popupAnimation,
      });
    }
  }, [element]);
  return (
    <>
      <div ref={element} style={{ width: "100%", height: "150px" }} />
    </>
  );
};

export default Animation;
