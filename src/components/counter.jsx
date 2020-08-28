// Import React and React Component (snippet is imrc)
import React, { Component } from "react";

// (Snippet to create class is cc)k
class Counter extends Component {
  state = {
    // property
    value: this.props.value,
  };

  // Use arrow function so that this will refer to the class, and not be undefined (see notes).
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // This is an event handler. So pass reference to function instead of calling it
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  // There are 3 classes, badge, m-2, and (badge-warning or badge-primary).
  // warning makes background orange. primary makes background blue. Function determines and returns which to use.
  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    // 3rd class is badge-something. Determine if it should be 'warning' or 'primary' and add it to string.
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
