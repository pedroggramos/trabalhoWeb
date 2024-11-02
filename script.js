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

// dropdown