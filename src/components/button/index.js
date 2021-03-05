import React from "react";

export default function Button(props) {
  return (
    <>
      <button
        style={{
          backgroundColor: "blue",
          border: "none",
          color: "white",
          borderRadius: "12px",
          height: "30px",
          width: "120px",
        }}
      >
        {props.text}
      </button>
    </>
  );
}
