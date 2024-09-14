const clear = document.querySelector(".clear");
    clear.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText = " ";
});
// numbers (only replace .display class's innerText with a different string)
const button7 = document.querySelector(".seven");
button7.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "7"
});

const button8 = document.querySelector(".eight");
button8.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "8"
});

const button9 = document.querySelector(".nine");
button9.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "9"
});

const button4 = document.querySelector(".four");
button4.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "4"
});

const button5 = document.querySelector(".five");
button5.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "5"
});

const button6 = document.querySelector(".six");
button6.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "6"
});

const button1 = document.querySelector(".one");
button1.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "1"
});

const button2 = document.querySelector(".two");
button2.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "2"
});

const button3 = document.querySelector(".three");
button3.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "3"
});

const button0 = document.querySelector(".zero");
button0.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "0"
});
// operations (only replace .display class's innerText with a different string)
const buttonDivision = document.querySelector(".division");
buttonDivision.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "/"
});

const buttonMultiplication = document.querySelector(".multiplication");
buttonMultiplication.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "*"
});

const buttonSubstraction = document.querySelector(".substraction");
buttonSubstraction.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "-"
});

const buttonAddition = document.querySelector(".addition");
buttonAddition.addEventListener("click", function () {
    let x = document.querySelector (".display");
    x.innerText += "+"
});

const back = document.querySelector(".back");
back.addEventListener("click", function () {
    let x = document.querySelector(".display");
    x.innerText = x.innerText.toString().slice(0, -1)
});

const buttonEqual = document.querySelector(".equal");
buttonEqual.addEventListener("click", function () {
    let x = document.querySelector (".display");
    let result = Function("return " + x.innerText)();
    x.innerText = result
});

/*
NOTE: Equal operation (only these 2 actually replace -.display- class's innerText with FUNCTIONS) all operations are actually performed when hitting equal because the strings above these of + - / * are mere user inputs that Function() automatically calculates. Yes, it calculates STRING INPUTS DIRECTLY, no need for them to be numbers, hence the reason why I used this solution. 
Otherwise since .addEventListener ALWAYS returns a -String- even if it's a -Number-, you have to convert all DOM strings here in the .JS to numbers with these solutions, again I avoided this step alltogether by using Function() or eval():


- SOLUTION 1 
+"5" ---> turns string to number

- SOLUTION 2
Number.parseInt("5") ---> turns string to number


eval() achieves the same result as using Function(), but since I read it's a security risk in node.js, I ended up searching for the Function() alternative:

x.innerText = eval(x.innerText)
*/