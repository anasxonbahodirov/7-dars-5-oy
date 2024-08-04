const data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
const outputDiv = document.getElementById('output');

data.map(num => {
    const div = document.createElement('div');
    div.textContent = num;
    if (num > 50) {
        div.classList.add('greater-than-50');
    } else if (num < 50) {
        div.classList.add('less-than-50');
    }
    outputDiv.appendChild(div);
});