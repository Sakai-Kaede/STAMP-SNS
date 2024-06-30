import React from "react";

export default function Stamp() {
  const stampStyle = {
    position: "absolute",
    left: `${300}px`,  // x座標をpxで指定
    top: `${600}px`,   // y座標をpxで指定
    border: "1px solid black",
    padding: "10px",
    backgroundColor: "lightblue",
  };

  return <div style={stampStyle}>Stamp</div>
}