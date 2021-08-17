//Number
const numbers = document.getElementsByClassName("number");
const numberValues = numbers.innerText;
const currentField = document.getElementById("current-operands");
currentField.innerText = "";
const previousField = document.getElementById("previous-operands");
for (const number of numbers) {
  number.addEventListener("click", function () {
    const currentFieldText = currentField.innerText;
    currentField.innerText = currentFieldText + number.innerText;
    currentField.innerText = Number(currentField.innerText);
  });
}
let operation;
//equal
const equal = document.getElementById("equal");
const equalValue = equal.innerText;
equal.addEventListener("click", function () {
  if (operation == "addition") {
    currentField.innerText =
      Number(previousField.innerText) + Number(currentField.innerText);
  } else if (operation == "subtraction") {
    currentField.innerText =
      Number(previousField.innerText) - Number(currentField.innerText);
  } else if (operation == "multiplication") {
    currentField.innerText =
      Number(previousField.innerText) * Number(currentField.innerText);
  } else if (operation == "division") {
    currentField.innerText =
      Number(previousField.innerText) / Number(currentField.innerText);
  }
  previousField.innerText = "";
});

//Operators
previousField.innerText = 1;
previousField.style.visibility = "hidden";
const operators = document.getElementsByClassName("operator");
const operatorValues = operators.innerText;

for (const operator of operators) {
  operator.addEventListener("click", function () {
    let currentFieldNumber = Number(currentField.innerText);
    currentField.innerText = "";
    if (operator.innerText == "+") {
      operation = "addition";
      currentFieldNumber = Number(previousField.innerText) + currentFieldNumber;
      previousField.innerText = 0;
      previousField.style.visibility = "visible";
    } else if (operator.innerText == "-") {
      operation = "subtraction";
      currentFieldNumber = currentFieldNumber - Number(previousField.innerText);
      previousField.innerText = 0;
      previousField.style.visibility = "visible";
    } else if (operator.innerText == "*") {
      operation = "multiplication";
      previousField.style.visibility = "visible";
      currentFieldNumber = Number(previousField.innerText) * currentFieldNumber;
    } else if (operator.innerText == "÷") {
      operation = "division";
      previousField.style.visibility = "visible";
      currentFieldNumber = Number(previousField.innerText) / currentFieldNumber;
    }
    previousField.innerText = currentFieldNumber;
  });
}

//dot
const dot = document.getElementById("dot");
dot.addEventListener("click", function () {
  dot.setAttribute("disabled", true);
});
//Equal

document.getElementById("all-clear").addEventListener("click", function () {
  previousField.innerText = "";
  currentField.innerText = "";
  previousField.innerText = 1;
  previousField.style.visibility = "hidden";
});
document.getElementById("delete").addEventListener("click", function () {
  const text = currentField.innerText;
  const editedText = text.slice(0, -1);
  currentField.innerText = editedText;
});
