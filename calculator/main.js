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
     let newvalue = [nums]; 
     let array = nums.split("");
     let todo = [];
     todo = array.findIndex((item) => {
          if(item == "+") {
             return this.addup(newvalue)
          }else if(item == "-") {
             return this.subtraction(newvalue)
          }else if(item == "x") {
             return this.multiply(newvalue)
          }else if(item == "÷") {
             return this.divide(newvalue);
          }else {
             return false
          }
     })
   };
   addup(newvalue, showresult) {
      let backtostring = newvalue.toString();
      let removetask = backtostring.split("+");
      let finalvalues = [];
      finalvalues = removetask.map((item) => Number(item));
      let n1 = finalvalues[0];
      let n2 = finalvalues[1];
      let s = n1 + n2;
     document.querySelector('#showresult').value= s;
     document.querySelector('#showinc').style.color="gray";
     document.querySelector('#showinc').style.fontSize="large";
   };
   subtraction(newvalue) {
      let backtostring = newvalue.toString();
      let removetask = backtostring.split("-");
      let finalvalues = removetask.map((item) => Number(item));
      let n1 = finalvalues[0];
      let n2 = finalvalues[1];
      let s = n1 - n2;
      if(s == parseFloat) {
         s.toFixed(2);
      }
      document.querySelector('#showresult').value = s;
      document.querySelector('#showinc').style.fontSize= 'large';
      document.querySelector('#showinc').style.color= 'gray';
   };
   multiply(newvalue) {
      let backtostring = newvalue.toString();
      let removetask = backtostring.split("x")
      let finalvalues = [];
      finalvalues = removetask.map((item) => Number(item))
      let n1 = finalvalues[0];
      let n2 = finalvalues[1];
      let s = n1 * n2;
      if(s == parseFloat) {
         s.toFixed(2);
      }
      document.querySelector('#showresult').value = s;
      document.querySelector('#showinc').style.fontSize= 'large';
      document.querySelector('#showinc').style.color= 'gray';
   };
   divide(newvalue) {
    let backtostring = newvalue.toString();
    let removetask = backtostring.split("÷");
    let finalvalues = [];
    finalvalues = removetask.map((item) => Number(item));
    let n1 = finalvalues[0];
    let n2 = finalvalues[1];
    let s = n1 / n2;
    if(s == parseFloat) {
       s.toFixed(2);
    }
    document.querySelector('#showresult').value = s;
    document.querySelector('#showinc').style.fontSize= 'large';
    document.querySelector('#showinc').style.color= 'gray';
   };
   cleaninput() {
    document.querySelector('#showinc').value='';
    document.querySelector('#showresult').value='';
    document.querySelector('#showinc').style.color='white';
    document.querySelector('#showinc').style.fontSize='xx-large';
};
};
var Calculator = new calculator;
