let screenValue='0';
let historyValue='0';
const regex = /^\s*\d+(\.\d+)?\s*([-+*/])\s*\d+(\.\d+)?\s*$/;
const timeDesign = document.getElementById('toggle');
const content = document.getElementById('content');

timeDesign.addEventListener('click', function() {
    content.classList.toggle('night_mode')
});

function updateScreen() {
    document.getElementById('screen').textContent=screenValue;
}

function updateHistory() {
    document.getElementById('history').textContent=historyValue;
}

function clearScreen() {
    screenValue='0';
    updateScreen();
}

function clearHistory() {
    const ul = document.getElementById('history');
    ul.innerHTML = '';
    clearScreen();
}

function addTerm(term) {
    if(screenValue==='0'){
        screenValue=term;
    } else{
        screenValue+=term;
    }
    updateScreen();
}

function operation(left, right) {
    this.left = left;
    this.right = right;
}

function result() {

    if(regex.test(screenValue))
    {
        try {
            const left = screenValue;

            screenValue = eval(screenValue);
            const right = screenValue;

            updateScreen();
            saveResult(left, right);
        } catch (error) {
            alert('ERROR');
        }
    } else{
        alert('NO VÁLIDO');
    }
}

function saveResult(left_side, right_side) {
    const screen = document.getElementById("screen").textContent;
    const history_element = screen;
    const left = left_side;
    const right = right_side;
    const operation = `${left}=${right}`;

    const li = document.createElement("li");
    li.id = `li-${operation}`;
    li.classList.add("fila");

    li.innerHTML = operation;

    const history = document.getElementById("history");
    history.appendChild(li);
}