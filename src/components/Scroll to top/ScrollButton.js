import React, { useState, useEffect } from "react";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Button } from "./ScrollButtonStyles";

const ScrollButton = () => {
  const [isTouch, setIsTouch] = useState(false);
  // since small screen is generally for touch-screen devices
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
   ( window.innerWidth < 1100)||(document.documentElement.clientWidth<1100)||(document.body.clientWidth<1100) ? setIsTouch(true) : setIsTouch(false);
  });

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
      {isTouch ? (
        <Button>
          <BsFillArrowUpCircleFill
            onClick={scrollToTop}
            style={{ display: visible ? "inline" : "none" }}
          />
        </Button>
      ) : (
        <Button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <BsFillArrowUpCircleFill
              onClick={scrollToTop}
              style={{ display: visible ? "inline" : "none" }}
            />
          ) : (
            <BsArrowUpCircle style={{ display: visible ? "inline" : "none" }} />
          )}
        </Button>
      )}
    </>
  );
};

export default ScrollButton;
