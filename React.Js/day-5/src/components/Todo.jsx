import { useState } from "react";

export default function Todo() {
  const [todoStr, setTodoStr] = useState(""); // for initial value of input data to be shown on ui
  const [todoObj, setTodoObj] = useState({
    task: "",
    done: false,
  }); // to add the tasks to the list 
  const [todoArr, setTodoArr] = useState([]); // to add the object in the array

  // for handling the input text
  const handleInput = (e) => {
    // to update the initial value of  <span>Task to be added : {todoStr}</span>
    setTodoStr((prev) => e.target.value);
    // directly adding e.target.value to the task so that we wont get empty string first time 
    setTodoObj({ ...todoObj, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // adding the object to the array
    setTodoArr([...todoArr, todoObj]);
    // reseting the obj to its initial state
    setTodoObj({
      task: "",
      done: false,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">
          Enter Todo <sup style={{ color: "red" }}>*</sup>
        </label>
        &nbsp;: &nbsp;
        <input
          type="text"
          id="todo"
          value={todoObj.task}
          onChange={handleInput}
          placeholder="enter your todo"
        />
        <input type="submit" value="+" />
      </form>
      <span>Task to be added : {todoStr}</span>
      <ul>
        {todoArr.map((el) => (
          <div>
            <li>
              {el.task} - [{el.done ? "FINISHED" : "PENDING"}]
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
