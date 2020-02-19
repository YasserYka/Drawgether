let pickedcolor = document.getElementById("color");

pickedcolor.addEventListener('change', () => {
    _changeColor(pickedcolor.value);
    brodcastColor(pickedcolor.value);
});