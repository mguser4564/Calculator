const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const point = document.getElementById('point');

const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const equals = document.getElementById('equal')
const allclear = document.getElementById('allclear');
const clear = document.getElementById('clear');

const display = document.getElementById('displayText');

let inputOne = '';
let inputTwo = '';
let operator = '';
let result = ''
let operatorSelected = false;
let fatalError = false;
let equalsPressed = false;

function numberKeypad() {
    one.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "1"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "1"
            Display();}
        } else {
            inputTwo += "1"
            Display();
        }
    })
    two.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "2"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "2"
            Display();}
        } else {
            inputTwo += "2"
            Display();
        }
    })
    three.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "3"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "3"
            Display();}
        } else {
            inputTwo += "3"
            Display();
        }
    })
    four.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "4"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "4"
            Display();}
        } else {
            inputTwo += "4"
            Display();
        }
    })
    five.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "5"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "5"
            Display();}
        } else {
            inputTwo += "5"
            Display();
        }
    })
    six.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "6"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "6"
            Display();}
        } else {
            inputTwo += "6"
            Display();
        }
    })
    seven.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "7"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "7"
            Display();}
        } else {
            inputTwo += "7"
            Display();
        }
    })
    eight.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "8"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "8"
            Display();}
        } else {
            inputTwo += "8"
            Display();
        }
    })
    nine.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "9"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "9"
            Display();}
        } else {
            inputTwo += "9"
            Display();
        }
    })
    zero.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne += "0"
                equalsPressed = false;
                Display();
            } else {
            inputOne += "0"
            Display();}
        } else {
            inputTwo += "0"
            Display();
        }
    })
    point.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                inputOne = ''
                inputOne = addDecimal(inputOne);
                equalsPressed = false;
                Display();
            } else {
            inputOne = addDecimal(inputOne);
            Display();}
        } else {
            inputTwo = addDecimal(inputTwo);
            Display();
        }
    })
};

function deleteKey(){
    clear.addEventListener('click', () => {
        if (operatorSelected == false) {
            if (equalsPressed === true){
                //inputOne = ''
                inputOne = deleteInput(inputOne);
                equalsPressed = false;
                Display();
            } else {
            inputOne = deleteInput(inputOne);
            Display();}
        } else if (operatorSelected == true && inputTwo == '') {
            // do nothing
        } else if (operatorSelected == true) {
            inputTwo = deleteInput(inputTwo);
            Display();
        }
    })
}

function deleteInput(input) {
    let deleteChar = input.toString()
    return deleteChar.slice(0, -1);
    
}

function addDecimal(input) {
    if (input.toString().includes('.')) {
    } else {
      input += ".";
    }
    return input;
  }

function operatorKeypad() {
    add.addEventListener('click',  () => {
        // Runs an error in case the user presses an operator without entering anything
        // Calc is ready to use as user starts typing in numbers after the ERROR
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
            inputOne = '';
            inputTwo = '';
            operator = '';
            result = '';
            operatorSelected = false;
            fatalError = false;
            equalsPressed = false;
        // This conditional is for chaining operations together, example 12 + 7 - 5 * 3 = should yield 42
        } else if (operator != "+" && operator != '' && inputTwo != '') {
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            if (fatalError === false) {
                operator = "+"
            } else if (fatalError === true) {
                operator = "";
                fatalError = false;
            }
        } else if (inputOne != '' && inputTwo != '') {
            operator = "+"
            operatorSelected = true;
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "+"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
            }
            else if (operatorSelected === true) {
                operator = "+"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
                Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            }
        }

    })
    subtract.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
            inputOne = '';
            inputTwo = '';
            operator = '';
            result = '';
            operatorSelected = false;
            fatalError = false;
            equalsPressed = false;
        } else if (operator != "-" && operator != '' && inputTwo != '') {
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            if (fatalError === false) {
                operator = "-"
            } else if (fatalError === true) {
                operator = "";
                fatalError = false;
            }
        } else if (inputOne != '' && inputTwo != '') {
            operator = "-"
            operatorSelected = true;
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "-"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
            }
            else if (operatorSelected === true) {
                operator = "-"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
                Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            }
        }
    })
    multiply.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
            inputOne = '';
            inputTwo = '';
            operator = '';
            result = '';
            operatorSelected = false;
            fatalError = false;
            equalsPressed = false;
        } else if (operator != "*" && operator != '' && inputTwo != '') {
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            if (fatalError === false) {
                operator = "*"
            } else if (fatalError === true) {
                operator = "";
                fatalError = false;
            }
        } else if (inputOne != '' && inputTwo != '') {
            operator = "*"
            operatorSelected = true;
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "*"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
            }
            else if (operatorSelected === true) {
                operator = "*"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
                Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            }
        }
    })
    divide.addEventListener('click', () => {
        if (inputOne === '') {
            display.innerHTML = `ERROR`;
            inputOne = '';
            inputTwo = '';
            operator = '';
            result = '';
            operatorSelected = false;
            fatalError = false;
            equalsPressed = false;
        } else if (operator != "/" && operator != '' && inputTwo != '') {
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            if (fatalError === false) {
                operator = "/"
            } else if (fatalError === true) {
                operator = "";
                fatalError = false;
            }
        } else if (inputOne != '' && inputTwo != '') {
            operator = "/"
            operatorSelected = true;
            blinkDisplay();
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
        } else {
            if (operatorSelected === false) {
                operator = "/"
                operatorSelected = true;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
            }
            else if (operatorSelected === true) {
                operator = "/"
                operatorSelected = false;
                display.innerHTML = `${inputOne}`;
                blinkDisplay();
                Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            }
        }
    })
};

