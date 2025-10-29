/**
 * ARQUIVO: script.js
 * FUNÇÃO: Gerenciar a funcionalidade de busca e a tela de carregamento (loader).
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // =================================================================
    // 1. LÓGICA DO LOADER (TELA DE CARREGAMENTO)
    // Tempo de exibição: 1.5 segundos
    // =================================================================
    const loaderWrapper = document.getElementById('loader-wrapper');

    if (loaderWrapper) {
        // Usa setTimeout para esconder o loader após 1.5 segundos
        setTimeout(() => {
            // Adiciona a classe 'hidden' para iniciar a transição CSS (opacity e visibility)
            loaderWrapper.classList.add('hidden');
        }, 1500); // 1500 milissegundos = 1.5 segundos
    }


    // =================================================================
    // 2. SIMULAÇÃO DA BASE DE DADOS DE FILMES PARA BUSCA
    // Usado para o dropdown de sugestões em tempo real.
    // =================================================================
    
    const searchInput = document.getElementById('search-input');
    const searchResultsDiv = document.getElementById('search-results');
    const searchContainer = document.querySelector('.search-container');
    
    // Lista de filmes de exemplo (você deve expandir esta lista)
    const allMovies = [
        { title: "A Origem", year: 2010, poster: "https://via.placeholder.com/50x75?text=A" },
        { title: "Apocalypse Now", year: 1979, poster: "https://via.placeholder.com/50x75?text=A" },
        { title: "Barbie", year: 2023, poster: "https://via.placeholder.com/50x75?text=B" },
        { title: "Blade Runner 2049", year: 2017, poster: "https://via.placeholder.com/50x75?text=B" },
        { title: "Coringa", year: 2019, poster: "https://via.placeholder.com/50x75?text=C" },
        { title: "Cães de Aluguel", year: 1992, poster: "https://via.placeholder.com/50x75?text=C" },
        { title: "Duna: Parte Dois", year: 2024, poster: "https://via.placeholder.com/50x75?text=D" },
        { title: "De Volta para o Futuro", year: 1985, poster: "https://via.placeholder.com/50x75?text=D" },
        { title: "Encontros e Desencontros", year: 2003, poster: "https://via.placeholder.com/50x75?text=E" },
        { title: "Exorcista do Papa, O", year: 2023, poster: "https://via.placeholder.com/50x75?text=E" },
        { title: "Fargo", year: 1996, poster: "https://via.placeholder.com/50x75?text=F" },
        { title: "Furiosa", year: 2024, poster: "https://via.placeholder.com/50x75?text=F" },
        { title: "Gladiador", year: 2000, poster: "https://via.placeholder.com/50x75?text=G" },
        { title: "Godzilla Minus One", year: 2023, poster: "https://via.placeholder.com/50x75?text=G" },
        // ... adicione aqui o restante dos 260 filmes
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
            
            // Simula um clique no item (pode ser ajustado para levar a movie-details.html)
            item.onclick = () => {
                alert(`Você selecionou: ${movie.title}. Redirecionando para index3.html...`);
                // Redireciona para index3.html com o termo de busca
                window.location.href = `index3.html?q=${encodeURIComponent(movie.title)}`; 
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
     * Filtra a lista de filmes com base no que foi digitado (executa no 'input').
     */
    const handleSearch = (event) => {
        // NÃO usamos event.preventDefault() aqui. Isso permite que a tecla ENTER
        // envie o formulário para index3.html, conforme solicitado.
        
        const query = searchInput.value.toLowerCase().trim();

        // Se o termo for muito curto ou vazio, esconde o dropdown.
        if (query.length < 2) {
            searchResultsDiv.classList.remove('visible');
            return;
        }

        const filteredMovies = allMovies.filter(movie => 
            movie.title.toLowerCase().includes(query)
        ).slice(0, 10); // Limita a 10 resultados

        renderSearchResults(filteredMovies);
    };

    // Event Listener para a busca em tempo real (input)
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Event Listener para fechar o dropdown se clicar fora
    document.addEventListener('click', (event) => {
        if (searchContainer && !searchContainer.contains(event.target)) {
            searchResultsDiv.classList.remove('visible');
        }
    });

    // Event Listener para reabrir o dropdown ao focar no input (se houver texto)
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.length >= 2) {
                // Simula um evento 'input' para mostrar os resultados novamente
                handleSearch({ target: searchInput, type: 'focus' }); 
            }
        });
    }
});