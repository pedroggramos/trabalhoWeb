document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o botão 'continuar'
    const continuarBtn = document.getElementById("continuar");
    
    // Adiciona o evento de click no botão
    continuarBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link (navegação)
        
        // Exibe o alerta
        alert("Você entrou na conta com sucesso!");
        
        // Redireciona para a página "index.html" após 2 segundos (2000 ms)
        setTimeout(function() {
            window.location.href = "paginanova.html";
        }, 1000); // 2 segundos para mostrar o alerta antes de redirecionar
    });
});