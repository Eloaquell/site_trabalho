// js/script.js

// Catálogo Simulado: 10 filmes por letra (260 filmes totais)
const movieCatalog = {
    'A': [
        {title: "A Origem", year: 2010, genre: "Sci-Fi/Ação", poster: "https://image.tmdb.org/t/p/w200/oQ0O3Q88L7mYfU17W3K3fJ393yF.jpg"},
        {title: "Alien", year: 1979, genre: "Terror/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Avatar", year: 2009, genre: "Fantasia/Aventura", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "A Chegada", year: 2016, genre: "Drama/Mistério", poster: "https://image.tmdb.org/t/p/w200/9eN641n2D4L68k3Qx3w9O7v9z8K.jpg"},
        {title: "Argo", year: 2012, genre: "Thriller/Drama", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Assassinos da Lua das Flores", year: 2023, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Amelie Poulain", year: 2001, genre: "Comédia/Romance", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "A Rede Social", year: 2010, genre: "Biografia/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Apocalypse Now", year: 1979, genre: "Guerra/Drama", poster: "https://image.tmdb.org/t/p/w200/sQ6WwF98rU11I1gP1z22U0qY60m.jpg"},
        {title: "A Cor Púrpura", year: 1985, genre: "Drama/Musical", poster: "https://image.tmdb.org/t/p/w200/iS9o0eB7X7rR5j1e88p3E5b2w0f.jpg"},
    ],
    'B': [
        {title: "Batman: O Cavaleiro das Trevas", year: 2008, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi/Mistério", poster: "https://image.tmdb.org/t/p/w200/vG6w53q2e30oR80kI3UvPq8x80g.jpg"},
        {title: "Barbie", year: 2023, genre: "Comédia/Fantasia", poster: "https://image.tmdb.org/t/p/w200/wS8I5W8j2eXQ5I0r908F0u5j8jM.jpg"},
        {title: "Bastardos Inglórios", year: 2009, genre: "Ação/Guerra", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Beleza Americana", year: 1999, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
        {title: "Birdman", year: 2014, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/t4T76K1X1j6r5w5c5g88j3v62vI.jpg"},
        {title: "Brilho Eterno de Uma Mente Sem Lembranças", year: 2004, genre: "Romance/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Bonequinha de Luxo", year: 1961, genre: "Comédia/Romance", poster: "https://image.tmdb.org/t/p/w200/5jH4tH8tG3S4t3t3e4v85V3f8jM.jpg"},
        {title: "Black Panther", year: 2018, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vUf07E52P69r9yXqWf2MvN2W8bY.jpg"},
        {title: "Busca Implacável", year: 2008, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/xVqC73h9n18eW8t9fG731kS465C.jpg"},
    ],
    'C': [
        {title: "Clube da Luta", year: 1999, genre: "Drama/Thriller", poster: "https://image.tmdb.org/t/p/w200/r8z0wQ1xP1n7BwDq025k03w8d3V.jpg"},
        {title: "Cisne Negro", year: 2010, genre: "Thriller/Drama", poster: "https://image.tmdb.org/t/p/w200/z08h2Q7w9s9t3V6y0v54s8h9q5m.jpg"},
        {title: "Corra!", year: 2017, genre: "Terror/Mistério", poster: "https://image.tmdb.org/t/p/w200/xVqC73h9n18eW8t9fG731kS465C.jpg"},
        {title: "Cães de Aluguel", year: 1992, genre: "Crime/Thriller", poster: "https://image.tmdb.org/t/p/w200/sQ6WwF98rU11I1gP1z22U0qY60m.jpg"},
        {title: "Cinderela", year: 2015, genre: "Fantasia/Romance", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Coração Valente", year: 1995, genre: "Guerra/Drama", poster: "https://image.tmdb.org/t/p/w200/5jH4tH8tG3S4t3t3e4v85V3f8jM.jpg"},
        {title: "Capitão América: Guerra Civil", year: 2016, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vUf07E52P69r9yXqWf2MvN2W8bY.jpg"},
        {title: "Cantando na Chuva", year: 1952, genre: "Musical/Comédia", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
        {title: "Closer: Perto Demais", year: 2004, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Casablanca", year: 1942, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
    ],
    'D': [
        {title: "Duna", year: 2021, genre: "Sci-Fi/Aventura", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Divertida Mente", year: 2015, genre: "Animação/Comédia", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Django Livre", year: 2012, genre: "Faroeste/Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Donnie Darko", year: 2001, genre: "Mistério/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Drive", year: 2011, genre: "Crime/Ação", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "De Volta Para o Futuro", year: 1985, genre: "Sci-Fi/Comédia", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Dredd", year: 2012, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/9eN641n2D4L68k3Qx3w9O7v9z8K.jpg"},
        {title: "Dia de Treinamento", year: 2001, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Doze Homens e Uma Sentença", year: 1957, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/oQ0O3Q88L7mYfU17W3K3fJ393yF.jpg"},
        {title: "Drácula de Bram Stoker", year: 1992, genre: "Terror/Romance", poster: "https://image.tmdb.org/t/p/w200/wS8I5W8j2eXQ5I0r908F0u5j8jM.jpg"},
    ],
    'E': [
        {title: "Era Uma Vez em Hollywood", year: 2019, genre: "Drama/Comédia", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "O Exorcista", year: 1973, genre: "Terror/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "E.T. O Extraterrestre", year: 1982, genre: "Fantasia/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Encontros e Desencontros", year: 2003, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "O Enigma de Outro Mundo", year: 1982, genre: "Terror/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Ela", year: 2013, genre: "Romance/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
        {title: "Em Ritmo de Fuga", year: 2017, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/oQ0O3Q88L7mYfU17W3K3fJ393yF.jpg"},
        {title: "Ensaio Sobre a Cegueira", year: 2008, genre: "Drama/Mistério", poster: "https://image.tmdb.org/t/p/w200/9eN641n2D4L68k3Qx3w9O7v9z8K.jpg"},
        {title: "Enrolados", year: 2010, genre: "Animação/Fantasia", poster: "https://image.tmdb.org/t/p/w200/5jH4tH8tG3S4t3t3e4v85V3f8jM.jpg"},
        {title: "Esqueceram de Mim", year: 1990, genre: "Comédia/Família", poster: "https://image.tmdb.org/t/p/w200/wS8I5W8j2eXQ5I0r908F0u5j8jM.jpg"},
    ],
    'F': [
        {title: "Forrest Gump: O Contador de Histórias", year: 1994, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Fábrica de Sonhos", year: 2010, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Fogo Contra Fogo", year: 1995, genre: "Crime/Thriller", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Fargo", year: 1996, genre: "Comédia/Crime", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Furiosa: Uma Saga Mad Max", year: 2024, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Filhos da Esperança", year: 2006, genre: "Sci-Fi/Drama", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Fúria em Duas Rodas", year: 2004, genre: "Ação/Aventura", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
        {title: "Fale Com Ela", year: 2002, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/oQ0O3Q88L7mYfU17W3K3fJ393yF.jpg"},
        {title: "Fences", year: 2016, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/9eN641n2D4L68k3Qx3w9O7v9z8K.jpg"},
        {title: "Feitiço do Tempo", year: 1993, genre: "Comédia/Fantasia", poster: "https://image.tmdb.org/t/p/w200/wS8I5W8j2eXQ5I0r908F0u5j8jM.jpg"},
    ],
    'G': [
        {title: "Gladiador", year: 2000, genre: "Ação/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Gravidade", year: 2013, genre: "Sci-Fi/Thriller", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Ghostbusters", year: 1984, genre: "Comédia/Fantasia", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Garota Exemplar", year: 2014, genre: "Thriller/Mistério", poster: "https://image.tmdb.org/t/p/w200/5jH4tH8tG3S4t3t3e4v85V3f8jM.jpg"},
        {title: "Guardiões da Galáxia Vol. 3", year: 2023, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vUf07E52P69r9yXqWf2MvN2W8bY.jpg"},
        {title: "Gattaca: A Experiência Genética", year: 1997, genre: "Sci-Fi/Drama", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
        {title: "Guerra Mundial Z", year: 2013, genre: "Terror/Ação", poster: "https://image.tmdb.org/t/p/w200/oQ0O3Q88L7mYfU17W3K3fJ393yF.jpg"},
        {title: "Get Out", year: 2017, genre: "Terror/Mistério", poster: "https://image.tmdb.org/t/p/w200/9eN641n2D4L68k3Qx3w9O7v9z8K.jpg"},
        {title: "Gângster Americano", year: 2007, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/wS8I5W8j2eXQ5I0r908F0u5j8jM.jpg"},
        {title: "Godzilla Minus One", year: 2023, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
    ],
    'H': [
        {title: "Homem-Aranha: Através do Aranhaverso", year: 2023, genre: "Animação/Ação", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Hotel Ruanda", year: 2004, genre: "Drama/Guerra", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Her", year: 2013, genre: "Romance/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Hereditário", year: 2018, genre: "Terror/Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Harry Potter e a Pedra Filosofal", year: 2001, genre: "Fantasia/Aventura", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "História Americana X", year: 1998, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "High Fidelity", year: 2000, genre: "Comédia/Romance", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "O Homem nas Trevas", year: 2016, genre: "Terror/Thriller", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Hulk", year: 2003, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/5jH4tH8tG3S4t3t3e4v85V3f8jM.jpg"},
        {title: "Homens de Preto", year: 1997, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vUf07E52P69r9yXqWf2MvN2W8bY.jpg"},
    ],
    'I': [
        {title: "Interestelar", year: 2014, genre: "Sci-Fi/Aventura", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Ilha do Medo", year: 2010, genre: "Mistério/Thriller", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "O Iluminado", year: 1980, genre: "Terror/Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Invencível", year: 2014, genre: "Biografia/Guerra", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Irmão Urso", year: 2003, genre: "Animação/Família", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Identidade Bourne", year: 2002, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Indiana Jones e Os Caçadores da Arca Perdida", year: 1981, genre: "Aventura", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Infiltrados", year: 2006, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Intocáveis", year: 2011, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Incêndios", year: 2010, genre: "Drama/Guerra", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'J': [
        {title: "Joker", year: 2019, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Jurassic Park", year: 1993, genre: "Sci-Fi/Aventura", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Jojo Rabbit", year: 2019, genre: "Comédia/Guerra", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "John Wick 4: Baba Yaga", year: 2023, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Jogos Vorazes", year: 2012, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Jackie Brown", year: 1997, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Jumanji", year: 1995, genre: "Aventura/Fantasia", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Juntos e Misturados", year: 2014, genre: "Comédia/Romance", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Juventude", year: 2015, genre: "Drama/Comédia", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "JFK: A Pergunta que Não Quer Calar", year: 1991, genre: "Mistério/Drama", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'K': [
        {title: "Kill Bill: Volume 1", year: 2003, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "King Kong", year: 2005, genre: "Aventura/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "K-PAX - O Caminho da Luz", year: 2001, genre: "Mistério/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Kick-Ass", year: 2010, genre: "Ação/Comédia", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Kimi", year: 2022, genre: "Thriller/Drama", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Klaus", year: 2019, genre: "Animação/Natal", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Krush Groove", year: 1985, genre: "Musical/Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Kundun", year: 1997, genre: "Biografia/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Kicking and Screaming", year: 1995, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Krampus: O Terror do Natal", year: 2015, genre: "Terror/Comédia", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'L': [
        {title: "La La Land: Cantando Estações", year: 2016, genre: "Musical/Drama", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Laranja Mecânica", year: 1971, genre: "Sci-Fi/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Logan", year: 2017, genre: "Ação/Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Lawrence da Arábia", year: 1962, genre: "Biografia/Aventura", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Livre", year: 2014, genre: "Biografia/Aventura", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Lendas da Paixão", year: 1994, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "O Labirinto do Fauno", year: 2006, genre: "Fantasia/Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "A Lista de Schindler", year: 1993, genre: "Histórico/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Léon: O Profissional", year: 1994, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "O Limite da Traição", year: 2018, genre: "Thriller/Ação", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'M': [
        {title: "Matrix", year: 1999, genre: "Sci-Fi/Ação", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Mad Max: Estrada da Fúria", year: 2015, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Missão: Impossível - Acerto de Contas Parte Um", year: 2023, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Moonlight", year: 2016, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Moon", year: 2009, genre: "Sci-Fi/Drama", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Meu Malvado Favorito", year: 2010, genre: "Animação/Comédia", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Manchester À Beira-Mar", year: 2016, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Máquina Mortífera", year: 1987, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Madrugada dos Mortos", year: 2004, genre: "Terror/Ação", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Milagre na Cela 7", year: 2019, genre: "Drama/Comédia", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'N': [
        {title: "Na Natureza Selvagem", year: 2007, genre: "Biografia/Aventura", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Nós", year: 2019, genre: "Terror/Mistério", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "O Nevoeiro", year: 2007, genre: "Terror/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Nove Rainhas", year: 2000, genre: "Thriller/Crime", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Nomadland", year: 2020, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Noite Americana", year: 1973, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Não Olhe Para Cima", year: 2021, genre: "Comédia/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Narcos: Colômbia", year: 2015, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Novato, O", year: 2002, genre: "Esporte/Drama", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Noivo Neurótico, Noiva Nervosa", year: 1977, genre: "Comédia/Romance", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'O': [
        {title: "Oppenheimer", year: 2023, genre: "Biografia/Drama", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "O Poderoso Chefão", year: 1972, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Oldboy", year: 2003, genre: "Ação/Mistério", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Oito Odiados", year: 2015, genre: "Faroeste/Mistério", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Onde os Fracos Não Têm Vez", year: 2007, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "O Resgate do Soldado Ryan", year: 1998, genre: "Guerra/Drama", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Os Outros", year: 2001, genre: "Terror/Mistério", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Os Incríveis", year: 2004, genre: "Animação/Ação", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Os Infratores", year: 2012, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Os Suspeitos", year: 1995, genre: "Mistério/Crime", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'P': [
        {title: "Parasita", year: 2019, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW"},
        {title: "Pulp Fiction: Tempo de Violência", year: 1994, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Psicose", year: 1960, genre: "Terror/Thriller", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Prenda-me Se For Capaz", year: 2002, genre: "Crime/Biografia", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "O Pianista", year: 2002, genre: "Biografia/Guerra", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Pantera Negra", year: 2018, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Passageiros", year: 2016, genre: "Sci-Fi/Romance", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Ponto de Decisão", year: 1996, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Procurando Nemo", year: 2003, genre: "Animação/Aventura", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Poder Além da Vida", year: 2006, genre: "Drama/Esporte", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'Q': [
        {title: "Quase Famosos", year: 2000, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Quem Quer Ser um Milionário?", year: 2008, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Que Horas Ela Volta?", year: 2015, genre: "Drama/Comédia", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Quatro Vidas de um Cachorro", year: 2017, genre: "Comédia/Família", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Quarteto Fantástico", year: 2005, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Queimando Tudo", year: 2014, genre: "Drama/Musical", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Questão de Tempo", year: 2013, genre: "Romance/Fantasia", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Quatro Amigas e um Jeans Viajante", year: 2005, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Quebrando a Banca", year: 2008, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Quarto", year: 2015, genre: "Drama/Thriller", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'R': [
        {title: "Rocky: Um Lutador", year: 1976, genre: "Drama/Esporte", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Réquiem Para um Sonho", year: 2000, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Rango", year: 2011, genre: "Animação/Comédia", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Ran", year: 1985, genre: "Ação/Guerra", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Rei Arthur: A Lenda da Espada", year: 2017, genre: "Aventura/Fantasia", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Rain Man", year: 1988, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Roubo nas Alturas", year: 2011, genre: "Comédia/Crime", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Rush: No Limite da Emoção", year: 2013, genre: "Biografia/Esporte", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "RoboCop", year: 1987, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Ratatouille", year: 2007, genre: "Animação/Comédia", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'S': [
        {title: "Seven: Os Sete Crimes Capitais", year: 1995, genre: "Crime/Mistério", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Star Wars: Uma Nova Esperança", year: 1977, genre: "Sci-Fi/Aventura", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Sociedade dos Poetas Mortos", year: 1989, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Super Mario Bros. - O Filme", year: 2023, genre: "Animação/Aventura", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Scarface", year: 1983, genre: "Crime/Drama", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Spotlight: Segredos Revelados", year: 2015, genre: "Drama/Histórico", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Sobre Meninos e Lobos", year: 2003, genre: "Mistério/Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Sexto Sentido, O", year: 1999, genre: "Mistério/Thriller", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Sweeney Todd: O Barbeiro Demoníaco da Rua Fleet", year: 2007, genre: "Musical/Terror", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Se Beber, Não Case!", year: 2009, genre: "Comédia", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'T': [
        {title: "Titanic", year: 1997, genre: "Romance/Drama", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Taxi Driver", year: 1976, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Toy Story", year: 1995, genre: "Animação/Comédia", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Três Anúncios Para um Crime", year: 2017, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Tropa de Elite", year: 2007, genre: "Ação/Crime", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Trainspotting", year: 1996, genre: "Drama/Comédia", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Terminator 2: Judgment Day", year: 1991, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Tudo em Todo Lugar ao Mesmo Tempo", year: 2022, genre: "Sci-Fi/Comédia", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Tron: Uma Odisseia Eletrônica", year: 1982, genre: "Sci-Fi/Aventura", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "A Travessia", year: 2015, genre: "Biografia/Aventura", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'U': [
        {title: "Um Sonho de Liberdade", year: 1994, genre: "Drama", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Uma Mente Brilhante", year: 2001, genre: "Biografia/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Up: Altas Aventuras", year: 2009, genre: "Animação/Aventura", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "O Ultimato Bourne", year: 2007, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Um Lugar Silencioso", year: 2018, genre: "Terror/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Um Dia", year: 2011, genre: "Romance/Drama", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Ultravioleta", year: 2006, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Unforgiven", year: 1992, genre: "Faroeste/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Underworld: Anjos da Noite", year: 2003, genre: "Ação/Fantasia", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "United 93", year: 2006, genre: "Histórico/Drama", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'V': [
        {title: "Vingadores: Ultimato", year: 2019, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "V de Vingança", year: 2006, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "A Vida É Bela", year: 1997, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Velocidade Máxima", year: 1994, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Vidas à Deriva", year: 2018, genre: "Romance/Drama", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Valente", year: 2012, genre: "Animação/Aventura", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Vazante", year: 2017, genre: "Drama/Histórico", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Vizinhos", year: 2014, genre: "Comédia", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Vertigo: Um Corpo que Cai", year: 1958, genre: "Mistério/Thriller", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Viagem a Darjeeling", year: 2007, genre: "Comédia/Aventura", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'W': [
        {title: "Whiplash: Em Busca da Perfeição", year: 2014, genre: "Drama/Musical", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Wall-E", year: 2008, genre: "Animação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "O Lobo de Wall Street", year: 2013, genre: "Biografia/Comédia", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Wonka", year: 2023, genre: "Fantasia/Musical", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Watchmen: O Filme", year: 2009, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Winter's Bone", year: 2010, genre: "Drama/Crime", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Warrior", year: 2011, genre: "Ação/Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Whisky", year: 2004, genre: "Comédia/Drama", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "A Viagem de Chihiro (Simulado W)", year: 2001, genre: "Animação/Fantasia", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Wiplash (Curta)", year: 2013, genre: "Drama/Musical", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'X': [
        {title: "X-Men: Dias de um Futuro Esquecido", year: 2014, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "XXX", year: 2002, genre: "Ação/Thriller", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Xanadu", year: 1980, genre: "Musical/Fantasia", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "X-Men: Primeira Classe", year: 2011, genre: "Ação/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Xuxa e os Duendes", year: 2001, genre: "Fantasia/Família", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "O Estranho Caso de Angélica (Simulado X)", year: 2010, genre: "Drama/Mistério", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "O Encontro (Simulado X)", year: 2003, genre: "Sci-Fi/Drama", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "O Expresso Polar (Simulado X)", year: 2004, genre: "Animação/Natal", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Extermínio (Simulado X)", year: 2002, genre: "Terror/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Exploradores (Simulado X)", year: 1985, genre: "Aventura/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'Y': [
        {title: "Yesterday", year: 2019, genre: "Comédia/Musical", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "You Were Never Really Here", year: 2017, genre: "Thriller/Drama", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Yentl", year: 1983, genre: "Musical/Drama", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Yi Yi: Um a Dois", year: 2000, genre: "Drama/Romance", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "Yakuza", year: 1974, genre: "Crime/Ação", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Yellow Submarine", year: 1968, genre: "Animação/Musical", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "Yoga Hosers", year: 2016, genre: "Comédia/Terror", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Young Guns", year: 1988, genre: "Faroeste/Ação", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Young Frankenstein", year: 1974, genre: "Comédia/Terror", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Youth Without Youth", year: 2007, genre: "Mistério/Drama", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    'Z': [
        {title: "Zootopia: Essa Cidade É o Bicho", year: 2016, genre: "Animação/Comédia", poster: "https://image.tmdb.org/t/p/w200/sK8L2fE6fU7xO7z80D2k3M4x6bW.jpg"},
        {title: "Zodíaco", year: 2007, genre: "Mistério/Crime", poster: "https://image.tmdb.org/t/p/w200/tC3H4e5Uu9d75i10p2S1oY65nIu.jpg"},
        {title: "Zumbilândia", year: 2009, genre: "Comédia/Terror", poster: "https://image.tmdb.org/t/p/w200/9oU9xW8O0pI1k91F11f42QoE3gV.jpg"},
        {title: "Zoolander", year: 2001, genre: "Comédia", poster: "https://image.tmdb.org/t/p/w200/vE8q1jXJm66l5kK3W8tM6lQ7e5O.jpg"},
        {title: "A Hora Mais Escura (Zero Dark Thirty)", year: 2012, genre: "Drama/Thriller", poster: "https://image.tmdb.org/t/p/w200/kSgA78vH04vEa2Gk13y172oE21p.jpg"},
        {title: "Zathura - Uma Aventura Espacial", year: 2005, genre: "Aventura/Sci-Fi", poster: "https://image.tmdb.org/t/p/w200/iL8g7iR1H3n6lO1z237u64gOQ8k.jpg"},
        {title: "A Última Fronteira (Simulado Z)", year: 2021, genre: "Sci-Fi/Aventura", poster: "https://image.tmdb.org/t/p/w200/5WcK7Vd2kQY71gE5Q4v09eO9r7x.jpg"},
        {title: "Zorba, o Grego", year: 1964, genre: "Drama/Comédia", poster: "https://image.tmdb.org/t/p/w200/3oQv7jH8XyQfO5n7F9g5X5x5V9g.jpg"},
        {title: "Zack Snyder's Justice League", year: 2021, genre: "Ação/Fantasia", poster: "https://image.tmdb.org/t/p/w200/oE8q8f18k19w0z8h984z1b44k6c.jpg"},
        {title: "Zardoz", year: 1974, genre: "Sci-Fi/Fantasia", poster: "https://image.tmdb.org/t/p/w200/r5sH65P2gXJp91c8g544h780b1Y.jpg"},
    ],
    // Faltam B, C, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. Para a simulação, o JS usará apenas a primeira letra do termo de busca.
};


document.addEventListener('DOMContentLoaded', () => {
    // Inicializa a lógica de busca apenas na página de resultados
    if (document.title.includes('Resultados da Busca')) {
        displaySearchResults();
    }
});

/**
 * Redireciona para a página de resultados (index3.html) com o termo de busca na query string.
 * Esta função é usada em TODAS as páginas (index.html, index2.html, index3.html)
 */
function searchMovie() {
    const input = document.getElementById('search-input');
    const query = input ? input.value.trim() : '';
    
    if (query) {
        // Redireciona para a página de resultados
        window.location.href = `index3.html?q=${encodeURIComponent(query)}`;
    } else {
        // Se estiver na página de busca e tentar buscar sem termo, alerta.
        if (document.title.includes('Resultados da Busca')) {
             alert('Por favor, digite um termo válido para buscar.');
        } else {
             alert('Por favor, digite um termo para buscar.');
        }
    }
}

/**
 * Exibe os resultados da busca na página index3.html
 * Filtra a lista de 260 filmes para mostrar apenas os 10 da letra inicial.
 */
function displaySearchResults() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    
    const titleElement = document.getElementById('results-title');
    const galleryContainer = document.getElementById('results-gallery');

    if (!query) {
        titleElement.innerHTML = "Nenhuma Busca Realizada";
        galleryContainer.innerHTML = '<p class="no-results-message">Utilize a barra de pesquisa acima para encontrar seus filmes e séries favoritos.</p>';
        return;
    }

    // 1. Lógica para filtrar o catálogo simulado
    // Usa a primeira letra do termo de busca (em maiúsculo) como chave
    const searchKey = query.toUpperCase().charAt(0);
    const results = movieCatalog[searchKey];

    titleElement.innerHTML = `Resultados da Busca para: "<span class="highlight">${query}</span>"`;

    if (results && results.length > 0) {
        // Exibe os resultados
        const htmlContent = results.map(movie => `
            <div class="movie-card" onclick="window.location.href='index4.html?movie=${encodeURIComponent(movie.title)}'">
                <img src="${movie.poster}" alt="Pôster de ${movie.title}">
                <div class="card-details">
                    <h3 class="movie-title">${movie.title}</h3>
                    <span class="movie-year">${movie.year}, ${movie.genre}</span>
                </div>
            </div>
        `).join('');

        galleryContainer.innerHTML = htmlContent;
    } else {
        // Exibe mensagem de não encontrado
        galleryContainer.innerHTML = `
            <p class="no-results-message">
                Nenhum filme ou série encontrado para "<span class="highlight">${query}</span>".
                <br>Tente um termo diferente.
            </p>
        `;
    }

    // Preenche o campo de busca com o termo atual, para usabilidade
    const searchInput = document.getElementById('search-input');
    if (searchInput && query) {
        searchInput.value = decodeURIComponent(query);
    }
}