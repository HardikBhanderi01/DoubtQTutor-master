import React from "react";
import BackToUp from "@uiw/react-back-to-top";
import { AiOutlineArrowUp } from "react-icons/ai";

const Backtotop = () => {
  return (
    <>
      <div className='backtotop'>
        <BackToUp className='BackToUp' top={100}>
          <i className='top-icon'>
            <AiOutlineArrowUp />
          </i>
        </BackToUp>
      </div>
    </>
  );
};

export default Backtotop;
