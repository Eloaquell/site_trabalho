/**
 * ARQUIVO: js/script.js
 * FUNÇÃO: Lógica de Busca em Tempo Real.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Identificar se estamos na página index3.html
    const isAlphabeticalSearchPage = document.getElementById('alphabetical-search-input');

    if (isAlphabeticalSearchPage) {
        // Lógica de Busca para index3.html (Filtragem de Cards)
        
        const searchInput = isAlphabeticalSearchPage;
        const movieListContainer = document.getElementById('movie-list-container');
        const allMovieCards = movieListContainer.querySelectorAll('.movie-card');
        const initialMessage = document.getElementById('initial-message');
        const noResultsMessage = document.getElementById('no-results-message');

        const performSearch = (query) => {
            const lowerQuery = query.toLowerCase().trim();
            let matchesFound = 0;

            // 1. Oculta ou exibe a mensagem inicial
            initialMessage.style.display = 'none';

            if (lowerQuery.length === 0) {
                // Se a busca estiver vazia, esconde todos os cards e mostra a mensagem inicial
                allMovieCards.forEach(card => card.style.display = 'none');
                initialMessage.style.display = 'block';
                noResultsMessage.style.display = 'none';
                return;
            }

            // 2. Itera sobre todos os cards e os esconde/exibe
            allMovieCards.forEach(card => {
                const title = card.getAttribute('data-title').toLowerCase();
                
                if (title.includes(lowerQuery)) {
                    card.style.display = 'block'; // Mostra o card se houver correspondência
                    matchesFound++;
                } else {
                    card.style.display = 'none'; // Esconde o card
                }
            });

            // 3. Exibe ou oculta a mensagem de "nenhum resultado"
            if (matchesFound === 0) {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        };

        // Evento de digitação para a pesquisa em tempo real
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
        
        // Garante que o estado inicial (tudo escondido) seja respeitado
        performSearch(''); 

    } else {
        // Lógica de Busca original (para index.html e coming-soon.html)
        // Esta é a mesma lógica de antes, mas sem o foco no dropdown massivo
        // (Deixei comentado pois a estrutura do primeiro script já tratava isso)
    }

    // --------------------------------------------------------------------------
    // EFEITO DE HOVER SUAVE NOS CARDS (UX) - Mantido
    // --------------------------------------------------------------------------
    const movieCards = document.querySelectorAll('.movie-card, .coming-soon-card');
    
    movieCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

});