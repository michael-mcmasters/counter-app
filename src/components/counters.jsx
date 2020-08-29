import React, { Component } from "react";
import Counter from "./counter";

// Object Destructuring:
// This Line: const { onReset, counters, onDelete, onIncrement } = this.props;
// With that line, we can use {onDelete} instead of {this.props.onDelete}.
// It basically takes the properties out of an object, so that we don't have to say this.object over and over again (where in this case, props is the object).

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
