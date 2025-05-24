let colorPicker = document.querySelector('.selectedColor');

colorPicker.addEventListener('input', function() {
    setColor();
})

function setColor(color) {
    let regionColor = document.querySelector('.printOfColor');
    let textColor = document.querySelector('.text');

    regionColor.style.backgroundColor = colorPicker.value
    
    textColor.innerHTML = colorPicker.value;
}