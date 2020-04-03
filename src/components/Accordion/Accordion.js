import React, { useState, useRef } from "react";
import PropTypes from 'prop-types'
import Chevron from "../Chevron";
import "./accordion.css";

function Accordion({ title, content }) {
  const [setActive, setActiveState] = useState(""); 
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const contentRef = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${contentRef.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

 return (
   <div className="accordion__section">
     <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
       <p className="accordion__title">{title}</p>
       <Chevron 
         className={`${setRotate}`}
         width={10}
         fill={"#777"}
       />
     </button>
     <div 
       ref={contentRef}
       className="accordion__content"
       style={{ maxHeight: `${setHeight}` }}
     >
       <div
         className="accordion__text"
         dangerouslySetInnerHTML={{ __html: content }}
       />
     </div>
   </div>
 );
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
}

Accordion.defaultProps = {
  title: 'default title',
  content: 'default content'
};

export default Accordion;


