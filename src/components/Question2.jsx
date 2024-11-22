import React, { useState } from "react";

export default function Question2() {
  //Question 2:
  //Create a React component with a button that toggles the visibility of a paragraph. When the paragraph is visible, the button text should say "Hide", and when hidden, it should say "Show".

  const [isVisible, setIsVisible] = useState(true);
  const toggleTextVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      {isVisible && (
        <p>
          Create a React component with a button that toggles the visibility of
          a paragraph.
        </p>
      )}

      <button onClick={toggleTextVisibility} aria-expanded={isVisible}>
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
