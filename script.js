const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Menutup menu saat link diklik
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Efek navbar saat scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.4)";
    }else{
        header.style.boxShadow = "none";
    }
});

// Form demo
document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
});