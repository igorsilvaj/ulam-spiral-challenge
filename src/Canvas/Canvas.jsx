import React, { useContext } from "react";
import Cell from "./Cell";
import { CanvasContext } from "./Context/CanvasContext";

export default function Canvas() {
  const { number } = useContext(CanvasContext);
  const max = Math.ceil(Math.sqrt(number));
  const odd = max % 2 === 0 ? max + 1 : max;
  return (
    <div className="canvas">
      {number &&
        [...Array(odd)].map((rEl, rIndex) => (
          <div className="canvasRow" key={`key-${rIndex}`} element={rEl}>
            {[...Array(odd)].map((cEl, cIndex) => (
              <Cell
                key={`roll-${rIndex} cell-${cIndex}`}
                number={[rIndex, cIndex]}
                element={cEl}
              />
            ))}
          </div>
        ))}
    </div>
  );
}
