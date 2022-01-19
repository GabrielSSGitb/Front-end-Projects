function carregar() {
   /* document.querySelector('#calculatorbox').style.display='none';*/
    var limpar = document.getElementById('clear');
    document.querySelector('#showinc').focus();
    document.querySelector('#equal').addEventListener('click', calculate)
    limpar.addEventListener('click', cleaninput)
};
function insert(num) {
    var number = document.querySelector('#showinc').value;
    document.querySelector('#showinc').value= number + num;
};
function calculate() {
    var number = document.querySelector('#showinc').value;
    var showresult = document.querySelector('#showresult').value;
    var array = number.split("");
    var pos = [];
    var todo = [];
    pos = array.findIndex((item) => {
        if(item == "+" || item == "-" || item == "x" || item == "÷") {
            return true
        }else {
            return false
        }
    })
    todo = array.find((item) => {
        if(item == "+") {
            return addup(array, pos)
        }else if(item == "-") {
            return subtraction()
        }else if(item == "x") {
            return multiply()
        }else {
            return false
        }
    })
    console.log(array);
    console.log(pos);
};
function addup(array, pos) {
 /* array.splice(pos, 1);
  let nums = array.map((item) => parseInt(item))*/
 
};
function subtraction() {
    console.log('subtraction');
};
function multiply() {
    console.log('multiplying');
};
function divide() {
    console.log('divide');
};
function cleaninput() {
    document.querySelector('#showinc').value='';
    document.querySelector('#showresult').value='';
    document.querySelector('#showinc').focus();
    document.querySelector('#showinc').style.color='white';
    document.querySelector('#showinc').style.fontSize='xx-large';
};
/*function removemsg() {
   document.querySelector('#msg').style.display='none';
   document.querySelector('#calculatorbox').style.display='block';
};*/