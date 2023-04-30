import { useState } from "react";
import arrowdown from "./assets/icon-arrow-down.svg";
export default function Accordion(props) {
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow(!show);
  };
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };
  const handleMouseLeave = () => {
     setIsHover(false);
  };
  const boxStyle = {
    //...
    color: isHover ? "hsl(14, 88%, 65%)" : "black",
    fontWeight: show? "700" :  "normal",
    // color : show?  : 
 };
  return (
    <>
      <div className="accordion">
        <div onClick={Show} className="top">
          <p 
            style={boxStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {props.question}
          </p>
          <img className={show ? "flip" : "!flip"} src={arrowdown} alt="" />
        </div>
        <p className="answer">{show && props.answer}</p>
      </div>
    </>
  );
}
