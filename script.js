function showLandingPage() {
    const paginaInicial = document.getElementById('pagina-inicial');
    const paginaNova = document.getElementById('pagina-nova');

    // Inicia a transição de opacidade (dissolvendo a página inicial)
    paginaInicial.style.opacity = '0';

    // Quando a transição de opacidade da página inicial terminar, mostra a nova página
    setTimeout(() => {
        paginaInicial.style.display = 'none'; // Opcional: oculta completamente após a transição
        paginaNova.style.opacity = '1'; // Tornar a nova página visível
    }, 500); // Espera o tempo da transição da página inicial
}

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

