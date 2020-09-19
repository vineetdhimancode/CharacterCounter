const str = document.querySelector('#string');
const result = document.querySelector('.result');
str.addEventListener('paste', eventFunction);
str.addEventListener('keypress', eventFunction);
// str.addEventListener('keyup', eventFunction);
str.addEventListener('keydown', eventFunction);
str.addEventListener('cut', eventFunction);
str.addEventListener('change', eventFunction);


function eventFunction() {
    // alert(e.target.value);
    let strValue = '';
    setTimeout(function() {
        strValue = str.value.trim();
        let charCount = strValue.length;
        showMsg(charCount);
    }, 1);
}


function showMsg(charCount) {
    if (charCount >= 120) {
        result.classList.add('text-danger');
        result.classList.remove('text-success');
        result.innerHTML = `Hey Prabhu! ${charCount} characters, You should fix it!`;
    } else if (charCount <= 0) {
        result.classList.add('text-danger');
        result.classList.remove('text-success');
        result.innerHTML = `Khali field hai Bro!`;
    } else {
        result.classList.add('text-success');
        result.classList.remove('text-danger');
        result.innerHTML = `Wallah! ${charCount} characters, You did a great job!`;
    }
}