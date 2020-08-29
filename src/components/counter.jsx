import React, { Component } from "react";

class Counter extends Component {
  // Called during update hook (when compoent or a variable in its props changes)
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Can do an Ajax call to get new data from the server.
      // This condition is just an example.
    }
  }

  // Called right before component unmounts (when class instance is destroyed)
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  // btn-danger to make red. btn-sm to make small. m-2 to add a margin of two (spacing from edge of page).

  // There are 3 classes, badge, m-2, and (badge-warning or badge-primary).
  // warning makes background orange. primary makes background blue. Function determines and returns which to use.
  getBadgeClasses() {
    let classes = "badge m-2 badge-";

    // 3rd class is badge-something. Determine if it should be 'warning' or 'primary' and add it to string.
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Object destructuring. Gets value property out of counter I think?
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
