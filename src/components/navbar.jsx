// *** Not a stateless functional component. This is the regular way of doing it with a class. ***
//import React, { Component } from "react";

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }

// Stateless Functional Component
// The below function is an example of a stateless function component.
// Since this class has no state or functions, it can just be a function instead of a class.
// Doing it as a class is fine. However some developers will do it this way and so it's good to be aware of the pattern.
// Note that instead of using this.props.totalCounters, you pass props in as an argument and you don't have to use 'this' anymore.
// Also note that my tutorial is old, and it seems React doesn't use classes at all anymore. So I'm not sure if this even matters.
import React from "react";

// props is passed in automarically by React.
// const NavBar = (props) => {
// Except we used Objected Destructuring. So props is passed to this function, but we only take in one of its properties, totalCounters.
// const NavBar = ({ totalCounters }) => {

// Navbar code is copied from Bootstrap. From this link under Brand. https://getbootstrap.com/docs/4.5/components/navbar/
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
