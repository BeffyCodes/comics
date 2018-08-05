// src/components/Hello.tsx

import * as React from "react";
import { HelloProps } from "../interfaces/HelloProps";
import "./Hello.css";

function Hello({
  name,
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}: HelloProps) {
  if (enthusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusastic :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join("!");
}
