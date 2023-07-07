import "./App.css";

import React from "react";
import boxes from "./Boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = React.useState(boxes);
  const squareElements = boxes.map((box) => <Box key={box.id} on={box.on} />);

  // const squareElements = boxes.map(function (box) {
  //   return <Box key={box.id} on={box.on} />;
  // });
  return <main>{squareElements}</main>;
}
