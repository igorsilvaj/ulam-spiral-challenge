import React, { useContext, useState } from "react";
import ColorPicker from "./ColorPicker";
import { CanvasContext } from "./Context/CanvasContext";

export default function CanvasControl() {
  const { number, setNumber, border, setBorder } = useContext(CanvasContext);
  const [hidden, setHidden] = useState(true);
  return (
    <form className="control">
      <input
        className="inputNumber"
        type="number"
        placeholder="Type any number to start the spiral"
        min={10}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <label htmlFor="toggleBorder">
        <input
          type="checkbox"
          name="toggleBorder"
          id="toggleBorder"
          onChange={(e) => setBorder(e.target.checked)}
        />
        {border ? "Disable Borders" : "Enable Borders"}
      </label>
      <button
        type="button"
        className="btnChangeColor"
        onClick={() => setHidden(!hidden)}
      >
        Change Color
      </button>
      {!hidden && <ColorPicker />}
    </form>
  );
}
