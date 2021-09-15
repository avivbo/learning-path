import { useState } from "react";

function SimpleseStateComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="example">
      <div className="example__details">
        <h3>Simple state component</h3>
        <p>
          This component use the simpliest functionality that useState hook
          provide:
        </p>
        <ul>
          <li>Set initial value (to 0).</li>
          <li>
            Use <strong>setState</strong> function that return from useState
            hook to update the state.
          </li>
        </ul>
      </div>

      <div className="example__output flex">
        <div className="mr-auto">Currently the counter is: {count}</div>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </div>
  );
}

function UseStateWithObject() {
  const [state, setState] = useState({ counter: 0, theme: "dark" });

  const setKeyValue = (key, value) =>
    setState((prevState) => ({ ...prevState, [key]: value }));

  const toggleTheme = () => (state.theme === "dark" ? "ligth" : "dark");
  return (
    <div className="example">
      <div className="example__details">
        <h3>Object state component</h3>
        <p>This component store object state.</p>
        <ul>
          <li>Set initial value object</li>
          <li>
            Use helper function to update the state and keep the previous values
            that did not updated.
          </li>
        </ul>
      </div>
      <div className="example__output flex">
        <div className="mr-auto">
          The counter is {state.counter} and the the is {state.theme}
        </div>
        <button onClick={() => setKeyValue("counter", state.counter + 1)}>
          Increase counter by 1
        </button>
        <button onClick={() => setKeyValue("theme", toggleTheme())}>
          Toggle theme
        </button>
      </div>
    </div>
  );
}

function UseMultipleUseState() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("dark");
  const toggleTheme = (prevTheme) => (prevTheme === "dark" ? "ligth" : "dark");

  return (
    <div className="example">
      <div className="example__details">
        <h3>Multiple state component</h3>
        <p>This component use useState hook multiple times</p>
        <ul>
          <li>use Usetate hook for counter</li>
          <li>use Usetate hook for theme</li>
          <li>use the updater functions accordingly</li>
        </ul>
      </div>

      <div className="example__output">
        <div className="flex">
          <div className="mr-auto">currently the counter is: {count}</div>
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <div className="flex">
          <div className="mr-auto">currently the theme is: {theme}</div>
          <button
            onClick={() => setTheme((prevTheme) => toggleTheme(prevTheme))}
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}

function LazyUseState() {
  function expensive() {
    for (let i = 0; i < 1000; i++) {
      console.log("ee");
    }
    return Math.random();
  }

  const [counter /** no need updater function */] = useState(expensive);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className="example">
      <div className="example__details">
        <h3>Lazy initial state component</h3>
        <p>
          This component use fucntion to initialize one of his value. if we call
          the fucntion inside the initialization, the function get call every
          render even if we dont update the value.
        </p>
        <ul>
          <li>to avoid this - we put the fuction as iniat value </li>
          <li>
            the function get call only once when the component first rendered.
          </li>
        </ul>
      </div>

      <div className="example__output">
        <div>counter 1 is: {counter}</div>
        <div className="flex">
          <div className="mr-auto">counter 2 is: {counter2}</div>
          <button onClick={() => setCounter2((counter) => counter + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
}

export default function useStateComponent() {
  return (
    <div>
      <SimpleseStateComponent />
      <UseStateWithObject />
      <UseMultipleUseState />
      <LazyUseState />
    </div>
  );
}
