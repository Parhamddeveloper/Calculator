let RunningTotal = 0;
let Buffer = "0";
let PreviousOperator;

let Screen = document.querySelector('section')

function BTNClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    }
    else {
        handleNumber(value)
    }
    Screen.innerText = Buffer;
}

function handleSymbol(Symbol) {
    switch (Symbol) {
        case 'C':
            Buffer = '0';
            RunningTotal = 0;
            break;
        case '=':
            if (PreviousOperator === null) {
                return
            }
            flushOperation(parseInt(Buffer));
            PreviousOperator = null;
            Buffer = RunningTotal;
            RunningTotal = 0;
            break;
        case '←':
            if (Buffer.length === 1) {
                Buffer = '0';
            }
            else {
                Buffer.length = Buffer.length - 1
            }
            break;
        case '%':
        case '+':
        case '-':
        case '×':
        case '÷':
            HandleMath(Symbol);
            break;
    }
}
function HandleMath(Symbol) {
    if (Buffer === '0') {
        return;
    }

    const intBuffer = parseInt(Buffer);

    if (RunningTotal === 0) {
        RunningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }
    PreviousOperator = Symbol;
    Buffer = "0";
}

function flushOperation(intBuffer) {
    if (PreviousOperator === '+') {
        RunningTotal += intBuffer;
    }
    else if (PreviousOperator === '-') {
        RunningTotal -= intBuffer;
    }
    else if (PreviousOperator === '×') {
        RunningTotal *= intBuffer;
    }
    else if (PreviousOperator === '÷') {
        RunningTotal /= intBuffer;
    }
    else if(PreviousOperator === '%'){
        RunningTotal %= intBuffer;
    }
}
function handleNumber(numberString) {
    if (Buffer === "0") {
        Buffer = numberString;
    }
    else {
        Buffer += numberString;
    }
}

function init() {
    document.querySelector('.BTNS').addEventListener('click', function (event) {
        BTNClick(event.target.innerText);

    })
}

init();

//Theme Section
let ThemeBtn = document.querySelector('.ThemeBtn')
let ThemeSelectorDiv = document.querySelector('.ThemeSelector')
ThemeBtn.addEventListener('click', function(){
    if(ThemeSelectorDiv.classList.contains('Invisible')){
    ThemeSelectorDiv.classList.remove('Invisible','Anim2')
    ThemeSelectorDiv.classList.add('Anim1')
    }
    else{
        ThemeSelectorDiv.classList.add('Invisible', 'Anim2')
        ThemeSelectorDiv.classList.remove('Anim1')
    }
})