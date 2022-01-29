import React, { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Button } from "./ScrollButtonStyles";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <Button
        onMouseEnter={() => setIsClicked(true)}
        onMouseLeave={() => setIsClicked(false)}
      >
        {isClicked ? (
          <BsFillArrowUpCircleFill
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
        ) : (
          <BsArrowUpCircle style={{ display: visible ? "inline" : "none" }} />
        )}
      </Button>
    </>
  );
};

export default ScrollButton;
