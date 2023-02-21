import React, { useContext } from "react";
import { CanvasContext } from "./Context/CanvasContext";
import isPrime from "./isPrime";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

export default function Cell({ number }) {
  const { cellValue, border, color } = useContext(CanvasContext);
  const cellNumber = cellValue[`${number[0]}-${number[1]}`];
  const prime = {
    backgroundColor: color,
  };

  const notPrime = {
    backgroundColor: "transparent",
  };
  return (
    <>
      {cellValue ? (
        <Tippy content={cellNumber}>
          <div
            className={`cell${isPrime(cellNumber) ? " prime" : ""}${
              border ? " border" : ""
            }`}
            id={`${number[0]}-${number[1]}`}
            style={isPrime(cellNumber) ? prime : notPrime}
          />
        </Tippy>
      ) : (
        <div />
      )}
    </>
  );
}
