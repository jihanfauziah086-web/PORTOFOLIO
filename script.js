const text =
"Aku masih mempertimbangkan apakah akan menjadi Cyber Security Specialist 🔐 atau IoT Engineer 🤖. Apa pun pilihannya, aku akan terus belajar dan berkembang.";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,45);

}

}

typing();

document.getElementById("btn").addEventListener("click",()=>{

document.getElementById("dream").scrollIntoView({
behavior:"smooth"
});

});

const boxes=document.querySelectorAll(".box");

window.addEventListener("scroll",()=>{

boxes.forEach(box=>{

const top=box.getBoundingClientRect().top;

if(top<window.innerHeight-100){

box.style.opacity="1";
box.style.transform="translateY(0)";

}else{

box.style.opacity="0";
box.style.transform="translateY(40px)";

}

});

});