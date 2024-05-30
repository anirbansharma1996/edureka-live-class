import React, { useState } from "react";

function Todo() {
  const [taskArr, setTaskArr] = useState([]);
  const [list, setList] = useState({
    task: "",
    state: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setList({ ...list, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTaskArr([...taskArr, list]);
    setList({
      task: "",
      state: "",
    });
  };

  const handleDelete = (ix) => {
    let after_delete = taskArr.filter((_, i) => i !== ix);
    setTaskArr(after_delete);
  };

  const handleUpdate = (ix) => {
    let after_update = taskArr.map((el, i) =>
      ix == i ? { ...el, state: "done" } : el
    );
    setTaskArr(after_update);
  };

  return (
    <div>
      <FormData
        list={list}
        handleInput={handleInput}
        handleFormSubmit={handleFormSubmit}
      />
      {taskArr?.map((el, i) => (
        <ShowData
          key={i}
          props={el}
          index={i}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}

export default Todo;

export function FormData({ handleInput, list, handleFormSubmit }) {
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="task"
        value={list.task}
        onChange={handleInput}
        required
      />
      <select name="state" value={list.state} onChange={handleInput} required>
        <option value="" selected disabled>
          Choose state...
        </option>
        <option value="pending">pending</option>
      </select>
      <input type="submit" value={"add todo"} />
    </form>
  );
}

export function ShowData({ props, index, handleDelete, handleUpdate }) {
  const { task, state } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h4>{task[0].toUpperCase() + task.slice(1)}</h4>
      <p>{state}</p>
      <button onClick={() => handleUpdate(index)}>UPDATE</button>
      <button onClick={() => handleDelete(index)}>DELETE</button>
    </div>
  );
}
