import { useState } from "react";
import arrowdown from "./assets/icon-arrow-down.svg";
export default function Accordion(props) {
  const [show, setShow] = useState(false);
  const Show = () => {
    setShow(!show);
  };
 
  return (
    <>
      <div className="accordion">
        <div onClick={Show} className="top">
          <p 
            style={

              show
                ? { fontWeight: "700", color: "black", }
                : { fontWeight: "normal", color: "hsl(237, 12%, 33%)" }
            }
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
