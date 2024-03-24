import { createContext, useContext, useState } from "react";

const TodoContext = createContext({
  todoArray: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodoProvider = (props) => {
  const [todoArr, setDataArr] = useState([]);

  const addTodo = (todoText) => {
    setDataArr((prevState) => {
      return [...prevState, todoText];
    });
  };

  const removeTodo = (textIndex) => {
    setDataArr((prevState) => {
      return [...prevState.filter((item, index) => index !== textIndex)];
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoArr,
        addTodo,
        removeTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

const useTodo = () => useContext(TodoContext);

export default useTodo;
