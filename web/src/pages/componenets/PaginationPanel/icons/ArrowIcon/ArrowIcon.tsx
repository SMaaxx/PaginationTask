import React from "react";

interface Props {
  direction: string;
}

const LeftIcon: React.FC<Props> = ({ direction }) => {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38"
         style={{transform: `${direction == 'right' ? 'rotate(180deg)' : 'none'}`}} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.9844 13.9877L14.9844 18.9877L20.9844 23.9877" stroke="#0071F6" strokeWidth="1.25"
            strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default LeftIcon;
