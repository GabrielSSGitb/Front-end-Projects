class calculator {
   load() {
      document.querySelector('#showinc').focus();
     window.addEventListener('resize', this.screensize);
   }; 
  screensize() {
     var screenwidth = window.innerWidth;
     if(screenwidth == 375) {
      document.querySelector("#formobile").innerHTML= 'Calculator';
      document.querySelector('#title').style.display= 'none';
      window.document.body.style.background= 'black';
     }else if(screenwidth > 375) {
      document.querySelector("#formobile").innerHTML= '';
      document.querySelector('#title').style.display= 'block';
      window.document.body.style.background= ' black linear-gradient(to top, purple, blue) center center no-repeat fixed';
      window.document.body.style.backgroundSize= 'cover';
   }
  };
   insert(num)  {
     var number = document.querySelector('#showinc').value;
     document.querySelector('#showinc').value= number + num;
   };
   calculate() {
      /*
      .array = I used to find the symbol:(+,-,/,X);
      .newvalue = to use split() twice and remove the symbol to calculate.
      */
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
      var n1 = finalvalues[0];
      var n2 = finalvalues[1];
      var s = n1 + n2;
      return this.verify(s)
   };
   subtraction(newvalue) {
      let backtostring = newvalue.toString();
      let removetask = backtostring.split("-");
      let finalvalues = removetask.map((item) => Number(item));
      let n1 = finalvalues[0];
      let n2 = finalvalues[1];
      let s = Math.abs(n1 - n2);
      return this.verify(s)
   };
   multiply(newvalue) {
      let backtostring = newvalue.toString();
      let removetask = backtostring.split("x")
      let finalvalues = [];
      finalvalues = removetask.map((item) => Number(item))
      let n1 = finalvalues[0];
      let n2 = finalvalues[1];
      let s = n1 * n2;
      return this.verify(s)
   };
   divide(newvalue) {
    let backtostring = newvalue.toString();
    let removetask = backtostring.split("÷");
    let finalvalues = [];
    finalvalues = removetask.map((item) => Number(item));
    let n1 = finalvalues[0];
    let n2 = finalvalues[1];
    let s = n1 / n2;
    return this.verify(s)
   };
   verify(s) {
      if(s >= 1000) {
         s = s.toLocaleString();
         document.querySelector("#showresult").value= s;
         document.querySelector("#showinc").style.color='gray';
         document.querySelector("#showinc").style.fontSize='large';
      }else if(Number.isInteger(s)) {
         document.querySelector("#showresult").value= s;
         document.querySelector("#showinc").style.color='gray';
         document.querySelector("#showinc").style.fontSize='large';
      }else if(Number(s) != Number.isInteger(s)) {
         s = s.toFixed(2);
         document.querySelector("#showresult").value= s;
         document.querySelector("#showinc").style.color='gray';
         document.querySelector("#showinc").style.fontSize='large';
      }
   }
   cleaninput() {
    document.querySelector('#showinc').value='';
    document.querySelector('#showresult').value='';
    document.querySelector('#showinc').style.color='white';
    document.querySelector('#showinc').style.fontSize='xx-large';
};
};
var Calculator = new calculator;
