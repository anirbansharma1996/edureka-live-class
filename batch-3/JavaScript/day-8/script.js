

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());

function Clock() {
  setInterval(() => {
    const date = new Date();
    let hr = date.getHours();
    let state ="AM"
    const min = date.getMinutes();
    const sec = date.getSeconds();

    if(hr > 12 ){
      hr = hr-12
      state ="PM"
    }
    console.log(`Time is : ${hr}${state}:${min}min:${sec}secs `)
  }, 1000);
}
Clock();
