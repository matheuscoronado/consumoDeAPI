// Executa quando a página terminar de carregar
window.onload = function () {
    console.log("Página inicial carregada!");

    // Seleciona todos os botões com a classe 'botao'
    const botoes = document.querySelectorAll('.botao');

    // Se houver botões encontrados, aplica o efeito em cada um
    botoes.forEach(botao => {
        botao.addEventListener('mouseover', () => {
            botao.style.backgroundColor = '#1a5f8a';
        });

        botao.addEventListener('mouseout', () => {
            botao.style.backgroundColor = '#2a7fba';
        });
    });
};
