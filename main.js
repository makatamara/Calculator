var inputField = document.getElementById('mainInput');
var allButtons = document.getElementsByClassName('numbers');
	for(var i=0; i<allButtons.length; i++){
		allButtons[i].addEventListener('click',insertIntoField);
	}
var text = '';

function insertIntoField() {


	var znak2 = this.querySelector('h3');
	var znak3 =  this.querySelector('h2');
	if (znak2) {
		if (znak2.innerHTML === '=') {
			createResult(text);
			return;
		}
	console.log(znak2.innerHTML);
		text += znak2.innerHTML;
		inputField.value = text;
	}else{
		if (znak3.innerHTML === '=') {
			createResult(text);
			return;
		}
		console.log(znak3.innerHTML);

		text += znak3.innerHTML;
		inputField.value = text;
	}
		
}
function createResult(){
	var result = eval(inputField.value);
	console.log(result);
	inputField.value = result;
}