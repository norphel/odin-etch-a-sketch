const container = document.getElementById('container');
const pencil = document.querySelector('.pencil');
const eraser = document.querySelector('.eraser');
const rainbow = document.querySelector('.randomColor');
const clearAndResize = document.querySelector('.clear-and-resize');

function createGrid(n) {
    for (let i = 0; i < n * n;i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.width = (String(750 / n) + 'px');
        div.style.height = (String(750 / n) + 'px');
        container.appendChild(div);        
    }
}

createGrid(64); //initial default number of pixels

pencil.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black';
    });
});

eraser.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'white';
    });
});

rainbow.addEventListener('click', () => {
    container.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = getRandomColor();
    });
});
function getRandomColor() {
    let maxVal = 0xFFFFFF;
    let randNum = Math.random() * maxVal;
    randNum = Math.floor(randNum);
    randNum = randNum.toString(16);
    let randColor = randNum.padStart(6, 0);
    return `#${randColor.toUpperCase()}`;
}

clearAndResize.addEventListener('click', clearGridAndResize);
function clearGridAndResize() {
    const pixels = container.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].remove();
    }
    let numberOfPixels = Number(prompt("Enter number of pixels (100 max, 16 min): ", "64"));
    if (numberOfPixels > 100) {
        numberOfPixels = 100;
    } else if (numberOfPixels < 16) {
        numberOfPixels = 16;
    }
    createGrid(numberOfPixels);
}