import { useState } from "react";
import useTodo from "../Store/TodoListProvider";
import "./style.css";
import { BsTrash } from "react-icons/bs";

const TodoForm = () => {
  const { addTodo, todoArr, removeTodo } = useTodo();
  const [inputValue, setInputValue] = useState("");

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="main">
      <div className="title-div">
        <span className="line-left"></span>
        <h1> To-Do Now</h1>
        <span className="line-right"></span>
      </div>
      <div className="input-div">
        <form>
          <input type="text" value={inputValue} onChange={changeValue} />
          <button className="add-button" type="button" onClick={handleAddTodo}>
            Add Task
          </button>
        </form>
      </div>
      <ul>
        {todoArr.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button
                className="remove"
                onClick={() => {
                  removeTodo(index);
                }}
              >
                {" "}
                <BsTrash size={20} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoForm;
