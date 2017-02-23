function validateForm() {
	var name = document.getElementById('nameInput').value;
	var species = document.getElementById('speciesInput').value;
	var age = document.getElementById('ageInput').value;

	if (!name.length || !species.length || !age.length) {
		alert('How could you forget the details of your pet already!? -sob-');
		return false;
	}

	if (typeof parseInt(age) !== 'number' || isNaN(age)) {
		alert('Must be a number!');
		return false;
	}
return false;
}

function goPoof() {
	var html = document.getElementById('entirePage');
	var showAgain = document.getElementById('comeBack');
	html.style.display = 'none';
}

document.getElementById('changeColor').addEventListener('click', function () {
	var Color = document.getElementById('colorInput').value;
	var body = document.getElementById('entirePage');
	body.style.background = Color;
})