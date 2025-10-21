/**
 * ARQUIVO: script.js
 * FUNÇÃO: Gerenciar a funcionalidade de busca e a interação do usuário.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Referências aos elementos da busca
    const searchInput = document.getElementById('search-input');
    const searchResultsDiv = document.getElementById('search-results');
    const searchContainer = document.querySelector('.search-container');
    
    // =================================================================
    // SIMULAÇÃO DA BASE DE DADOS DE FILMES (260 Filmes - 10 por letra)
    // Para simplificar, crio um array com alguns filmes de exemplo.
    // Você expandiria este array para 260 itens.
    // =================================================================
    const allMovies = [
        // Letra A
        { title: "A Origem", year: 2010, poster: "https://via.placeholder.com/50x75?text=A" },
        { title: "Apocalypse Now", year: 1979, poster: "https://via.placeholder.com/50x75?text=A" },
        // Letra B
        { title: "Barbie", year: 2023, poster: "https://via.placeholder.com/50x75?text=B" },
        { title: "Blade Runner 2049", year: 2017, poster: "https://via.placeholder.com/50x75?text=B" },
        // Letra C
        { title: "Coringa", year: 2019, poster: "https://via.placeholder.com/50x75?text=C" },
        { title: "Cães de Aluguel", year: 1992, poster: "https://via.placeholder.com/50x75?text=C" },
        // Letra D (Duna: Parte Dois está na Hero, mas incluído para busca)
        { title: "Duna: Parte Dois", year: 2024, poster: "https://via.placeholder.com/50x75?text=D" },
        { title: "De Volta para o Futuro", year: 1985, poster: "https://via.placeholder.com/50x75?text=D" },
        // Letra E
        { title: "Encontros e Desencontros", year: 2003, poster: "https://via.placeholder.com/50x75?text=E" },
        { title: "Exorcista do Papa, O", year: 2023, poster: "https://via.placeholder.com/50x75?text=E" },
        // Letra F
        { title: "Fargo", year: 1996, poster: "https://via.placeholder.com/50x75?text=F" },
        { title: "Furiosa", year: 2024, poster: "https://via.placeholder.com/50x75?text=F" },
        // Letra G
        { title: "Gladiador", year: 2000, poster: "https://via.placeholder.com/50x75?text=G" },
        { title: "Godzilla Minus One", year: 2023, poster: "https://via.placeholder.com/50x75?text=G" },
        // ... (E assim por diante para o restante do alfabeto)
    ];


    /**
     * Função para renderizar os resultados da busca no dropdown.
     * @param {Array} results - Lista de objetos de filme.
     */
    const renderSearchResults = (results) => {
        searchResultsDiv.innerHTML = ''; // Limpa resultados anteriores
        
        if (results.length === 0) {
            searchResultsDiv.innerHTML = '<div style="padding: 10px; color: var(--color-text-muted);">Nenhum filme encontrado.</div>';
            searchResultsDiv.classList.add('visible');
            return;
        }

        results.forEach(movie => {
            const item = document.createElement('div');
            item.classList.add('search-result-item');
            
            // Simula um link de detalhe do filme
            item.onclick = () => {
                alert(`Você clicou em: ${movie.title} (${movie.year})`);
                searchInput.value = ''; // Limpa o input após o clique
                searchResultsDiv.classList.remove('visible'); // Esconde o dropdown
            };

            item.innerHTML = `
                <img src="${movie.poster}" alt="Pôster de ${movie.title}">
                <div>
                    <p style="color: var(--color-primary-vibrant);">${movie.title}</p>
                    <p style="color: var(--color-text-muted); font-size: 0.8rem;">Ano: ${movie.year}</p>
                </div>
            `;
            searchResultsDiv.appendChild(item);
        });

        // Mostra o dropdown
        searchResultsDiv.classList.add('visible');
    };

    /**
     * Função principal de busca.
     * Filtra a lista de filmes com base no que foi digitado.
     */
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase().trim();

        if (query.length < 2) {
            // Esconde os resultados se o texto for muito curto
            searchResultsDiv.classList.remove('visible');
            return;
        }

        const filteredMovies = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(query)
        ).slice(0, 10); // Limita a 10 resultados, como é comum em buscas

        renderSearchResults(filteredMovies);
    };

    // Event Listener para a busca em tempo real (input)
    searchInput.addEventListener('input', handleSearch);

    // Event Listener para fechar o dropdown se clicar fora
    document.addEventListener('click', (event) => {
        if (!searchContainer.contains(event.target)) {
            searchResultsDiv.classList.remove('visible');
        }
    });

    // Event Listener para reabrir o dropdown ao focar no input (se houver texto)
    searchInput.addEventListener('focus', () => {
        if (searchInput.value.length >= 2) {
            handleSearch({ target: searchInput });
        }
    });

    // Adicione aqui qualquer outra funcionalidade de JS (e.g., carregar filmes dinamicamente, sliders, etc.)
});

/**
     * Função principal de busca.
     * Filtra a lista de filmes com base no que foi digitado.
     */
    const handleSearch = (event) => {
        // NÃO USE event.preventDefault() aqui. Isso permitiria que o formulário fosse enviado 
        // para index3.html quando o usuário pressionar Enter.

        const query = event.target.value.toLowerCase().trim();

        if (query.length < 2) {
            // Esconde os resultados se o texto for muito curto
            searchResultsDiv.classList.remove('visible');
            return;
        }
        
        // ... (resto da sua lógica de filtragem)
        
        const filteredMovies = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(query)
        ).slice(0, 10); 

        renderSearchResults(filteredMovies);
    };

    // ... (o resto do código permanece o mesmo)