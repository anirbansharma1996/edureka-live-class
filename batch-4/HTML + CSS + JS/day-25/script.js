let taskarr = [];
const addTodoBtn = document.getElementById("add-todo");
const showListUI = document.getElementById("todo-list");

addTodoBtn.addEventListener("click", () => {
  const taskinput = document.getElementById("todo-input").value;
  if (taskinput === "") {
    return alert("enter a task first");
  } else {
    const taskobj = {
      task: taskinput,
      isDone: false,
    };
    taskarr.push(taskobj);
    ShowTasks(taskarr);
}
});

function ShowTasks(arr) {
  showListUI.innerHTML = "";
  arr.forEach((el, index) => {
    let list = document.createElement("li");
    list.innerText = `${el.task} | ${el.isDone ? "Done" : "Pending"}`;
    let btndiv = document.createElement("div");
    btndiv.className = "btn-div";
    let updatebtn = document.createElement("button");
    updatebtn.innerText = "update";
    updatebtn.addEventListener("click", () => {
      UpdateTodo(index);
    });

    let deletebtn = document.createElement("button");
    deletebtn.innerText = "delete";
    deletebtn.addEventListener("click", () => {
      DeleteTodo(index);
    });

    btndiv.append(updatebtn, deletebtn);
    showListUI.append(list, btndiv);
  });
}

function UpdateTodo(index) {
  taskarr = taskarr.filter((el, i) =>
    index === i ? { ...(el.isDone = true) } : el
  );
  ShowTasks(taskarr);
}

function DeleteTodo(index) {
  taskarr = taskarr.filter((el, i) => i !== index);
  ShowTasks(taskarr);
}
