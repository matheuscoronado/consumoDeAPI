// Validação e envio do formulário
document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const rua = document.getElementById('rua').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const bairro = document.getElementById('bairro').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();

    // Verifica se algum campo está vazio
    if (!nome || !telefone || !cep || !rua || !numero || !bairro || !cidade || !estado) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    alert('Cadastro enviado com sucesso!');

    // Limpa o formulário após envio
    this.reset();

    // Opcional: retorna o foco para o primeiro campo
    document.getElementById('nome').focus();
});

// Formata o telefone enquanto digita
document.getElementById('telefone').addEventListener('input', function(e) {
    let valor = this.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    this.value = valor;
});
