const filmes = [ {
        titulo: "Batman",
        imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        descricao: "o cavalheiro das trevas enfrenta o crime em Gotham Cit."
    },
    {
        titulo: "Vingadores: unidos",
        imagem: "https://image.tmdb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg",
        descricao: "Os Vingadores se reúnem para enfrentar uma nova ameaça."
    },
    {
        titulo: "Homem-Aranha: sem Volta para Casa",
        imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        descricao: "Peter Parker enfrenta as consequências de sua identidade secreta ser revelada."
    },
    {
        titulo: "Super Mario Bros. O Filme",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/ij8sapIEbLf2g8npOu6XgsQS2w0.jpg",
        descricao: "Transportados do Brooklyn para o Reino Cogumelo num passe de mágica, dois corajosos encanadores conhecem uma princesa e combatem um tirano que cospe fogo."
    },
    {
        titulo: "Dragon Ball Super: Super Hero",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/FiqBRypTDyHzqcxdbpPb3ddFep.jpg",
        descricao: "O exército Red Ribbon havia sido destruído por Son Goku... Mas certos indivíduos decidiram levar adiante sua missão e criaram os androides supremos: Gamma 1 e Gamma 2. Estes dois androides - que se intitulam super-heróis - decidem atacar Piccolo e Gohan! Qual será o objetivo do Novo Exército Red Ribbon? Quando o perigo é iminente, é então que desperta o Super-Herói!"
    },
    {
        titulo: "Michael",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/dueFqKLvjftnELZaGYwY7xinfaI.jpg",
        descricao: "A história da vida de Michael Jackson além da música, traçando sua jornada desde a descoberta de seu talento extraordinário como líder dos Jackson Five até o artista visionário cuja ambição criativa impulsionou uma busca implacável para se tornar o maior artista do mundo."
    }
]
const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = "";
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                <img src="${filme.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${filme.titulo}</h3>
                    <p>${filme.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver Detalhes</button>
                </div>
                </div>
            </div>
       `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais detalhes sobre o filme ",
        icon: "info",
    })
}

const minhasBtn = document.getElementById('minhasSeriesBtn');
let mostrandoSeries = false;
const series = [];

if (minhasBtn) {
    minhasBtn.addEventListener('click', () => {
        if (mostrandoSeries) {
            mostrarFilmes(filmes);
            document.querySelector('header h1').textContent = 'Catalogo de Filmes';
            minhasBtn.textContent = 'Minhas séries';
            mostrandoSeries = false;
        } else {
            if (series.length === 0) {
                Swal.fire({
                    title: 'Minhas séries',
                    text: 'Nenhuma série salva.',
                    icon: 'info'
                });
            } else {
                mostrarFilmes(series);
                document.querySelector('header h1').textContent = 'Catálogo de Séries';
                minhasBtn.textContent = 'Voltar';
                mostrandoSeries = true;
            }
        }
    });
}