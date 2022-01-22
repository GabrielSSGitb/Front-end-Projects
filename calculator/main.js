class calculator {
   load() {
      document.querySelector('#showinc').focus();
   };
   insert(num) {
     var number = document.querySelector('#showinc').value;
     document.querySelector('#showinc').value= number + num;
   };
   calculate() {
     let nums = document.querySelector('#showinc').value;
     let array = nums.split("");
     let values = array.findIndex((item) => {
        if(item == "+") {
           return this.addup(array)
        }else if(item == "-") {
           return this.subtraction(array)
        }else {
           return false
        }
     })
     console.log(array);
   };
   addup(array) {
     console.log('+')
   };
   subtraction(array) {
      console.log('-')
   }
   cleaninput() {
    document.querySelector('#showinc').value='';
    document.querySelector('#showresult').value='';
    document.querySelector('#showinc').focus();
    document.querySelector('#showinc').style.color='white';
    document.querySelector('#showinc').style.fontSize='xx-large';
};
};
var Calculator = new calculator;
/*cleaninput() {
    document.querySelector('#showinc').value='';
    document.querySelector('#showresult').value='';
    document.querySelector('#showinc').focus();
    document.querySelector('#showinc').style.color='white';
    document.querySelector('#showinc').style.fontSize='xx-large';
};*/
/*function removemsg() {
   document.querySelector('#msg').style.display='none';
   document.querySelector('#calculatorbox').style.display='block';
};*/