
// login

function openNav() {  
    document.getElementById("overlay").style.width = "15%";  
}  

function closeNav() {  
    document.getElementById("overlay").style.width = "0%";  
}  

// carrossel

const cards = document.querySelectorAll('.card');  
let currentIndex = 0;  

function updateCarousel() {  
    const offset = -currentIndex * 220; // 220px é a largura do card + margin  
    cards.forEach(card => {  
        card.style.transform = `translateX(${offset}px)`;  
    });  
}  

document.getElementById('next').addEventListener('click', () => {  
    currentIndex = (currentIndex + 1) % cards.length;  
    updateCarousel();  
});  

document.getElementById('prev').addEventListener('click', () => {  
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;  
    updateCarousel();  
});

