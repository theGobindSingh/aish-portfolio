import React from "react";

interface EggTextProps {
  text: string;
  rotationAlpha?: number;
}

export default function EggText(props: EggTextProps) {
  const { text, rotationAlpha = 6.2 } = props;

  const textArr = text.split("");

  const mapper = (char: string, index: number) => {
    return (
      <div
        className="span-container"
        key={index}
        style={{ transform: `rotate(${index * rotationAlpha * -1}deg)` }}
      >
        <span>{char}</span>
      </div>
    );
  };

  return (
    <div className="egg-wrapper">
      <div className="egg-container"></div>
      <div className="text">{textArr.map(mapper)}</div>
    </div>
  );
}
