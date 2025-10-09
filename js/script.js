/**
 * js/script.js
 * Arquivo para funcionalidades interativas do MovieVerse.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o comportamento de clique aos cards de filme
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('.movie-title').textContent;
            console.log(`Clicou no filme: ${title}. Implementar navegação para a página de detalhes.`);
        });
    });

    // **********************************************
    // LÓGICA ESPECÍFICA PARA A PÁGINA DE RESULTADOS (index3.html)
    // **********************************************
    if (document.title.includes('Resultados da Busca')) {
        displaySearchResults();
    }
});

/**
 * Função de busca ativada pelo botão.
 * Redireciona o usuário para index3.html com o termo de busca na URL.
 */
function searchMovie() {
    const input = document.getElementById('search-input');
    // Verifica se o campo de busca existe na página atual, caso contrário, usa o termo da URL
    const query = input ? input.value.trim() : new URLSearchParams(window.location.search).get('q');
    
    if (query) {
        // Redireciona para a página de resultados, codificando o termo de busca
        window.location.href = `index3.html?q=${encodeURIComponent(query)}`;
    } else {
        // Se estiver na página de busca e tentar buscar sem termo, alerta.
        if (document.title.includes('Resultados da Busca')) {
             alert('Por favor, digite um termo válido na barra de busca.');
        } else {
             // Caso a busca vazia ocorra em index.html ou index2.html
             alert('Por favor, digite um termo para buscar.');
        }
    }
}


/**
 * Função para exibir os resultados da busca na página index3.html.
 */
function displaySearchResults() {
    // 1. Obtém o termo de busca da URL (query string)
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');

    const titleElement = document.getElementById('results-title');
    const container = document.getElementById('results-container');
    
    if (query) {
        // 2. Atualiza o título da página com o termo de busca
        titleElement.innerHTML = `Resultados da Busca para: "<span class="highlight">${query}</span>"`;

        // 3. *Implementação futura: Realizar a busca e exibir os resultados reais aqui*
        // Por enquanto, o conteúdo de simulação do HTML será exibido.
        
    } else {
        // Se a página for acessada sem um termo de busca válido
        titleElement.textContent = "Nenhuma Busca Realizada";
        container.innerHTML = `
            <p class="search-info">Utilize a barra de pesquisa acima para encontrar seus filmes e séries favoritos.</p>
        `;
    }

    // 4. Preenche o campo de busca no header com o termo atual, para usabilidade
    const searchInput = document.getElementById('search-input');
    if (searchInput && query) {
        searchInput.value = decodeURIComponent(query);
    }
}