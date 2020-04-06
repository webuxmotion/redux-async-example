import React, { useState, useRef } from 'react'
import Chevron from "../../Chevron";
import './Accordion.css';

const animationTime = 300

const Row = ({ header, content }) => {
  const [setActive, setActiveState] = useState(false);
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [timeoutInstance, setTimeoutInstance] = useState(null);

  const contentRef = useRef(null)

  const onToggleHandler = () => {
    setRotateState(
      setActive ? "accordion__icon" : "accordion__icon rotate"
    );
    if (!setActive) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      if (!timeoutInstance) {
        let instance = setTimeout(() => {
          contentRef.current.style.maxHeight = "none";
        }, animationTime);
        setTimeoutInstance(instance);
      }
      setActiveState(true);
    } else {
      clearTimeout(timeoutInstance);
      setTimeoutInstance(null);
      setTimeout(() => {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      }, 10)
      setTimeout(() => {
        contentRef.current.style.maxHeight = `0px`;
      }, 30)
      setActiveState(false);
    }
  }

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={onToggleHandler}>
        <div className="accordion__header-content">
          {header}
        </div>
        <div className="accordion__chevron">
          <Chevron 
            className={`${setRotate}`}
            width={6}
            fill={"#79706b"}
          />
        </div>
      </div>
      <div 
        className="accordion__content"
        style={{ maxHeight: "0px", transition: `max-height ${animationTime}ms ease` }}
        ref={contentRef}
      >
        {content}
      </div>
    </div>
  )
}

export default Row