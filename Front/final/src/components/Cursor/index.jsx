import React, { useEffect, useState } from "react";
import "./style.scss";

function Cursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const [isClicking, setIsClicking] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const move = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    setCursorX(x);
    setCursorY(y);

    const cursorBorder = document.getElementById("cursor-border");
    if (cursorBorder) {
      cursorBorder.style.left = `${x}px`;
      cursorBorder.style.top = `${y}px`;
    }
  };

  const handleMouseDown = () => {
    setIsClicking(true);
  };

  const handleMouseUp = () => {
    setIsClicking(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div>
      <style>
      
        {`
                #cursor {
                    background-color: ${isClicking ? "#f1b84b" : "#f1b84b"};
                }
                #cursor-border {
                    width: ${isClicking ? "55px" : "45px"};
                    height: ${isClicking ? "55px" : "45px"};
                    border: 2px solid ${buttonHovered ? "black" : "black"};

                }
                `}
      </style>
      <div
        id="cursor"
        style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
      ></div>
      <div id="cursor-border"></div>
    </div>
  );
}

export default Cursor;