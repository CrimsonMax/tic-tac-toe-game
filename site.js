let gameField = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

let ynum = document.querySelector('.ycount')
let xnum = document.querySelector('.xcount')

xnum.innerText = localStorage.getItem('x') || 0
ynum.innerText = localStorage.getItem('y') || 0

const game = document.querySelectorAll('button')

const reset = document.querySelector('.reset')

reset.addEventListener('click', () => {
    xnum.innerText = 0
    ynum.innerText = 0
    localStorage.clear()
})

game.forEach(el => el.addEventListener('click', event => {
    let x = event.target.dataset.btn;
    let y = event.target.parentElement.dataset.row;

    if (isExist(x, y)) {
        return null;
    }

    gameField[x][y] = getCount() % 2 ? 'O' : 'X';

    let sec1 = document.getElementById('0');
    let sec2 = document.getElementById('1');
    let sec3 = document.getElementById('2');
    let sec4 = document.getElementById('3');
    let sec5 = document.getElementById('4');
    let sec6 = document.getElementById('5');
    let sec7 = document.getElementById('6');
    let sec8 = document.getElementById('7');
    let sec9 = document.getElementById('8');

    function finish() {

        const xWin = () => {
            xnum.innerText++
            localStorage.setItem('x', xnum.innerText)
            alert('"X" WIN !');
            location.reload();
        }

        const oWin = () => {
            ynum.innerText++
            localStorage.setItem('y', ynum.innerText)
            alert('"O" WIN !');
            location.reload();
        }

        const draw = () => {
            alert('DRAW !');
            location.reload();
        }

        if (sec1.innerText == 'X' && sec2.innerText == 'X' && sec3.innerText == 'X') {
            return xWin();
        } else if (sec1.innerText == 'O' && sec2.innerText == 'O' && sec3.innerText == 'O') {
            return oWin();
        }
        if (sec4.innerText == 'X' && sec5.innerText == 'X' && sec6.innerText == 'X') {
            return xWin();
        } else if (sec4.innerText == 'O' && sec5.innerText == 'O' && sec6.innerText == 'O') {
            return oWin();
        }
        if (sec7.innerText == 'X' && sec8.innerText == 'X' && sec9.innerText == 'X') {
            return xWin();
        } else if (sec7.innerText == 'O' && sec8.innerText == 'O' && sec9.innerText == 'O') {
            return oWin();
        }
        if (sec1.innerText == 'X' && sec4.innerText == 'X' && sec7.innerText == 'X') {
            return xWin();
        } else if (sec1.innerText == 'O' && sec4.innerText == 'O' && sec7.innerText == 'O') {
            return oWin();
        }
        if (sec2.innerText == 'X' && sec5.innerText == 'X' && sec8.innerText == 'X') {
            return xWin();
        } else if (sec2.innerText == 'O' && sec5.innerText == 'O' && sec8.innerText == 'O') {
            return oWin();
        }
        if (sec3.innerText == 'X' && sec6.innerText == 'X' && sec9.innerText == 'X') {
            return xWin();
        } else if (sec3.innerText == 'O' && sec6.innerText == 'O' && sec9.innerText == 'O') {
            return oWin();
        }
        if (sec5.innerText == 'X' && sec1.innerText == 'X' && sec9.innerText == 'X') {
            return xWin();
        } else if (sec5.innerText == 'O' && sec1.innerText == 'O' && sec9.innerText == 'O') {
            return oWin();
        }
        if (sec5.innerText == 'X' && sec3.innerText == 'X' && sec7.innerText == 'X') {
            return xWin();
        } else if (sec5.innerText == 'O' && sec3.innerText == 'O' && sec7.innerText == 'O') {
            return oWin();
        }

        if (sec1.innerText
            && sec2.innerText
            && sec3.innerText
            && sec4.innerText
            && sec5.innerText
            && sec6.innerText
            && sec7.innerText
            && sec8.innerText
            && sec9.innerText) {
            return draw();
        }
    }

    const mark = document.querySelector(`[data-row='${y}'] [data-btn='${x}']`)

    mark.innerHTML = gameField[x][y]
    finish();
}))

function getCount() {
    counter = 0;
    gameField.forEach(row => {
        row.forEach(btn => {
            if (btn) {
                counter++;
            }
        });
    });
    return counter;
}

function isExist(x, y) {
    return gameField[x][y] !== null;
}