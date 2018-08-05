// src/components/StatefulHello.tsx

import * as React from "react";
import { HelloProps } from "../interfaces/HelloProps";

interface State {
  currentEnthusiasm: number;
}

class StatefulHello extends React.Component<HelloProps, State> {
  constructor(props: HelloProps) {
    super(props);

    this.state = {
      currentEnthusiasm: props.enthusiasmLevel || 1
    };
  }

  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusastic :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  updateEnthusiasm(currentEnthusiasm: number): void {
    this.setState({ currentEnthusiasm });
  }
}

export default StatefulHello;

function getExclamationMarks(numChars: number): string {
  return Array(numChars + 1).join("!");
}
