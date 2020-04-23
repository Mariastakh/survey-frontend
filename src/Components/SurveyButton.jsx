import React from "react";

export default function SurveyButton(props) {
  return (
    <button
      style={{ backgroundColor: props.selected ? "#7FFF00" : "#BDB76B" }}
      onClick={() => props.onClick()}
    >
      {props.topic}
    </button>
  );
}
