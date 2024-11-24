import React, { useState } from "react";

export default function Question5() {
  //Question 5:
  //Create a React component that displays a counter with increment and decrement buttons. The counter should start at 0. When the counter reaches 10, disable the increment button, and when it reaches 0, disable the decrement button.
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    setCounter((prev) => Math.max(prev - 1, 0)); // return whichever is bigger between prev state - 1 and 0
  };
  const incrementCounter = () => {
    setCounter((prev) => Math.min(prev + 1, 10)); // return whichever is smaller between prev state + 1 and 10
  };

  return (
    <div>
      <p>Counter:</p>

      <button
        onClick={decrementCounter}
        aria-label="decrement counter"
        disabled={counter === 0}
        className={counter === 0 ? "cursor-not-allowed" : ""}
      >
        -
      </button>
      <span className="px-2"> {counter}</span>
      <button
        onClick={incrementCounter}
        aria-label="increment counter"
        disabled={counter === 10}
        className={counter === 10 ? "cursor-not-allowed" : ""}
      >
        +
      </button>
    </div>
  );
}
