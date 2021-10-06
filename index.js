//boiler plate express code to acquire and use it + 
//adding html webpage + 
//listening out for requests
const express = require("express");
const app = express();
const port = 3000;



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static('public'));

app.listen(port, () => {console.log(`Listening out for port : ${port}`)})

app.get('/birthday', (req, res) => {
    const {name, birthday} = req.query;

    res.send(`hello ${name} your birthday is ${birthday}`)
})


function calculate(a, operator, b){
    let num1 = Number(a)
    let num2 = Number(b)


    if (operator === "add"){
        return num1 + num2;
    } else if (operator === "sub"){
        return num1 - num2;
    } else if (operator === "multi"){
        return num1 * num2;
    } else if (operator === "div"){
        return num1 / num2;
    } else {
        return "no operator was selected";
    }
}

app.get('/calculator', (req, res) => {
    let firstNumber = req.query.firstNumber;
    let operator = req.query.operator;
    let secondNumber = req.query.secondNumber;

    let result = calculate(firstNumber, operator, secondNumber);

    res.send(`<h2>result = ${result}</h2>`);
})

app.post('/compute', (req, res) => {
    let firstNumber = req.body.firstNumber;
    let operator = req.body.operator;
    let secondNumber = req.body.secondNumber;

    let response = {
        operation: `${firstNumber} ${operator} ${secondNumber}`,
        result: calculate(firstNumber, operator, secondNumber)
    }
    
    res.json(response);
})