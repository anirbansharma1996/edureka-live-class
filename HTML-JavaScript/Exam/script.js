const root = document.getElementById("root");
const submit = document.getElementById("submit");
let data_array = [];

document.addEventListener("DOMContentLoaded",()=>{
    const storedData = localStorage.getItem("Blog")
   if(storedData){
    data_array=JSON.parse(storedData)
     RenderData()
   }
})

submit.addEventListener("click", () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;

  if (title === "" || description === "" || date === "") {
    alert("Empty Field");
  } else {
    const data_object = {
      title: title,
      description: description,
      date: date,
    };
    data_array.push(data_object);

    // Save the updated data_array to local storage
   localStorage.setItem("Blog",JSON.stringify(data_array))

    RenderData();
  }
});

function RenderData() {
  root.innerHTML = "";
  data_array.forEach((element, index) => {
    const container = document.createElement("div");
    container.className = "container";

    const setTitle = document.createElement("h4");
    setTitle.innerText = `#${index + 1} ${element.title}`;

    const setDescription = document.createElement("p");
    setDescription.innerText = element.description;

    const setDate = document.createElement("h6");
    setDate.innerText = `Posted On: ` + element.date;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove Blog";

    deleteButton.addEventListener("click", () => {
      data_array.splice(index, 1);

      // Save the updated data_array to local storage
     localStorage.setItem("Blog",JSON.stringify(data_array))

      RenderData();
    });

    container.append(setTitle, setDescription, setDate, deleteButton);

    root.append(container);
  });
}






  