import React, { useRef, useState } from "react";

export default function Question4() {
  //Question 4:
  //Create a simple form in React with an input field for a user’s name and a submit button. When the form is submitted, display an alert with the entered name. Make sure to prevent the form’s default refresh behavior on submit.
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const inputRef = useRef(null);
  function submitName(e) {
    e.preventDefault();
    setSubmittedName(name); //Store submitted name to display in alert message
    alert(name);
    setName("");
    inputRef.current.focus();
  }

  return (
    <>
      <form onSubmit={submitName}>
        <label htmlFor="userName" className="m-4">
          User Name
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter user-name "
          className="p-2"
          value={name} //control value
          onChange={(e) => setName(e.target.value)} //update state
          ref={inputRef}
        />
        <br />
        <button type="submit" className="m-4" aria-label="submit">
          Submit
        </button>
      </form>
      {/* Accessible message that updates after form submission */}
      <p
        className="absolute -left-20"
        aria-live="polite"
        id="alert message"
        aria-readonly
      >
        {submittedName && name}
      </p>
    </>
  );
}
