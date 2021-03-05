import React from "react";

export default function Input(props) {
  return (
    <>
      <input
        onChange={props.onChange}
        type={props.type}
        placeholder={props.title}
        style={{
          height: "30px",
          width: "300px",
          backgroundColor: "#ededed",
          border: "none",
          borderRadius: "12px",
        }}
      />
    </>
  );
}
