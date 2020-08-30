This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

https://www.youtube.com/watch?v=W6NZfCO5SIk
Also: https://www.youtube.com/watch?v=dGcsHMXbSOA
CodeAcademy: GeneralMotersToolKit@gmail.com
View web page: http://localhost:3000/

// Other tidbits

- React is more popular than Angular and Vue (way more jobs avaible). All three are for front-end development and communicate with Node.js, which is back-end.
- The default value type for variables is undefined, not null.
- Functions are objects. And have their own methods they can call. MyFunction.MyMethod().
- There are no floats or ints. All numbers are of the value type, number.
- C# is a static language. Javascript is a dynamic language. Dynamic means variable types can change to another type at run-time (a string can change into a number).
- If there is no statement after return on the same line, javascript will automatically assume there is a semicolon there and the code on the next line will not run. To change this, you need to add parentheses, put the code inside, and then add a semicolon after the last parenthesis. (Think C# tuples.) The Prettier extension does this automatically if you put <div></div> around two html codes. It's also a good idea to change div to <React.Fragment></React.Fragment>.

// **_ Terminal Commands _**
// If terminal won't let you make commands (because it is set to a Node teriminal), just do control + shift + ` to reset it and open a regular terminal.

// Create React Project
// (also installs React and 3rd party libraries from Node if they aren't installed already.)
// (automatically creates git repository local to the computer.)
npx create-react-app project-name

// Open project
// (cd into folder)
npm start

// View webpage in browser
npm start
// If it says something is already running at port 3000, press n (for no) and go to that url
http://localhost:3000/

// **_ Javascript _**

// Import React (in index.js)
// (React is an object imported from the 'react' module. It is needed to compile jsx into Javascript.)
import React from "react";

// Import ReactDOM (in index.js)
// (Import this to send jsx code that was converted to virtual DOM to the real DOM)
import ReactDOM from "react-dom";

// Import Bootsrap (in index.js)
import "bootstrap/dist/css/bootsrap.css;

// Import .jsx class (in index.js)
// (.jsx class is in components folder I created, which is why you write /.components/myClass).
import Counter from './components/myClass';

// Import React and React Component (in .jsx)
// (can also use imrc snippet)
import React, { Component } from "react";

// this
// this returns the object that it is inside of.
myFunction() { console.log(this); }
// If the above function is called with an object reference
obj.myFunction()
// it will return with obj.
// If the above function is called without an object reference
myfunction()
// It will return undefined (if javascript strict mode is enabled (on by default for React))
// Or will return window (if strict mode is off).
// This is true even if function is inside of a class.

---

// How to fix? Arrow functions.
// When an arrow function is called, 'this' isn't rebinded to the object being called. It is inherited from what is calling the function.
// It's as simple as changing the function from this
myfunction()
// to this
myfunction = () => { }
// Note, 'this' returns the class, because render() is being called as class.render() and not as render().
// Source: @1:07:47.

// Object Destructuring
// Taking properties out of a variable so that you don't have to reference the variable each time.
// For example, instead of typing this.props over and over like seen here
{this.props.onDelete}
// You can deconstruct it like this
const { onDelete, somethingElse, anotherSomethingElse } = this.props;
// and now that same line of code can be written simply as
{onDelete}
// Source: @2:09:52 or Counters.jsx.

// Object Destructuring with a method
// Here you call the method and pass myObject
myMethod(myObject);
// but instead of taking in myObject, myMethod only takes in a property of myObject.
function myMethod(property) { }
// Source: 2:08:27 or navbar.jsx.

// Spread Operator (...)
const copiedCounters = [...this.state.counters];
// The array counters is copied to a new array, copiedCounters.
// But the properties are passed by reference, not value. So counters[0] is exactly the same as copiedCounters[0]. They are referencing the same variable.
// All this does is give you a second pointer to reference properties (I think).
// This is useful when using React's setState(). Since you need to pass a copy of a variable and not the variable itself, you use the spread operator to copy it and then modify that.
// -------
// If you wanted to increment a value in copiedCounters, like copiedCounters[0], without incrementing counters[0], you have to use the spread operator again.
copiedCounters[0] = { ... counters[0] };
// Now you can modify copiedCounters[0] without changing counters[0].
// Source: @1:51:43.

// Constructor
// Just create a method named constructor with no keywords before it or anything.
constructor() {}
// If the class inherits from another class, you have to call the parent class's constructor at the beginning of this constructor. You can do so by calling super().
constructor() { super(); // rest of code }
// If this is in React and you want to use props, make sure to pass props in as an argument, and to pass it in super()
constructor(props) { super(props); // rest of code }

// Print
console.log();
// will print in console of web browser. Right click web page, inspect element, and click console to view.

// Run a Javascript class
// In a .html document, add <script></script>. And then put src=(name of Javascript class) in the first carrots.

<script src="index.js"></script>

// Declare variable local to block (same way var keyword works in C#) (best practice)
let name = "Michael";

// Declare variable local to function (bad practice)
// Using var changes the scope to the function. Name is available anywhere in the function, even if it is declared inside another set of brackets (such as in a for-loop).
var name = "Michael";

// Declare global variable
// let is like saying private (only accessible in this class).
// var is like saying public (accessible from every class).
// var will allow the variable to be used in the "window" which is an object you can call in the browser console.
window.name;
// prints "Michael"

// Declare global variable as an object
let myNumber = function(width, height) { return width \* height; }
// Now function is a method inside of the object, myNumber. And can be called with
myNumber(width, height);
// Source example: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function.

// Declare empty array
let selectedColors = [];

// Declare array with values
let selectedColors = ["red", "blue"];
// You do not need to define an array's size when declaring. They are dynamic.
selectedColors[2] = "green";
// Even though the array only goes to index 0 and 1, that will automatically add a 3rd index.
selectedColors[5] = "yellow";
// 3 and 4 are now automatically added into the array, and are set to undefined.
// Arrays are also dynamic. Meaning not every value needs to be of the same type.
selectedColors[6] = 2;
selectedColors[7] = false;
// Now the array has strings, a number, and a boolean.
// Javascript automatically treats arrays as objects, and gives them the same methods/properties (selectedColors.length, selectedColors.filter, etc).
// (Use console.log(selectedColors) and the browser console will print all of the values).

// Declare constant
const name = "Michael";

// Declare object
// (variables inside are called properties (name and age).)
let person = {
name: "Michael",
age: 30
};

// Redefine an object's property (dot notation)
person.name = "Petah";
// Or use bracket notation if you won't know the proptery until run-time:
person["name"] = "Petah";

// Create function
function greet(name, lastName) {
console.log("Hello " + name + " " + lastName);
}
// All functions in Javascript are objects. Because they're objects, they can also have methods inside of them.
// For example, all functions have a default method such as this one.
greet.bind().
// Note that it's called a function if it's outside of a class or object. And called a method if it's inside a function or class.

// Create function with return type
function square(number) {
return number \* number;
}

// Call a function
// To call this function greet(name, lastName), use
greet("Jon", "Smith");
// Prints "Hello Jon Smith."
// Call function without passing in all arguments.
greet("Jon");
// Prints "Hello Jon Undefined."

// === Operator
// Mean of equal value and equal type
x === 5 // prints true
x === "5" // prints false
// !== operator is the opposite.

// Conditions (truthy and falsey)
// Strings and numbers can be used in conditions. When true they are truthy, and when false, they are falsey.
// Strings are only falsey if they have 0 characters.
// Numbers are only falsey if they are equal to 0.
true && false // returns false
true && 'hi' // returns 'hi' (true)
true && 'hi' && 1 // returns 1 (true)
true && 0 // returns 0 (false)
true and '' // returns '' (false)

---

// You can use this code for Conditional Rendering (jsx).
// Here, "My Text" will only show if myArray has a length of 0.

<div> {this.myArray.length === 0 && "My Text"} </div>

// **_ Node.js _**

- Node.js: Javascript was meant to only run in browsers. Browsers have their own engines to run it (Chrome has v8, Firefox has SpiderMonkey). Node.js is a wrapper that takes the v8 engine out of the browser, and allows you to run applications anywhere with Javascript.
- NPM (Node Package Manager): Node.js allows you to install 3rd party libraries.

// **_ Browser Console _**

// typeof
typeof myVariable
// console will print the data type of a variable (string, number, etc).

// Debugging
// Using the React Developer Tools extension for Chrome
// Right click, inspect element, up top where it says "elements, console, sources" etc.
// Click the two right arrows and click components. Now you can view your React components.

// **_ React _**

## TLDR: index.html calls index.js which calls counter.jsx.

// index.html

- Calls index.js with <div id="root"></div>.

---

// index.js

- Calls index.css (by importing bootstrap?)
- Calls counter.jsx by importing it.
- Imports React to convert jsx into javascript.
- Imports ReactDOM to send jsx code to virtual DOM and real DOM.

---

//counter.jsx

- Imports React and React Component
- Is a class that inherits from component. Returns how it renders.

- Component: A React app is made up of components. Each component is a Javascript class which has a state and a render method.
- State: The data we want to show when the component is rendered.
- Render method: How the component should appear to the user. Uses a React Element (virtual DOM) which then updates the Real DOM (DOM element). React elements are faster because they only update the DOM element when it is needed. React elements are nice because updating the DOM with vanilla Javascript is frustrating (I guess?).
- DOM Element: Programming interface for HTML and XML documents (I suppose this is the file that the code is on).
- jsx: A weird syntax of Javascript and XML.
- Babble: Compiles jsx code to Javascript so the browser can understand it.
- Bootstrap: A CSS library that gives our application a modern look and feel:
  The NavBar came from Bootstrap. At this URL under Brand https://getbootstrap.com/docs/4.5/components/navbar/

// **_ jsx / HTML / CSS _**

// Main header

<h1>

// Second smaller header

<h2>

// Unordered (bulleted) list

<ul>

// Button
<button>

// Hooks
// Functions automatically called by React if you write them (like Start() and Awake in Monobehaviour)
// The below functions are called in the order they are typed. There are more, but these are the most commonly used.
//
// Mount: When an instance of a component is created and it is added to the DOM for the first time.
// constructor(), render() (all children components are rendered here too), componentDidMount().
//
// Update: When the state or the props of the component are changed.
// render(), componentDidUpdate().
//
// Unmount: When a component is removed from the DOM (such as when destroying an instance of a class).
// componentWillUnmount().
//
// Source: @2:10:53.

// Mount Hook
// Contructor(): Need to pass props in if you want to use it. Can't use setState().
// render(): Is called for the component and then all children components before componentDidMount().
// componentDidMount(): Good place for Ajax calls (apis?) and for using setState() if needed.
// Source: @ 2:12:33.

// Update Hook
// componentDidUpdate(): Can take in two arguments. prevProps and prevState.
// You can use these to determine things such as check if a variable has changed by a lot (prevProps.variable - props.variable)
// and if so, make another Ajax call.
// Source: @2:18:11.

// Unmount
// componentWillUnmount(): Called right before a component class instance is destroyed (removed from DOM).
// It's a good place to clean up any variable to prevent memory leaks or whatever you need to do.
// @ Source: @2:22:33.

// Constructor with Props
// If you want to use this.props.something in the constructor, you have to put it as an argument.
constructor(props)
// Also make sure to pass it in super() if you need to use that
super(props);
// super() needs to be called when your class inherits from another class. It calls the parent class's constructor (see note in javescript category).
// Also note that setState() can't be called in the construtor, because the component hasn't been rendered and placed in the DOM yet.
// Source: @2:12:44.

// Pass Method By Reference (Event Handler)
// Here, onClick is called when the button is pressed (onClick is a DOM method).
<button onClick ="">
// Make onClick call a function instead of a string.
<button onClick={this.functionName}>
// Note that you don't use parentheses for the function! This is because we are passing a reference to the function object and not actually calling the object. jsx will call the function using the reference when onClick is called. If we did use parentheses and called the object here, the function would be called every time render() is called instead of when the button were pressed.
// Source: https://www.youtube.com/watch?v=Ke90Tje7VS0&lc=UgxG7QMlrAZy_u9RLt54AaABAg @1:02:14.
// Source2: https://stackoverflow.com/questions/48259077/calling-a-javascript-function-in-jsx-why-does-calling-a-function-without-the
// -------
// Passing a Method Reference with arguments
// Without arguments
<button onClick={this.functionName}>
// With arguments, use an arrow function (lambda?)
<button onClick={ () => this.functionName(myVariable)}>
// The function being called should look like this, where myVariable is the parameter.
functionName = myVariable => { }
// Source: @1:13:03

// When you write html in jsx, it converts to pure Javascript. Meaning that

<li>Jake</li>
// turns into
React.createElement('li', null, 'Jake');

// Attributes
// src, className, style are all attributes. Found in html arrows <>.
// Here, src="" is the attribute.
<span src="">MyText</span>
// You fill in the quotations. Or replace quotations with jsx code.
<span src={this.MyProperty}>MyText</span>

// Apply styling using classes (className)
// (Standard and most performant way to do attributes.)
// (These are Bootstrap classes. Look at its documentation to see what the classes do).
<span className="badge badge-primary m-2">MyText</span>
// badge, badge-primary, and m-2 are the class names providing the styling.
// Here's another example with a button
<button className="btn btn-secondary btn-sm">MyButtonText</button>

// Apply styling using attributes (with an object)
// First create the property/object
styles = {
fontSize: 10
fontWeight: 'bold'
};
// Then apply the object to the text
<span style={this.styles}>MyText</span>

// Apply styling using attributes (with an object's property)
state = {
count: 0,
imageUrl: "https://picsum.photos/200"
};
<img src={this.state.imageUrl} alt="" />

// Apply styling using attributes (with no object)
// (fontSize seems to be a property inside an anonymous object. If that's even a thing. Make sure to put brackets inside of the brackets for this to work.)
<span style={{ fontSize: 30 }}>MyText</span>

// DOM Event (React event. React attribute)
// onClick is a DOM event.
<button onClick={}></button>

// For-Loop
// jsx doesn't have for-loops. So we do it in this "hacky" way.

<ul>{this.arrayValues.map(arrayValue => <li>{arrayValue}</li>)}</ul>
// arrayValues.map() iterates over arrayValues and creates a new array with the same values.
// Kind of like doing for (i < arrayValues.Length){ newArray = arrayValues[i]; }
// <li>{arrayValue}</li> is a jsx that compiles to pure javascript function.
// Because arrayValues.map() is called for every index for arrayValues, it loops, calling the function that many times.
-------
// So that React can sync the virtual Dom and real Dom, each item in a list needs a key. So add key={arrayValues}.
<ul>{this.arrayValues.map(arrayValue => <li key={arrayValues}>{arrayValue}</li>)}</ul>
-------
// This article explains it better: https://thinkster.io/tutorials/iterating-and-rendering-loops-in-react ... Or watch at 52.01: https://www.youtube.com/watch?v=Ke90Tje7VS0&t=981s.

// If Conditions (Conditional Rendering)
// Strings and numbers can be used in conditions. When true they are truthy, and when false, they are falsey.
// Strings are only falsey if they have 0 characters.
// Numbers are only falsey if they are equal to 0.
true && false // returns false
true && 'hi' // returns 'hi' (true)
true && 'hi' && 1 // returns 1 (true)
true && 0 // returns 0 (false)
true and '' // returns '' (false)

---

// You can use this code for Conditional Rendering (jsx).
// Here, "My Text" will only show if myArray has a length of 0.

<div> {this.myArray.length === 0 && "My Text"} </div>

// State()
// Function is only called once when instance of component is created. So like Start() in Unity.

// setState()
// change a variable and then pass it into setState(class: variable) so that React knows to update the DOM.
setState(MyClass: myVariable);
// If the property has the same name as the class, you can just pass in the property.
setState( myVariable );
// React will check each setState() method and update the DOM once in one tick. Kind of like Unity's physics ticks.
// (Remember the function needs to be an arrow function so that 'this' refers to the class and is not undefined.)
incrementNumber = () => {
this.setState({ this.myNumber + 1 });
}
// Src: @1:08:53

// Truth (single source of truth) (state)
// When what a component is showing doesn't line up with its state.

// Controlled Component
// A component that does not have its own state.
// It's parent class holds the variables and functions it needs. And it has to call them using props.
// The only methods it has is for rendering.

// Stateless Functional Component
// Note: Not sure if this exists anymore in React since they no longer use classes. My tutorial is old.
// A component that has no state or methods. It only exists to render, and gets all of its data from props.
// You can get rid of the render() method and change it to something kind of like a constructor (but not a constructor.)
// const MyClass = (props) => { return (); }
// For this, you don't have to use 'this' when passing methods. So instead of
{this.props.totalCounters}
// you can use
{props.totalCounters}
// Also change the import from importing React and React Component, to only importing React (so you don't get a console warning that 'component' is never used).
import React from "react";
// Source: navbar.jsx. Or @2:06:22.

// Props
// Used to grab data from the parent class that is "holding" all of the child components. It also holds the variables. This function gets that variable data.
// Every component has this. So say we have Counters and counter.
// In Counters, counter is being used as an html name
<Counter key={counter.id} value={counter.value}></Counter>
// Prop is the properties in this line of code. So value is a property. id is actually ignored because it's a unique indentifier for each Counter class.
// Source: @1:22:10

// Props Children
// Grabs properties from html tags that are inbetween the tags with this class's name.
// So if Counters class has this:
<Counter key={counter.id} value={counter.value}> <h4> TITLE </h4> </Counter>
// Counter class can get it by using
this.props.children

// Difference between Props and State
// State is local to the component. "Parent" class and classes under the compnent can not access its state.
// Props are for the component to access data from the "parent" class. Props are read only.
