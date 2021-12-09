function carregar() {
    document.querySelector('#showinc').focus();
}
function insert(num) {
    var number = document.querySelector('#showinc').value;
    document.querySelector('#showinc').value= number + num;
};
function calculate() {
    var number = document.querySelector('#showinc');
    var showresult = document.querySelector('#showresult').value;
    var values = number.value;
    var array = values.split("");
    console.log(array);
    if(array[1] == '+') {
        let n1 = Number(array[0]);
        let n2 = Number(array[2]);
        // Calculating:
        let s = n1 + n2;
        document.querySelector('#showresult').value= `=${s}`;
        number.style.color= 'rgb(182, 182, 182)';
        number.style.fontSize= 'large';
    }else if(array[1] == 'x') {
       let n1m = Number(array[0]);
       let n2m = Number(array[2]);
       let sm = n1m * n2m;
       document.querySelector('#showresult').value= `=${sm}`;
       number.style.color= 'rgb(182, 182, 182)';
       number.style.fontSize= 'large';
    }else if(array[1] == '÷') {
        let n1d = Number(array[0]); 
        let n2d = Number(array[2]);
        let sd = n1d / n2d;
        let removefloat = sd.toFixed(2);
        document.querySelector('#showresult').value= `=${removefloat}`;
    }else if(array[1] == '-') {
        let n1s = Number(array[0]);
        let n2s = Number(array[2]);
        let ss = n1s - n2s;
        document.querySelector('#showresult').value= `=${ss}`;
        number.style.color= 'rgb(182, 182, 182)';
        number.style.fontSize= 'large';
    }
    
};
