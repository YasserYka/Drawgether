let pickedcolor = document.getElementById("color");

pickedcolor.addEventListener('change', () => {
    changeColor(pickedcolor.value);
    brodcast(constructMessage("color", pickedcolor.value));
});