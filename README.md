# Modal Management and Global State Management

Reflection:
In this demo, I learned how to manage multiple modals by using React's Context API, creating a ModalManager that uses a lookup table of Modal Objects to display a modal.
I also used the react-hook-forms library to implement 'new item' and 'update item' forms, both of which are in their own modals. React Hook Forms allowed me to worry less about validating forms.
I used MaterialUI's Dialogs API to create the forms but would like to be able to create modals without using a library.
I also used useReducer and useContext together to create global state management. I connected this with the modals to create a simple item management list that will be used in the database-project.
While useReducer and useContext are easy enough, I am curious as to what it looks like when there are even more states to manage

Below are the resources I used to create this demo (in case I forget how to implement either):

- [React-Form-Hook videos](https://www.youtube.com/playlist?list=PLC3y8-rFHvwjmgBr1327BA5bVXoQH-w5s) by Codevolution [Github Repo](https://github.com/gopinav/React-Hook-Form-Tutorials/blob/main/rhf-demo/src/components/MuiLoginForm.tsx)
- [Modal Management with Context API](https://www.youtube.com/watch?v=4BvvJ_HXyRE) by Desi Codes. [Sandbox](https://codesandbox.io/p/sandbox/intelligent-lucy-79mgg1?file=%2Fsrc%2Fcomponents%2FHome.jsx)
- [Learn React - Scaling Up with Reducer and Context](https://react.dev/learn/scaling-up-with-reducer-and-context) by the React Team
