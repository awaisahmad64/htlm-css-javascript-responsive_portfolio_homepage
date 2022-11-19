// these event fire on click 
const id = (id)=> document.getElementById(id);
id('humburger').addEventListener('click',shownav);
id('close').addEventListener('click',hidenav);
// this event fire on scroll
window.addEventListener('scroll', stickyfun);
// this function will show mob menu
		function shownav(){
			console.log("shownav btn ic clicked");
			id('nav-menu').classList.add('active-nav-menu');
		}
		// this function will hide mob menu
		function hidenav(){
			console.log("shownav btn ic clicked");
			id('nav-menu').classList.remove('active-nav-menu');
		}
		window.addEventListener('scroll', stickyfun);
  // this function will add class sticky when window a bit scroll
		function stickyfun(){
			const header = id("header");
			if(window.scrollY > 0){
                header.classList.add("sticky");
			}
			else{
				header.classList.remove("sticky");
			}
		}