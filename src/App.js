// Import React and React Component (snippet is imrc)
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// (Snippet to create class is cc)
class App extends Component {
  // This is only called once when instance of this component is created (so like Start()).
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("app - constructor", this.props);
  }

  // Called after component is rendered into the DOM
  componentDidMount() {
    // Good place to do Ajax Calls (I think this is like getting info from APIs?).
    // And then you can use this.setState() here.
    console.log("App- Mounted");
  }

  // Don't update the value directly! You have to copy the variable into a new variable, increment that, and then pass the new variable to setState().
  // React will compare the new variable to the previous variable and then update the DOM and the end of the tick.
  handleIncrement = (counter) => {
    // Spread operator (...) copies array. Properties in array will be passed by reference. So it's like having two arrays to reference the same exact properties.
    // It's confusing. In C#, it would be like having classOne.Item and classTwo.Item, except there is only one Item. Two seperate classes referencing the same Item.
    const counters = [...this.state.counters];

    // Figure out which counter in array we are incrementing
    const index = counters.indexOf(counter);

    // Copy the index with the spread operator (...), so that we are incrementing a copy of it, and not it itself.
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  // Use arrow functions so that 'this keyword' will refer to this class, and not be undefined (because 'this' inherits what is calling the function when calling with an arrow) (see notes).
  // Method copies counters array into a new array.
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

  // Note that here we still don't call the functions with (), because if we did they would be called every time render() is called.
  // Instead we pass a reference and let React call them. So use this.state.counters instead of this.state.counters().

  // Use <React.Fragment> because we are returning multiple root elements (<NavBar> and <main> are examples of root elements).
  render() {
    console.log("app - rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
