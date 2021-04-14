function submit()
{
parag = document.getElementById('dummy');

var backgroundRed = document.getElementById('backRed').value;
var backgroundGreen = document.getElementById('backGreen').value;
var backgroundBlue = document.getElementById('backBlue').value;
var borRed = document.getElementById('borderRed').value;
var borGreen = document.getElementById('borderGreen').value;
var borBlue = document.getElementById('borderBlue').value;
var borWidth = document.getElementById('width').value;

parag.style.borderWidth = borWidth;
parag.style.backgroundColor = "rgb(" + backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")";
parag.style.borderColor = "rgb(" + borRed + "," + borGreen + "," + borBlue + ")";
}
