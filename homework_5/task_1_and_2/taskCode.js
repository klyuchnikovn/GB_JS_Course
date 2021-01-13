'use strict';

function createChessBoard () {
    let rows = [1, 2, 3, 4, 5, 6, 7, 8]
    let cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    let color = true;
    let breaks = 0;

    for (let i = 0; i < 100; i++) {
        let condition1 = i >= 0 && i <= 9
        let condition2 = i >= 90 && i <= 99
        let condition3 = i % 10 == 0
        let condition4 = (i + 1) % 10 == 0
        if (i % 10 == 0 && i != 0) {
            let el = document.createElement('div');
            el.style.clear = 'both';
            document.querySelector('body').appendChild(el);
            if (color) {
                color = false;
            } else {
                color = true;
            }
            breaks += 1;
        }
        let a = document.createElement('div');
        a.style.width = '50px';
        a.style.height = '50px';
        a.style.float = 'left';
        a.style.textAlign = 'center';
        a.style.paddingTop = '15px';
        a.style.boxSizing = 'border-box';
        document.querySelector('body').appendChild(a);
        a.className += `block${i + 1}`;

        if (condition1 || condition2 || condition3 || condition4) {
            a.style.backgroundColor = 'orange'
        }

        if (!condition1 && !condition2 && !condition3 && !condition4) {
            if (color) {
                a.style.backgroundColor = 'black';
                a.style.color = 'white';
                color = false;
            } else {
                a.style.backgroundColor = 'white';
                a.style.color = 'black';
                color = true;
            }
        }

        if (condition3 || condition4) {
            a.style.borderLeft = '1px solid black';
            a.style.borderRight = '1px solid black';
        }

        if (condition1 || condition2) {
            a.style.borderTop = '1px solid black';
            a.style.borderBottom = '1px solid black';
        }

        if (i == 0) {
            a.style.borderBottom = '1px solid orange';
            a.style.borderRight = '1px solid orange';
        }

        if (i == 99) {
            a.style.borderTop = '1px solid orange';
            a.style.borderLeft = '1px solid orange';
        }

        if (i == 90) {
            a.style.borderTop = '1px solid orange';
            a.style.borderRight = '1px solid orange';
        }

        if (i == 9) {
            a.style.borderBottom = '1px solid orange';
            a.style.borderLeft = '1px solid orange';
        }

        if (i >= 1 && i <= 8) {
            a.innerHTML += `${cols[i - 1]}`
        }

        if (i >= 91 && i <= 98) {
            a.innerHTML += `${cols[i - 91]}`
        }

        if (condition3 && i != 0 && i != 90) {
            a.innerHTML += `${9 - breaks}`
        }

        if (condition4 && i != 9 && i != 99) {
            a.innerHTML += `${9 - breaks}`
        }
    }

    return [document.querySelector('.block82'), document.querySelector('.block72'), document.querySelector('.block62'),
        document.querySelector('.block52'), document.querySelector('.block42'), document.querySelector('.block32'),
        document.querySelector('.block22'), document.querySelector('.block12'), document.querySelector('.block83'),
        document.querySelector('.block73'), document.querySelector('.block63'), document.querySelector('.block53'),
        document.querySelector('.block43'), document.querySelector('.block33'), document.querySelector('.block23'),
        document.querySelector('.block13'), document.querySelector('.block84'), document.querySelector('.block74'),
        document.querySelector('.block64'), document.querySelector('.block54'), document.querySelector('.block44'),
        document.querySelector('.block34'), document.querySelector('.block24'), document.querySelector('.block14'),
        document.querySelector('.block85'), document.querySelector('.block75'), document.querySelector('.block65'),
        document.querySelector('.block55'), document.querySelector('.block45'), document.querySelector('.block35'),
        document.querySelector('.block25'), document.querySelector('.block15'), document.querySelector('.block86'),
        document.querySelector('.block76'), document.querySelector('.block66'), document.querySelector('.block56'),
        document.querySelector('.block46'), document.querySelector('.block36'), document.querySelector('.block26'),
        document.querySelector('.block16'), document.querySelector('.block87'), document.querySelector('.block77'),
        document.querySelector('.block67'), document.querySelector('.block57'), document.querySelector('.block47'),
        document.querySelector('.block37'), document.querySelector('.block27'), document.querySelector('.block17'),
        document.querySelector('.block88'), document.querySelector('.block78'), document.querySelector('.block68'),
        document.querySelector('.block58'), document.querySelector('.block48'), document.querySelector('.block38'),
        document.querySelector('.block28'), document.querySelector('.block18'), document.querySelector('.block89'),
        document.querySelector('.block79'), document.querySelector('.block69'), document.querySelector('.block59'),
        document.querySelector('.block49'), document.querySelector('.block39'), document.querySelector('.block29'),
        document.querySelector('.block19')]
}

function figuresStartPosition() {
    a1.innerHTML += 'Л'
    b1.innerHTML += 'К'
    c1.innerHTML += 'С'
    d1.innerHTML += 'Ф'
    e1.innerHTML += 'К'
    f1.innerHTML += 'С'
    g1.innerHTML += 'К'
    h1.innerHTML += 'Л'

    a2.innerHTML += 'П'
    b2.innerHTML += 'П'
    c2.innerHTML += 'П'
    d2.innerHTML += 'П'
    e2.innerHTML += 'П'
    f2.innerHTML += 'П'
    g2.innerHTML += 'П'
    h2.innerHTML += 'П'

    a8.innerHTML += 'Л'
    b8.innerHTML += 'К'
    c8.innerHTML += 'С'
    d8.innerHTML += 'Ф'
    e8.innerHTML += 'К'
    f8.innerHTML += 'С'
    g8.innerHTML += 'К'
    h8.innerHTML += 'Л'

    a7.innerHTML += 'П'
    b7.innerHTML += 'П'
    c7.innerHTML += 'П'
    d7.innerHTML += 'П'
    e7.innerHTML += 'П'
    f7.innerHTML += 'П'
    g7.innerHTML += 'П'
    h7.innerHTML += 'П'
}

let [a1, a2, a3, a4, a5, a6, a7, a8, b1, b2, b3, b4, b5, b6, b7, b8, c1, c2, c3, c4, c5,
    c6, c7, c8, d1, d2, d3, d4, d5, d6, d7, d8, e1, e2, e3, e4, e5, e6, e7, e8, f1, f2, f3,
    f4, f5, f6, f7, f8, g1, g2, g3, g4, g5, g6, g7, g8, h1, h2, h3, h4, h5, h6, h7, h8] = createChessBoard()

figuresStartPosition()
