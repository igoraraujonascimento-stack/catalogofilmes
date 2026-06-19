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