let displayScreen = document.querySelector("#screen");
let displayResult = 0;
let decimalResult =0;
let firstOperand = 0;
let secondOperand = 0;
let operator = "";
let decimalCount = 0;

displayOutput(0);


// Entering Operands
let numPressed = document.querySelectorAll(".numbers")
numPressed.forEach(element =>{
    element.addEventListener("click", ()=>{
        
        if(element.value == "decimal" && decimalCount == 0){
            enterDecimal();
            return;
        } else if(element.value == "decimal"){
            return;
        } else
            enterNumber(+element.value);
        if(decimalCount!=0)
            decimalCount++;
    })
})

//Entering Operators
let operatorPressed = document.querySelectorAll(".operator")
operatorPressed.forEach(element => {
    element.addEventListener("click", ()=>{
        if( displayResult != 0 && typeof(displayResult) == "number"){
            firstOperand = displayResult;
            displayResult = 0;
        } else {
            
        } 
        



    })
})


// displays the screen
function displayOutput(Result){
    displayScreen.innerHTML = Result;    
}

// document.addEventListener("click", ()=>{

// })


// if entering numbers (operand)



//  Does the operation on two numbers
function operation(num1, operator, num2){
    if (operator == "+")
        displayResult = num1+num2;
    else if (operator == "-")
        displayResult = num1-num2;
    else if (operator == "*")
        displayResult = num1*num2;
    else if (operator == "/")
        displayResult = num1/num2;
    else
        displayResult = "ERROR";

    firstOperand = num1;
    displayOutput(displayResult);
}

//if % is pressed
function percentage(number){
    displayResult = number/100;
}

//if a number is pressed
function enterNumber(newNumber){
    displayResult *= 10;
    displayResult += newNumber;

    if(decimalCount != 0){
        decimalResult = displayResult / (Math.pow(10,decimalCount));
        displayOutput(decimalResult);
        return;
    }
    displayOutput(displayResult);
}
//if decimal(.) is pressed
function enterDecimal(){
    displayScreen.innerHTML = `${displayResult}.`;
    decimalCount++;
}

//Clears Screen and resets all value
function clearDisplay(){
    firstOperand = 0;
    secondOperand = 0;
    operator = "";
    displayResult = 0;
    displayOutput(displayResult);
    decimalCount = 0;
}

