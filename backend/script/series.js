const series = [
    {
        titulo: "Stranger Things",
        imagem: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
        descricao: "Uma série de ficção científica que segue um grupo de crianças em uma pequena cidade no ano de 1983."
    },
    {
            titulo:"Uma Família da Pesada",
            imagem:"https://media.themoviedb.org/t/p/w220_and_h330_face/j28XGzAhvJNGWEHbYrzvREw7kKd.jpg",
            descricao: "Uma comédia familiar sobre uma família que enfrenta diversos problemas e aventuras."
    },
    {
        titulo:"Rick and Morty",
        imagem:"https://media.themoviedb.org/t/p/w220_and_h330_face/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg",
        descricao: "Uma série de animação que segue as aventuras de um cientista louco e seu neto em diferentes dimensões."
    },
    {
        titulo: "supernatural",
        imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/eK4gEBWNGJoxCD67KFKzaKfSzWU.jpg",
        descricao: "Dois irmãos caçadores de criaturas sobrenaturais enfrentam demônios, fantasmas e outras entidades malignas."
    },
    {
        titulo: "Os Simpsons",
        imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
        descricao: "Uma série de animação que segue as aventuras de uma família de personagens icônicos."
    },
    {
        titulo: "peaky blinders",
        imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/i0uajcHH9yogXMfDHpOXexIukG9.jpg",
        descricao: "Uma série que segue a vida de um grupo de jovens em Birmingham no início do século XX."
    }
]

const listaSeries = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML = "";
    lista.forEach(série => {
        listaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                <img src="${série.imagem}" class="card-img-top">
                <div class="card-body">
                    <h3>${série.titulo}</h3>
                    <p>${série.descricao}</p>
                    <button class="btn btn-dark" onclick="verDetalhes('${série.titulo}')">Ver Detalhes</button>
                </div>
                </div>
            </div>
       `
    })
}

mostrarSeries(series)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais detalhes sobre o filme ",
        icon: "info",
    })
}