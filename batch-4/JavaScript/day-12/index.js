const p1 = {
    f:"Anirban",
    l:"Sharma"
}
const p2 = {
    f:"Pritam",
    l:"Saha"
}
function FullNameC(greet){

    console.log(`${greet} - ${this.f} - ${this.l}`)
}

FullNameC.call(p1,'hi')
FullNameC.call(p2,'hello')

//--------------------
function FullNameA(greet,adj){
    console.log(`${greet} - ${adj} - ${this.f} - ${this.l}`)
}
FullNameA.apply(p1,["hi","boss"])
FullNameA.apply(p2,["hi","there"])
//---------------------
function FullNameB(greet){
  {}
    console.log(`${greet} - ${this.f} - ${this.l}`)
}
const f1 = FullNameB.bind(p1)
const f2 = FullNameB.bind(p2)

let g = ['hey','hello','bye']

for(let i=0;i<g.length;i++){
    if(g[i] !== 'hello') f1(g[i])
    else f2(g[i])
}

// :::::::::::::::: DEBOUNCE ::::::::::::::::::::::

const search = document.getElementById("search");

function debounce(fn, delay) {
  let id = null;
  return (txt) => {
    clearTimeout(id);
    id = setTimeout(() => {
      fn(txt);
    }, delay);
  };
}

const debounceFN = debounce(Print, 800);

search.addEventListener("input", (e) => {
  debounceFN(e.target.value);
});

function Print(txt) {
  console.log(txt);
}

// :::::::::::::::: THROTTLE ::::::::::::::::::::::



function throttle(fn, delay) {
  let id = null;
  return () => {
    if (!id) {
      id = setTimeout(() => {
        fn();
        clearTimeout(id);
        id = null;
      }, delay);
    }
  };
}
const throttleFN = throttle(ScrollToPrint, 800);

document.addEventListener("scroll", () => {
  throttleFN();
});

let count = 0;
function ScrollToPrint() {
  count += 1;
  console.log("scrolled ->", count);
}

