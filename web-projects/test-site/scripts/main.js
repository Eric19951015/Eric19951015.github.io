

let myimg = document.querySelector('img')

myimg.onclick = function(){
	let newSrc = myimg.getAttribute('src')
	if(newSrc === 'images/duck.jfif') {
      myimg.setAttribute('src','images/stone.jfif')
    } else {
      myimg.setAttribute('src', 'images/duck.jfif');
    }
	
	
}



function setUserName() {
  let myName = prompt('请输入你的名字。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla 酷毙了，' + myName;
}

function multiply(num1, num2) {
  let result = num1 * num2;
  alert (result);
}
/*
document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}


myButton.onclick = function() {
   setUserName();
}