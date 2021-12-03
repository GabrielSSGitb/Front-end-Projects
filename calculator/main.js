function carregar() {
    document.querySelector('#showinc').focus();
}
function insert(num) {
    var number = document.querySelector('#showinc').value;
    document.querySelector('#showinc').value= number + num;
};
function calculate() {
    var number = document.querySelector('#showinc');
    var values = number.value;
    var array = values.split("");
    if(array[1] == '+') {
        let n1 = Number(array[0]);
        let n2 = Number(array[2]);
        let convertido1 = parseInt(n1);
        let convertido2 = parseInt(n2);
        // Calculating:
        let s = n1 + n2;
        document.querySelector('#showresult').value= s;
    }else if(array[1] == 'x') {
       let n1m = Number(array[0]);
       let n2m = Number(array[2]);
       let convertemulti1 = parseInt(n1m);
       let convertimulti2 = parseInt(n2m);
       let sm = n1m * n2m;
       document.querySelector('#showresult').value= sm;
    }
    
};
