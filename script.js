// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btnMensagem');
    const mensagem = document.getElementById('mensagemOculta');

    botao.addEventListener('click', () => {
        // Alterna a exibição da mensagem
        if (mensagem.classList.contains('hidden')) {
            mensagem.classList.remove('hidden');
            mensagem.classList.add('show');
            botao.textContent = 'Ocultar Mensagem';
        } else {
            mensagem.classList.remove('show');
            mensagem.classList.add('hidden');
            botao.textContent = 'Ver Mensagem';
        }
    });
});