function getEquals() {
    equals.addEventListener('click', () => {

        if (operator == '') {

        } else if (inputTwo === '') {
            inputTwo = inputOne
            Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            operatorSelected = false;
            operator = '';
            equalsPressed = true;
        } else {
            let operationSuccessful = Operate(operator, parseFloat(inputOne, 10), parseFloat(inputTwo, 10));
            if (operationSuccessful) {
                operatorSelected = false;
                operator = '';
                equalsPressed = true;
            } else {
                //do nothing
            }
        }
    })
}

function Add(num1, num2) {
    result = num1 + num2;
    inputOne = result;
    display.innerHTML = `${inputOne}`;
    bounceDisplay();
    inputTwo = '';
};

function Subtract(num1, num2) {
    result = num1 - num2;
    inputOne = result;
    display.innerHTML = `${inputOne}`;
    bounceDisplay();
    inputTwo = '';
};

function Multiply(num1, num2) {
    result = num1 * num2;
    inputOne = result;
    display.innerHTML = `${inputOne}`;
    bounceDisplay();
    inputTwo = '';
};

function Divide(num1, num2) {
    if (num1 === 0 || num2 === 0) {
        display.innerHTML = `ERROR`;
        bounceDisplay();
        inputOne = '';
        inputTwo = '';
        operator = '';
        result = '';
        operatorSelected = false;
        fatalError = true;
    } else {
        result = num1 / num2;
        inputOne = result
        display.innerHTML = `${inputOne}`;
        bounceDisplay();
        inputTwo = '';
    }
};

function Operate(op, num1, num2) {
    if (isNaN(num2)) {
        display.innerHTML = `ERROR`;
        inputOne = '';
        inputTwo = '';
        operator = '';
        result = '';
        operatorSelected = false;
        fatalError = false;
        equalsPressed = false;
    } else {
        if (op === "+") {
            Add(num1, num2);
        } else if (op === "-") {
            Subtract(num1, num2);
        } else if (op === "*") {
            Multiply(num1, num2);
        } else if (op === "/") {
            if (num1 === 0 || num2 === 0) {
                display.innerHTML = `ERROR`;
                inputOne = '';
                inputTwo = '';
                operator = '';
                result = '';
                operatorSelected = false;
                fatalError = true;
                equalsPressed = false;
                return false;
            } else {
                Divide(num1, num2);
            }
        }
    }
    return true;
};

function Display() {
    if (operatorSelected === false) {
        display.innerHTML = `${inputOne}`;
    } else if (operatorSelected === true) {
        display.innerHTML = `${inputTwo}`;
    }
};

function clearDisplay() {
    allclear.addEventListener('click', () => {
        display.innerHTML = '';
        inputOne = '';
        inputTwo = '';
        operator = '';
        result = '';
        operatorSelected = false;
        fatalError = false;
        equalsPressed = false;
    })
};

function bounceDisplay() {
    display.classList.add('bounce');
    setTimeout(() => {
        display.classList.remove('bounce');
    }, 500);
}

function blinkDisplay() {
    display.classList.add("blink");
    setTimeout(() => display.classList.remove("blink"), 500);
  }

numberKeypad();
operatorKeypad();
getEquals();
clearDisplay();
deleteKey();