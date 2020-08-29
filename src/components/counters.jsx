import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  // Copy counters array into a new array.
  // use filter() to return an array with all of its values except the one passed as an argument.
  handleDelete = (counterId) => {
    const indexToRemove = (c) => c.id !== counterId;
    const counters = this.state.counters.filter(indexToRemove);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((arrayIndex) => {
      arrayIndex.value = 0;
      return arrayIndex;
    });
    this.setState({ counters });
  };

  // This doesn't actually render. The component take information from here, and render it themselves.
  // value is a property. Counter gets value property with this.props.
  // and gets Title with props.children.
  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
