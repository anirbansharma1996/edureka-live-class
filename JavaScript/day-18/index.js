const b = !true;

function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b === true) {
        //Simulate Resolve
        const data = { message: "successfully data loaded" };
        resolve(data);
      } else {
        //Simulatte Reject
        reject(new Error("failed to load data"));
      }
    }, 2000);
  });
}

fetchdata()
.then((response)=>{console.log(response.message)})
.catch((error)=>{console.log(error.message)})

async function d() {
  try {
    const data = fetchdata();
    console.log(data.message);
  } catch (error) {
    console.log(error.message);
  }
}
d();


async function StoreData() {
  try {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const d = await response.json();
    console.log(d);
  } catch (error) {
    console.log(error.message);
  }
}
StoreData();


const a = async () => {
  await fetch("https://fakestoreapi.com/products/1")
    .then(async (res) => {await res.json()})
    .then((d) => {console.log(d)})
    .catch(() => {console.log(error.message) });
};
a();
