const jogos = [
    {
        titulo: 'Horizon Zero Dawn', 
        ano: 2017, 
        genero: 'Ação/RPG', 
        plataforma: 'PS4/PC', 
        nota: 9.0, 
        capa: 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Horizon_Zero_Dawn_capa.png'
    },
    {
        titulo: 'The Witcher 3', 
        ano: 2015, 
        genero: 'RPG', 
        plataforma: 'PC/PS4/Xbox', 
        nota: 9.5, 
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0luKkWyzTO6oBg_DBlhrjJQlYTD9Z3FoBw&s'
    },
    {
        titulo: 'Stardew Valley', 
        ano: 2016, 
        genero: 'Indie', 
        plataforma: 'PC/Switch', 
        nota: 8.8, 
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeLlFQDTHsYjSHtbBsInAYl2aIF54Qz_8zQ&s'
    },
    {
        titulo: 'Civilization VI', 
        ano: 2016, 
        genero: 'Estratégia', 
        plataforma: 'PC', 
        nota: 8.7, 
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXiZ-89M-aP8YGFTopi1hVoYkxNpTuRPBkw&s'
    },
    {
        titulo: 'Celeste', 
        ano: 2018, 
        genero: 'Indie',
        plataforma: 'PC/Switch', 
        nota: 9.2, 
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTyHwZALe0IbGg2IbjWTN7ox_ZxvoeqMVnQ&s'
    },
    {
        titulo: 'God of War', 
        ano: 2018, 
        genero: 'Ação', 
        plataforma: 'PS4/PS5', 
        nota: 9.6, 
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROK0d2PfraYCSgZZ4gsjR_VElOaULWw14DQA&s'
    },
    {
        titulo: 'Hades', 
        ano: 2020, 
        genero: 'Roguelike/Indie', 
        plataforma: 'PC/Switch', nota: 9.1, 
        nota: 9.1, 
        capa: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kYV-N_EFXMQpqzE06XeKuWph49kB3Udcuw&s'
    },
    {
        titulo: 'Mario Kart 8', 
        ano: 2014, 
        genero: 'Corrida/Multiplayer', 
        plataforma: 'Switch', 
        nota: 8.9, 
        capa: 'https://upload.wikimedia.org/wikipedia/pt/0/0d/MarioKart8.jpg'
    }
];

const listaEl = document.getElementById('listaJogos');
const buscaEl = document.getElementById('campoBuscaJogos');
function renderizarJogos(arr){
    listaEl.innerHTML = '';
    if(!arr.length){
        listaEl.innerHTML = '<p class="text-muted">Nenhum jogo encontrado.</p>';
        return;
    }
    arr.forEach(j => {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        col.innerHTML = `
            <div class="card game-card h-100">
                <img src="${j.capa}" alt="${j.titulo}" class="card-img-top">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${j.titulo}</h5>
                    <p class="game-meta mb-2">${j.genero} • ${j.plataforma} • ${j.ano}</p>
                    <div class="mt-auto d-flex justify-content-between align-items-center">
                        <span class="badge bg-primary">Nota ${j.nota}</span>
                        <a href="#" class="btn btn-sm btn-outline-primary">Detalhes</a>
                    </div>
                </div>
            </div>
        `;
        listaEl.appendChild(col);
    })
}

function aplicarFiltros(){
    const termo = buscaEl.value.trim().toLowerCase();
    let resultado = jogos.filter(j => {
        return j.titulo.toLowerCase().includes(termo) || j.genero.toLowerCase().includes(termo) || j.plataforma.toLowerCase().includes(termo);
    });
    renderizarJogos(resultado);
}

renderizarJogos(jogos);
buscaEl.addEventListener('input', aplicarFiltros);
