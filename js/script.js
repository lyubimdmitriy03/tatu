// navigation markerLeft >768
var marker1 = document.querySelector('#marker1');
var item = document.querySelectorAll('li a');


function indicator(e){
	marker1.style.left = e.offsetLeft+"px";
	marker1.style.width = e.offsetWidth+"px";
	marker1.style.height = '2px';
	marker1.style.transition = '0.5s';
}

item.forEach(link => {
	link.addEventListener('mousemove', (e)=>{
		indicator(e.target);
	})	;
	link.addEventListener('mouseout', function (){marker1.style.height = '0';
	})

});

// navigation markerLeft >768
var marker2 = document.querySelector('#marker2');
var item2 = document.querySelectorAll('li a');


function indicator2(e){
	marker2.style.left = e.offsetLeft+"px";
	marker2.style.width = e.offsetWidth+"px";
	marker2.style.height = '2px';
	marker2.style.transition = '0.5s';
}

item2.forEach(link => {
	link.addEventListener('mousemove', (e)=>{
		indicator2(e.target);
	})	;
	link.addEventListener('mouseout', function (){marker2.style.height = '0';
	})

});

// hamburger
var hamburger = document.querySelector('#hamburger');
var navbar = document.querySelector('#nav');
var logo = document.querySelector('#logo');
hamburger.addEventListener('click', function (){
	navbar.classList.toggle('active');
	hamburger.classList.toggle('open');
	logo.classList.toggle('none');
});

window.addEventListener('scroll', function () {
	if(window.pageYOffset || document.documentElement.scrollTop){
		hamburger.classList.add('ah');
	}
	else{
		hamburger.classList.remove('ah');
	}
})

// validation
 function emailValidation () {
	 var email = document.getElementById('email');
	 var emailValue = email.value;
	 var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	 
	 if(emailValue.match(pattern)){
		 email.style.borderColor = '#50be86'
	 }
	 else {
		email.style.borderColor = '#df3433' 
	 }

	 if(emailValue == ''){
		email.style.borderColor = '#000'
	}

 }

 function emailValidation2 () {
	var email2 = document.getElementById('email2');
	var email2Value = email2.value;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	
	if(email2Value.match(pattern)){
		email2.style.borderColor = '#50be86'
	}
	else {
	   email2.style.borderColor = '#df3433' 
	}

	if(email2Value == ''){
	   email2.style.borderColor = '#000'
   }
}

function nameValidation () {
	var name = document.getElementById('name');
	var nameValue = name.value;
	
	if(nameValue != ''){
		name.style.borderColor = '#50be86'
	}
	else{
		name.style.borderColor = '#000'
	}
}