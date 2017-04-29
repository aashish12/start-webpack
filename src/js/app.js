import {secretButton, secretParagraph} from './dom-loader.js';

var showSecret = false;

secretButton.addEventListener('click', toggleSecreteState);
updateSecreteParagraph();

function toggleSecreteState(){
	showSecret = !showSecret;
	updateSecreteButton();
	updateSecreteParagraph();
}

function updateSecreteButton(){
	if(showSecret){
		secretButton.textContent = 'Hide the Secrete';
	}else{
		secretButton.textContent = 'Show the Secrete';
	}
}

function updateSecreteParagraph(){
	if(showSecret){
		secretParagraph.style.display = 'block';
	}else{
		secretParagraph.style.display = 'none';
	}
}