btn1 = document.getElementById('percentage1');
btn2 = document.getElementById('percentage2');

btn1.addEventListener('click', calculate1);
btn2.addEventListener('click', calculate2);

function calculate1() {
    let percent = document.getElementById('percent').value;
    let num = document.getElementById('num').value;
    document.getElementById('value1').value = (num / 100) * percent;
}


function calculate2() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    document.getElementById('value2').value = (num1 * 100) / num2 + '%';
}