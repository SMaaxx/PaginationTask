import React from "react";

interface Props {
  direction: string;
}

const DoubleArrowIcon: React.FC<Props> = ({direction}) => {
  return(
    <svg width="24px" height="24px" viewBox="0 0 24 24"
         style={{transform: `${direction == 'left' ? 'rotate(180deg)' : 'none'}`}} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
      <g id="SVGRepo_iconCarrier">
        <path d="m13 16 4-4-4-4M7 16l4-4-4-4" stroke="#0071F6" strokeWidth="1.5" strokeLinecap="round"
              strokeLinejoin="round"/>
      </g>
    </svg>
  );
}

export default DoubleArrowIcon;
