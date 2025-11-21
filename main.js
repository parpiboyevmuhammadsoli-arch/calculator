const buttons = document.querySelectorAll('button');
let primaryOperator = '';
let secondaryOperand = '';
let operand = '';
let operand2 = '';
let savedOperator = '';
let results = '';
let operator = '';

getPrimaryOperand();
console.log(results);

function calculateNumber(primaryOperand, operator, secondaryOperand) {
    results = eval(primaryOperand + operator + secondaryOperand);
    return results;
}

function savedOperator(operator) {
    savedOperator = operand;
    return savedOperator
}

function getPrimaryOperand() {
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {

            let operand = e.target.textContent;

            if (operand !== "0" && operand !== "+" && operand !== "-" && operand !== "X" && operand !== "=" && operand !== "C") {
                primaryOperand += operand;
                console.log(primaryOperand);

            } else if (operand === "+" || operand === "-" || operand === "X" || operand === "/" || operand === "=") {
                operator = operand;
                getSecondaryOperand(operator);
            }

        });
    });
}


    function getSecondaryOperand(operator) {
        button.forEach(function(button){
            button.addEventListener('click', function(e){

                operand2 = e.target.textContent

                if (operand2 !== "0" && operand2 !== "+" && operand2 !== "-" && operand2 !== "X" && operand2 !== "/" && operand2 !== "C") {
                    secondaryOperand  += e.target.textContent;
                    console.log(secondaryOperand);
                    
                } else if (operand === "="){
                    calculateNumber(primaryOperand, operator, secondaryOperand)
                }
            })
        })
    }