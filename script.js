// toogle icon navbar

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{
menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
}

// scroll  section

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
// 1.11.10 minutes
        if(top >= offset && top < offset + height){
            // active navbar link
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add("active");
            });
// active sections for animation or scroll

sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scrol use this
        else{
            sec.classList.remove('show-animate');
        }
    });



    // stricky header
    let header=document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY >100)

    // remove toogle icons
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // Animation footer on scroll

    let footer=document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight+this.scrollY >= document.scrollingElement.scrollHeight);
    
}