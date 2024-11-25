import React, { useRef, useState } from "react";

export default function Question7() {
  /* 
  Question 7:
    Create a React component that renders a list of tasks. Each task should have:
    - An input field to update the task's name.
    - A "Save" button to save the updated task name.
    - A "Delete" button to remove the task from the list.
    Requirements:
    - Initially, render three tasks in the list with sample names.
    - Ensure that updates to a task's name only apply when "Save" is clicked.
    - When a task is deleted, the remaining tasks should re-render correctly.
    */
  const inputRefs = useRef({}); // Store refs for each item by their id
  const [editItem, setEditItem] = useState({});
  const [items, setItems] = useState([
    { id: 1, name: "kelvin" },
    { id: 2, name: "mutugi" },
    { id: 3, name: "lucy" },
    { id: 4, name: "brian" },
    { id: 5, name: "faith" },
  ]);

  const saveItem = (itemId) => {
    //update items list
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, name: editItem[itemId] } : item
      )
    );
    // Clear input field for that item in edit state
    setEditItem((prevState) => ({ ...prevState, [itemId]: "" }));
    // Focus back on the specific input for the saved item
    inputRefs.current[itemId].focus();
  };
  const removeItem = (itemId) => {
    // Remove the item by filtering it out from the items list
    const remainingItems = items.filter(
      (remainingItem) => remainingItem.id !== itemId
    );
    setItems(remainingItems); // update items list
  };
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="flex gap-2 py-4">
            <span className="text-xl">{item.name}</span>
            <input
              ref={(el) => (inputRefs.current[item.id] = el)} // Store each input's ref by id
              type="text"
              name="itemName"
              id="itemName"
              value={editItem[item.id] || ""}
              onChange={(e) =>
                setEditItem((prevState) => ({
                  ...prevState,
                  [item.id]: e.target.value,
                }))
              }
            />
            <button
              type="button"
              aria-label={`Save ${editItem[item.id]}` || ""}
              onClick={() => saveItem(item.id)}
            >
              Save
            </button>
            <button
              type="button"
              aria-label={`Remove ${item.name}`}
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
