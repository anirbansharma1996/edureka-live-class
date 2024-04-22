const user_form = document.getElementById("user_form");
const root = document.getElementById("root");
let user_array = [];

user_form.addEventListener("submit", (e) => {
  e.preventDefault();
  const u_name = document.getElementById("user_name").value;
  const u_image = document.getElementById("user_image").value;
  const u_email = document.getElementById("user_email").value;
  const u_gender = document.getElementById("user_gender").value;
  const u_phonenumber = document.getElementById("user_phonenumber").value;
  const u_address = document.getElementById("user_address").value;

  if (
    u_image === "" ||
    u_name === "" ||
    u_gender === "" ||
    u_email === "" ||
    u_address === "" ||
    u_phonenumber === ""
  ) {
    alert("invalid data");
  } else {
    const user_object = {
      image: u_image,
      name: u_name,
      email: u_email,
      phonenumber: u_phonenumber,
      gender: u_gender,
      address: u_address,
    };

    let flag = false;
    user_array.find((el) => {
      if (el.email === u_email) {
        flag = true;
      }
    });

    if (flag) {
      alert("user already exist");
    } else {
      user_array.push(user_object);
      Showdata(user_array);
    }
  }
});

function Showdata(arr) {
  root.innerHTML = "";
  arr.forEach((el, index) => {
    let main = document.createElement("div");
    main.className = "main";

    let image = document.createElement("img");
    image.src = el.image;

    let name = document.createElement("h4");
    name.innerText = `#${index + 1} : ${el.name}`;
    let email = document.createElement("p");
    email.innerText = `Email : ${el.email}`;
    let gender = document.createElement("p");
    gender.innerText = `Gender : ${el.gender}`;
    let phone = document.createElement("p");
    phone.innerText = `Contact No. : ${el.phonenumber}`;
    let address = document.createElement("p");
    address.innerText = `Address : ${el.address}`;

    let btn_div = document.createElement("div");
    btn_div.className = "btn_div";

    let edit = document.createElement("button");
    edit.innerText = "Edit User";
    edit.addEventListener("click",()=>{
      EditUser(index)
    })

    let remove = document.createElement("button");
    remove.innerText = "Delete User";
    remove.addEventListener("click", () => {
      RemoveUser(index);
    });

    btn_div.append(edit, remove);

    main.append(image, name, email, gender, phone, address, btn_div);
    root.append(main);
  });
}

function RemoveUser(index) {
  user_array = user_array.filter((el, ind) => ind !== index);
  Showdata(user_array);
}


function EditUser(index){
  let new_name = window.prompt("Enter new Name")
  if(new_name !== null){
    if(new_name.trim() !==""){
      user_array[index].name = new_name
      Showdata(user_array)
    }
  }else{
    alert("Enter Valid Name")
  }

}