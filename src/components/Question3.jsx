import React, { useEffect, useState } from "react";

export default function Question3({ list }) {
  //Question 3:
  //Create a React component that takes a list of items as a prop and displays each item in a list. Additionally, add a button next to each item that, when clicked, removes that item from the list.

  const [listItems, setListItems] = useState(list);
  const removeList = (country) => {
    setListItems(listItems.filter((item) => item !== country));
  };

  return (
    <div>
      <ul>
        {listItems.map((country) => (
          <li key={country}>
            {country}
            {"  "}
            <span key={country}>
              {"    "}
              <button
                onClick={() => removeList(country)}
                aria-label={`Delete ${country}`}
              >
                {" "}
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
