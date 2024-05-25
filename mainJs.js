function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}
window.onscroll = function() {headerShadow()};

function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

    } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

    }
}

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
})
}

window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})
sr.reveal('.section',{delay: 200})
sr.reveal('.name-hitungakg', {delay: 200})


const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.hitung-akg-anda',{delay: 200})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.deskripsi-akg',{delay: 200})




var typingEffect = new Typed(".typedText",{
    strings : ["Tingkatkan Kesehatan Anda dengan Nutribite, Setiap Gigitan Penuh Nutrisi!"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
})

document.addEventListener('DOMContentLoaded', function() {
    var profileCircle = document.querySelector('.profile-circle');
    var plusSign = document.querySelector('.plus-sign');

    if (profileCircle && plusSign) {
        profileCircle.style.zIndex = '1';
        plusSign.style.zIndex = '2';
    }
});

