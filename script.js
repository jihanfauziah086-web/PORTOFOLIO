/* =====================================
   FOX PORTFOLIO
   SCRIPT.JS - PART 1
===================================== */

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ===========================
   REVEAL ANIMATION
=========================== */

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    reveals.forEach(item=>{

        const windowHeight = window.innerHeight;

        const revealTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounter(){

    if(counterStarted) return;

    counters.forEach(counter=>{

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 60;

        const update = ()=>{

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            }else{

                counter.innerText = target;

            }

        }

        update();

    });

    counterStarted = true;

}

window.addEventListener("scroll",()=>{

    const stat = document.querySelector(".stats");

    if(!stat) return;

    const top = stat.getBoundingClientRect().top;

    if(top < window.innerHeight-100){

        startCounter();

    }

});

/* ===========================
   PROGRESS BAR
=========================== */

const progressBars = document.querySelectorAll(".progress-bar");

let progressPlayed = false;

function animateProgress(){

    if(progressPlayed) return;

    progressBars.forEach(bar=>{

        const value = bar.classList[1];

        let width = "0%";

        switch(value){

            case "html":
                width="90%";
            break;

            case "css":
                width="85%";
            break;

            case "js":
                width="75%";
            break;

            case "python":
                width="70%";
            break;

            case "cpp":
                width="65%";
            break;

            case "arduino":
                width="70%";
            break;

        }

        bar.style.width = width;

    });

    progressPlayed=true;

}

window.addEventListener("scroll",()=>{

    const skill = document.querySelector("#skills");

    if(!skill) return;

    const top = skill.getBoundingClientRect().top;

    if(top < window.innerHeight-120){

        animateProgress();

    }

});

/* ===========================
   ACTIVE NAVBAR
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop-120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

/* ===========================
   SCROLL TO TOP
=========================== */

const topBtn = document.createElement("button");

topBtn.id="topBtn";

topBtn.innerHTML="↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===========================
   HERO FADE
=========================== */

window.addEventListener("load",()=>{

    document.querySelector(".hero").classList.add("fade-up");

});

/* ===========================
   ACTIVE LINK STYLE
=========================== */

const style=document.createElement("style");

style.innerHTML=`

nav ul li a.active{

color:#ff7b00;

font-weight:bold;

}

`;

document.head.appendChild(style);
/* =====================================
   FOX PORTFOLIO
   SCRIPT.JS - PART 2
===================================== */

/* ===========================
   DARK MODE
=========================== */

const themeBtn = document.getElementById("themeBtn");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        const icon = themeBtn.querySelector("i");

        if(document.body.classList.contains("dark")){

            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");

            localStorage.setItem("theme","dark");

        }else{

            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");

            localStorage.setItem("theme","light");

        }

    });

}

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    if(themeBtn){

        const icon = themeBtn.querySelector("i");

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    }

}

/* ===========================
   BUTTON RIPPLE EFFECT
=========================== */

document.querySelectorAll(".btn").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        ripple.style.left=(e.clientX-rect.left)+"px";
        ripple.style.top=(e.clientY-rect.top)+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});

/* ===========================
   FLOATING FOX
=========================== */

const fox=document.querySelector(".fox");

if(fox){

setInterval(()=>{

fox.animate([

{

transform:"translateY(0px) rotate(0deg)"

},

{

transform:"translateY(-10px) rotate(3deg)"

},

{

transform:"translateY(0px) rotate(0deg)"

},

{

transform:"translateY(-8px) rotate(-3deg)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000,

iterations:1

});

},3000);

}

/* ===========================
   HERO TYPING EFFECT
=========================== */

const typingText="Terus belajar, terus berkembang, dan jangan takut mencoba hal baru.";

const heroDescription=document.querySelector(".description");

if(heroDescription){

const original=heroDescription.innerHTML;

setTimeout(()=>{

heroDescription.innerHTML="";

let index=0;

function typing(){

if(index<typingText.length){

heroDescription.innerHTML+=typingText.charAt(index);

index++;

setTimeout(typing,35);

}else{

heroDescription.innerHTML+="<br><br>"+original;

}

}

typing();

},700);

}

/* ===========================
   SECTION HOVER
=========================== */

document.querySelectorAll(".about-card,.interest-card,.achievement-card,.future-card,.skill-box").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

/* ===========================
   PAGE LOADED
=========================== */

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";

document.body.style.opacity="1";

},100);

});

/* ===========================
   PARALLAX BACKGROUND
=========================== */

window.addEventListener("scroll",()=>{

const bg=document.querySelector(".background-pattern");

if(bg){

bg.style.transform=`translateY(${window.scrollY*0.15}px)`;

}

});

/* ===========================
   RANDOM FOX EMOJI
=========================== */

const foxes=["🦊","🍂","✨"];

setInterval(()=>{

const heroFox=document.querySelector(".fox");

if(heroFox){

heroFox.innerHTML=foxes[Math.floor(Math.random()*foxes.length)];

setTimeout(()=>{

heroFox.innerHTML="🦊";

},900);

}

},10000);

/* ===========================
   CONSOLE MESSAGE
=========================== */

console.log("%c🦊 Fox Portfolio by Jihan Fauziah","color:orange;font-size:20px;font-weight:bold;");

console.log("Terima kasih sudah mengunjungi portofolio saya!");

/* ===========================
   YEAR AUTO UPDATE
=========================== */

const footer=document.querySelector("footer");

if(footer){

footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

}