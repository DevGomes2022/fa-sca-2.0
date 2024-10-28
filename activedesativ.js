function showContent(optionId) {
    // Remove a classe "active" de todas as divs
    const contents = document.querySelectorAll('.blocomenu');
    contents.forEach(content => content.classList.remove('active'));
    
    // Adiciona a classe "active" apenas à div selecionada
    document.getElementById(optionId).classList.add('active');
}