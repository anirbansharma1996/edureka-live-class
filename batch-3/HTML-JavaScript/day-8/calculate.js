//JS

const display = document.getElementById("display");

function Clear() {
  display.value = "";
}

function Calculate(value) {
  display.value += value; 
}

function Result() {
  if (display.value) {
    display.value = eval(display.value);
  } else {
    display.value = "Error";
  }
}


// HTML
  <body>
    <div class="calculator">
      <input id="display" type="text" readonly />
      <div class="keyboard">
        <button class="clear" onclick="Clear()">C</button>
        <button onclick="Calculate('%')">%</button>
        <button onclick="Calculate('/')">/</button>
        <button onclick="Calculate('*')">X</button>
        <button onclick="Calculate('7')">7</button>
        <button onclick="Calculate('8')">8</button>
        <button onclick="Calculate('9')">9</button>
        <button onclick="Calculate('-')">-</button>
        <button onclick="Calculate('4')">4</button>
        <button onclick="Calculate('5')">5</button>
        <button onclick="Calculate('6')">6</button>
        <button onclick="Calculate('+')">+</button>
        <button onclick="Calculate('1')">1</button>
        <button onclick="Calculate('2')">2</button>
        <button onclick="Calculate('3')">3</button>
        <button onclick="Result()">=</button>
        <button class="invisible"></button>
        <button onclick="Calculate('0')">0</button>
        <button onclick="Calculate('.')">.</button>
        <button class="invisible"></button>
      </div>
    </div>

    <script src="./calculate.js"></script>
  </body>

// CSS
// .calculator {
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//   width: 10%;
//   padding: 10px;
//   border-radius: 10px;
//   position: absolute;
//   left: 30%;
//   top: 30%;
// }
// .keyboard {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: auto;
//   gap: 2px;
// }
// .invisible {
//   visibility: hidden;
// }
// input {
//   padding: 10px;
//   width: 86%;
//   margin-bottom: 3px;
// }
// button {
//   border: 0;
//   padding: 5px;
//   border-radius: 10px;
// }
// .clear {
//   background-color: orangered;
//   color: white;
// }

// @media (max-width: 786px) {
//   .calculator {
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
//     width: 35%;
//     padding: 10px;
//     border-radius: 10px;
//     position: absolute;
//     left: 30%;
//     top: 30%;
//   }
// }
