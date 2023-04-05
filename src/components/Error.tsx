import React from "react";

interface IProps {
  onClose: () => void;
}

const RemovePTag = ({ onClose }: IProps) => {
  const handleClick = () => {
    const pTag = document.querySelector("div > p");
    if (pTag) {
      pTag.remove();
    }
    onClose();
  };

  return (
    <div>
    <button onClick={handleClick}>OK</button>
    <p style={{ color: "red", fontSize: "1.2em" }}>Existerar redan || Fel Info</p>
    </div>
  )
  };

  

export default RemovePTag;

  