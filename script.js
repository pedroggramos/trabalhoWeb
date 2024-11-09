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

const cards = document.querySelectorAll('.match-card');  
let currentIndex = 0;  

function updateCarousel() {  
    const offset = -currentIndex * 500; // 220px é a largura do card + margin  
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


//------------//
const achievementsData = {
    1980: [
        { icon: "🏆", count: 1, title: "Campeonato Brasileiro" },
    ],
    1981: [
        { icon: "🏆", count: 1, title: "Copa Libertadores" },
        { icon: "🥇", count: 1, title: "Copa Intercontinental" },
        { icon: "🥇", count: 21, title: "Campeonato Carioca" }
    ],
    1982: [
        { icon: "🏆", count: 2, title: "Campeonato Brasileiro" },
    ],
    1983: [
        { icon: "🏆", count: 3, title: "Campeonato Brasileiro" },
    ],
    1986: [
        { icon: "🏆", count: 22, title: "Campeonato Carioca" },

    ],
    1987: [
        { icon: "🏆", count: 4, title: "Campeonato Brasileiro" },

    ],
    1990: [
        { icon: "🥇", count: 1, title: "Copa do Brasil" },
        { icon: "🥇", count: 1, title: "Copa Rio" }
    ],
    1991: [
        { icon: "🏆", count: 23, title: "Campeonato Carioca" },
    ],
    1992: [
        { icon: "🏆", count: 5, title: "Campeonato Brasileiro" },
    ],
    1996: [
        { icon: "🏆", count: 24, title: "Campeonato Carioca" },
        { icon: "🏆", count: 1, title: "Copa de Ouro Nicolás Leoz" }
    ],
    1999: [
        { icon: "🏆", count: 25, title: "Campeonato Carioca" },
        { icon: "🏆", count: 1, title: "Copa Mercosul" },
    ],
    2000: [
        { icon: "🏆", count: 26, title: "Campeonato Carioca" },
    ],
    2001: [
        { icon: "🏆", count: 27, title: "Campeonato Carioca" },
        { icon: "🥇", count: 1, title: "Copa dos Campeões" }
    ],
    2004: [
        { icon: "🏆", count: 1, title: "Campeonato Carioca" },
    ],
    2006: [
        { icon: "🥇", count: 2, title: "Copa do Brasil" }
    ],
    2007: [
        { icon: "🏆", count: 28, title: "Campeonato Carioca" }
    ],
    2009: [
        { icon: "🏆", count: 29, title: "Campeonato Carioca" },
        { icon: "🏆", count: 6, title: "Campeonato Brasileiro" },

    ],
    2011: [
        { icon: "🏆", count: 30, title: "Campeonato Carioca" },
    ],
    2014: [
        { icon: "🏆", count: 31, title: "Campeonato Carioca" },
    ],
    2017: [
        { icon: "🏆", count: 32, title: "Campeonato Carioca" },
    ],
    2019: [
        { icon: "🏆", count: 7, title: "Campeonato Brasileiro" },
        { icon: "🥇", count: 2, title: "Copa Libertadores" },
        { icon: "🥇", count: 33, title: "Campeonato Carioca" },
    ],
    2020: [
        { icon: "🏆", count: 1, title: "Supercopa do Brasil" },
        { icon: "🥇", count: 8, title: "Campeonato Brasileiro" },
        { icon: "🥇", count: 34, title: "Campeonato Carioca" }
    ],
    2021: [
        { icon: "🏆", count: 1, title: "Campeonato Carioca" },
        { icon: "🥇", count: 2, title: "Supercopa do Brasil" }
    ],
    2022: [
        { icon: "🏆", count: 3, title: "Copa Libertadores" },
        { icon: "🥇", count: 4, title: "Copa do Brasil" }
    ],
    2024: [
        { icon: "🏆", count: 1, title: "Campeonato Carioca" },
        { icon: "🥇", count: 5, title: "Copa do Brasil" }
    ],

    // Adicione outros anos e troféus conforme necessário
};

function updateYear(selectedYear) {
    const year = parseInt(selectedYear, 10);
    document.getElementById("year").textContent = year;
    updateAchievements(year);
}

function updateAchievements(year) {
    const achievementsList = document.getElementById("achievements-list");
    achievementsList.innerHTML = ""; // Limpa a lista de troféus

    const trophies = achievementsData[year] || []; // Mostra uma lista vazia se o ano não tiver troféus
    if (trophies.length === 0) {
        achievementsList.innerHTML = "<span>Nenhum troféu neste ano.</span>";
    } else {
        trophies.forEach((trophy) => {
            const achievementItem = document.createElement("div");
            achievementItem.classList.add("achievement");
            achievementItem.innerHTML = `
                <span class="icon">${trophy.icon}</span>
                <span class="count">${trophy.count}</span>
                <span>${trophy.title}</span>
            `;
            achievementsList.appendChild(achievementItem);
        });
    }
}

// Inicializar com o ano de 2007
updateYear(2006);