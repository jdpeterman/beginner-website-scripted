var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/buddy-hield.jpg'){
		myImage.setAttribute ('src','images/buddy-hield2.jpg');
	} else {
		myImage.setAttribute ('src','images/buddy-hield.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name:');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Buddy Hield is awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Buddy Hield for MVP, ' + storedName;
}


myButton.onclick = function() {
	setUserName();
}
