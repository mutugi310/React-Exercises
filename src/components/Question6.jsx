import React, { useRef, useState } from "react";

export default function Question6() {
  /* 
Question 6:
Create a React component that allows users to enter items into a shopping list. The component should have:
- An input field where users can type the item name.
- An “Add” button to add the entered item to the list.
- A list that displays all the added items.
- A “Remove” button next to each item that, when clicked, removes that item from the list.
  Make sure to handle empty input cases (don’t add an item if the input is empty) and clear the input field after an item is added.
     */

  const [item, setItem] = useState("");
  const [items, setItems] = useState(["kenya", "malawi", "south africa"]);
  const inputRef = useRef();

  function addItem() {
    if (item.trim()) {
      //trim whitespaces
      console.log(item);
      setItems([item, ...items]); // Add the new item (new array start with the item)
      setItem(""); // clear input field
      inputRef.current.focus(); // refocus input field
    } else {
      alert("Kindly enter an item");
    }
  }
  const removeItem = (itemName) => {
    const updatedItems = items.filter(
      (existingItem) => existingItem !== itemName
    ); //filter out the item to remove
    setItems(updatedItems); // update items
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name="itemName"
        id="itemName"
        aria-label="item name"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem} aria-label={`Add ${item}`}>
        Add item
      </button>
      <ul>
        {items.map((itemName) => (
          <li key={itemName} className="flex space-x-2 py-4">
            <span>{itemName}</span>

            <button
              onClick={() => removeItem(itemName)}
              aria-label={`Remove ${itemName}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
