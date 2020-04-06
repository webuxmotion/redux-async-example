import React, { useState } from 'react'
import Chevron from "../../Chevron";
import './Row.css';

const Row = ({ columns = [], collapse }) => {
  const [setActive, setActiveState] = useState(false);
  const [setRotate, setRotateState] = useState("accordion__icon");

  const entireRowToggle = collapse && !collapse.icon && (!collapse.triggerId && collapse.triggerId !== 0)

  const onToggleHandler = () => {
    setActiveState(!setActive);
    setRotateState(
      setActive ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <>
      {columns && (
        <tr
          className={entireRowToggle ? 'entire-mode' : null}
          onClick={entireRowToggle ? onToggleHandler : null}
        >
          {collapse?.icon && (
            <td>
              <Chevron
                onClick={onToggleHandler}
                className={`${setRotate}`}
                width={10}
                fill={"#777"}
                icon={collapse.icon}
              />
            </td>
          )}
          {columns.map((el, i) => {
            
            return (
              <td
                colSpan={collapse.icon ? null : 2}
                key={i}
              >
                {typeof el != 'string'
                  ? el({onCollapseHandler: collapse?.triggerId === i ? onToggleHandler : null})
                  : el
                }
              </td>
            )
          })}
        </tr>
      )}
      {collapse?.component && setActive && (
        <tr>
          <td colSpan="9999">{collapse.component}</td>
        </tr>
      )}
    </>
  )
}

export default Row