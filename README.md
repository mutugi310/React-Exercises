# React-Exercises

##Technical react coding interview questions

Question 1:
You have a React component that needs to fetch data from an API when it is first rendered and display the data on the page. Write the functional component for this, including the API fetch logic. Assume the API endpoint is https://api.example.com/data. Handle loading and error states.

Question 2:
Create a React component with a button that toggles the visibility of a paragraph. When the paragraph is visible, the button text should say "Hide", and when hidden, it should say "Show".

Question 3:
Create a React component that takes a list of items as a prop and displays each item in a list. Additionally, add a button next to each item that, when clicked, removes that item from the list.

Question 4:
Create a simple form in React with an input field for a user’s name and a submit button. When the form is submitted, display an alert with the entered name. Make sure to prevent the form’s default refresh behavior on submit.

Question 5:
Create a React component that displays a counter with increment and decrement buttons. The counter should start at 0. When the counter reaches 10, disable the increment button, and when it reaches 0, disable the decrement button.

Question 6:
Create a React component that allows users to enter items into a shopping list. The component should have:

- An input field where users can type the item name.
- An “Add” button to add the entered item to the list.
- A list that displays all the added items.
- A “Remove” button next to each item that, when clicked, removes that item from the list.
  Make sure to handle empty input cases (don’t add an item if the input is empty) and clear the input field after an item is added.

Question 7:
Create a React component that renders a list of tasks. Each task should have:

- An input field to update the task's name.
- A "Save" button to save the updated task name.
- A "Delete" button to remove the task from the list.
  Requirements:
- Initially, render three tasks in the list with sample names.
- Ensure that updates to a task's name only apply when "Save" is clicked.
- When a task is deleted, the remaining tasks should re-render correctly.

Question 8:
Create a React component that renders a list of books with the following features:

- Initial List: The component should start with an initial list of three books, each having a title and an author.
- Add Book: Allow users to add a new book by entering the title and author in input fields and clicking an "Add Book" button.
- Delete Book: Each book in the list should have a "Delete" button that removes the book from the list.
- Edit Book: Each book should have an "Edit" button. When clicked:
- The book's title and author should become editable (showing input fields for both).
- A "Save" button should appear, allowing the user to save the changes.

Requirements:

- Ensure that the changes only apply when "Save" is clicked.
- Handle cases where the user tries to add a book with an empty title or author.
- Ensure that when a book is deleted, the remaining list re-renders correctly.
