const root = document.getElementById("root");
const user = document.getElementById("user");
const search = document.getElementById("search");

let user_name = "";

user.addEventListener("change", (e) => {
  user_name =  user_name + e.target.value ;
});


search.addEventListener("click", () => {
    fetchData(user_name);
    
  });

const fetchData = async (name) => {
  try {
    const res = await fetch(`https://api.genderize.io?name=${name}`);
    const data = await res.json();
    showData(data);
  } catch (error) {
    console.log(error.message);
  }
};

const showData = (data) => {
  root.innerHTML = "";
  const user_gender = document.createElement("h1");
  user_gender.innerText = data.gender;

  root.append(user_gender);
};

