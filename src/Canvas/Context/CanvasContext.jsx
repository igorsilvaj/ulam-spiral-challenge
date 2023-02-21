import { createContext, useEffect, useMemo, useState } from "react";
import buildPattern from "../buildPattern";

export const CanvasContext = createContext();

export default function CanvasContextProvider({ children }) {
  const [number, setNumber] = useState("");
  const [cellValue, setCellValue] = useState({});
  const [border, setBorder] = useState(false);
  const [color, setColor] = useState("red");

  useEffect(() => {
    buildPattern(number, setCellValue);
  }, [number]);

  const contextValue = useMemo(
    () => ({
      number,
      setNumber,
      cellValue,
      setCellValue,
      border,
      setBorder,
      color,
      setColor,
    }),
    [
      number,
      setNumber,
      cellValue,
      setCellValue,
      border,
      setBorder,
      color,
      setColor,
    ]
  );

  return (
    <CanvasContext.Provider value={contextValue}>
      {children}
    </CanvasContext.Provider>
  );
}
