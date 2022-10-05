function createGrid(n) {
    const container = document.getElementById('container');
    for (let i = 0; i < n * n;i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        div.style.width = (String(750 / n) + 'px');
        div.style.height = (String(750 / n) + 'px');
        container.appendChild(div);        
    }
}

createGrid(100);