import { useState } from "react";

export default function TodoTwo() {
  const [taskobj, setTaskObj] = useState({
    task: "",
    isDone: false,
  });
  const [taskarr, setTaskArr] = useState([]);

  const handleInput = (e) => {
    setTaskObj({ ...taskobj, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(taskobj.task===""){
        return alert('enter a task first')
    }
    setTaskArr([...taskarr, taskobj]);
    setTaskObj({ task: "", isDone: false });
  };

  const handleDelete =(index)=>{
      const updatedArr = [...taskarr]
      updatedArr.splice(index,1)
      setTaskArr(updatedArr)
  }

const handleUpdate =(index)=>{
    const updatedArr = [...taskarr]
    updatedArr[index] = {...updatedArr[index],isDone:!updatedArr[index].isDone}
    setTaskArr(updatedArr)
}

//[{n:"na",d:false},{n:"ha",d:true}]
//      0                  1
// let s[1] = {n:"ha",d:true}
// s[1]= {...s[1],d:!s[1].d}

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskobj.task}
          onChange={handleInput}
          placeholder="enter your task"
        />
        <input type="submit" value="+" />
      </form>
      <div>
        {taskarr.map((el,i) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "80%",
              alignItems: "center",
            }}
          >
            
            <h5>{el.task[0].toUpperCase() + el.task.slice(1)} </h5>
            {el.isDone ? (
              <p style={{ color: "green" }}>Finished</p>
            ) : (
              <p style={{ color: "red" }}>pending</p>
            )}
            <button onClick={()=>handleUpdate(i)}>T</button>
            <button onClick={()=>handleDelete(i)}>D</button>
          </div>
        ))}
      </div>
    </div>
  );
}
