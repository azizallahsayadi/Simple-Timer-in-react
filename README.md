# Simple Timer with react

This template provides a  simple timer with the use of useState and useEfect hooks

In React, useState and useEffect are two of the most commonly used hooks that allow you to manage state and side effects in functional components.

useState
useState is a hook that lets you add state to your functional components. It returns an array with two elements: the current state value and a function to update that state.

Syntax:

javascript

Copy Code
const [state, setState] = useState(initialState);
initialState: The initial value of the state.
state: The current state value.
setState: A function that updates the state.
Example:

javascript

Copy Code
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
useEffect
useEffect is a hook that lets you perform side effects in your components. Side effects can include data fetching, subscriptions, or manually changing the DOM. It runs after the render is committed to the screen.

Syntax:

javascript

Copy Code
useEffect(() => {
  // Your side effect code here

  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
The first argument is a function that contains the side effect.
The optional second argument is an array of dependencies. The effect will only run when the dependencies change.
Example:

javascript

Copy Code
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []); // Empty array means this effect runs once after the initial render

  return <div>Seconds: {seconds}</div>;
}
Key Points
State Management: useState is used for managing local state in functional components.
Side Effects: useEffect is used for handling side effects, such as data fetching or subscriptions.
Cleanup: You can return a cleanup function from useEffect to clean up resources when the component unmounts or before the effect runs again.
These hooks are essential for building modern React applications and help you manage state and side effects in a more declarative way.
