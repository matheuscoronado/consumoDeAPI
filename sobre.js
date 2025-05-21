// Executa quando a página terminar de carregar
window.onload = function () {
    console.log("Página sobre carregada!");

    const footerTexto = document.querySelector('footer p');
    
    if (footerTexto) {
        const hoje = new Date();
        const dataFormatada = hoje.toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });

        // Adiciona a data no rodapé
        footerTexto.textContent += ` - Atualizado em ${dataFormatada}`;
    }
};
