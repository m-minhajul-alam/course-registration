### Project features.
- The web allows users to browse and enroll in various courses.
- The web provides users with a simple and user-friendly interface
- The web uses React.js as the front-end framework and deployed on Surge.


### State management

State management is a key concept of web development. In this project, I used React, a JavaScript library for building user interfaces, to create reusable components that can render different UI elements based on the state of the website. React uses a one-way data flow model, where the state is passed down from the parent component to the child component as props. This makes the state easier to track and debug, as it is always clear where the state comes from.

I uses the **useState** hook to store and update the values of various UI elements, such as the current user, the selected course, the cart items and many more. I also uses the **useEffect** hook to perform side effects, such as fetching data from Firebase or updating the document title, based on the changes in the local state.