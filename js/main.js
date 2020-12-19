// these event fire on click 
document.getElementById('humburger').addEventListener('click',shownav);
document.getElementById('close').addEventListener('click',hidenav);
// this event fire on scroll
window.addEventListener('scroll', stickyfun);
// this function will show mob menu
		function shownav(){
			console.log("shownav btn ic clicked");
			var navMenu = document.getElementById('nav-menu');
			navMenu.classList.add('active-nav-menu');
		}
		// this function will hide mob menu
		function hidenav(){
			console.log("shownav btn ic clicked");
			var navMenu = document.getElementById('nav-menu');
			navMenu.classList.remove('active-nav-menu');
		}
		window.addEventListener('scroll', stickyfun);
  // this function will add class sticky when window a bit scroll
		function stickyfun(){
			var header = document.getElementById("header");
			if(window.scrollY > 0){
                header.classList.add("sticky");
			}
			else{
				header.classList.remove("sticky");
			}
		}