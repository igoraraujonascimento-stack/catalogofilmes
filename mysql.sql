create database catalogo;
use catalogo;
create table filmes (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table series (
id int auto_increment primary key,
titulo varchar(100) not null unique,
imagem text,
descricao text
);

create table jogos (
id int auto_increment primary key,
titulo VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    genero VARCHAR(100) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    capa TEXT NOT NULL
);

select * from filmes;
insert into filmes (titulo, imagem, descricao)
values
("Batman", "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg", "o cavalheiro das trevas enfrenta o crime em Gotham Cit."),
("Vingadores: unidos", "https://image.tmdb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg", "Os Vingadores se reúnem para enfrentar uma nova ameaça."),
("Homem-Aranha: sem Volta para Casa", "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpgh", "Peter Parker enfrenta as consequências de sua identidade secreta ser revelada."),
("Super Mario Bros. O Filme", "https://media.themoviedb.org/t/p/w300_and_h450_face/ij8sapIEbLf2g8npOu6XgsQS2w0.jpg", "Transportados do Brooklyn para o Reino Cogumelo num passe de mágica, dois corajosos encanadores conhecem uma princesa e combatem um tirano que cospe fogo."),
("Dragon Ball Super: Super Hero", "https://media.themoviedb.org/t/p/w300_and_h450_face/FiqBRypTDyHzqcxdbpPb3ddFep.jpg", "O exército Red Ribbon havia sido destruído por Son Goku... Mas certos indivíduos decidiram levar adiante sua missão e criaram os androides supremos: Gamma 1 e Gamma 2. Estes dois androides - que se intitulam super-heróis - decidem atacar Piccolo e Gohan! Qual será o objetivo do Novo Exército Red Ribbon? Quando o perigo é iminente, é então que desperta o Super-Herói!"),
("Michael", "https://media.themoviedb.org/t/p/w300_and_h450_face/dueFqKLvjftnELZaGYwY7xinfaI.jpg", "A história da vida de Michael Jackson além da música, traçando sua jornada desde a descoberta de seu talento extraordinário como líder dos Jackson Five até o artista visionário cuja ambição criativa impulsionou uma busca implacável para se tornar o maior artista do mundo.");

select * from series;
insert into series (titulo, imagem, descricao)
values
("Stranger Things", "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg", "Uma série de ficção científica que segue um grupo de crianças em uma pequena cidade no ano de 1983."),
("Uma Família da Pesada", "https://media.themoviedb.org/t/p/w220_and_h330_face/j28XGzAhvJNGWEHbYrzvREw7kKd.jpg", "Uma comédia familiar sobre uma família que enfrenta diversos problemas e aventuras."),
("Rick and Morty", "https://media.themoviedb.org/t/p/w220_and_h330_face/5qfd0e2uMbVInX3YdeFbDsfxi1t.jpg", "Uma série de animação que segue as aventuras de um cientista louco e seu neto em diferentes dimensões."),
("supernatural", "https://media.themoviedb.org/t/p/w220_and_h330_face/eK4gEBWNGJoxCD67KFKzaKfSzWU.jpg", "Dois irmãos caçadores de criaturas sobrenaturais enfrentam demônios, fantasmas e outras entidades malignas."),
("Os Simpsons", "https://media.themoviedb.org/t/p/w220_and_h330_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg", "Uma série de animação que segue as aventuras de uma família de personagens icônicos."),
("peaky blinders", "https://media.themoviedb.org/t/p/w220_and_h330_face/i0uajcHH9yogXMfDHpOXexIukG9.jpg", "Uma série que segue a vida de um grupo de jovens em Birmingham no início do século XX.");

select * from jogos;
insert into jogos (titulo, ano, genero, plataforma, capa) 
values
("Horizon Zero Dawn", 2017, "Ação/RPG", "PS4/PC", "https://upload.wikimedia.org/wikipedia/pt/d/d0/Horizon_Zero_Dawn_capa.png"),
("The Witcher 3", 2015, "RPG", "PC/PS4/Xbox", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0luKkWyzTO6oBg_DBlhrjJQlYTD9Z3FoBw&s"),
("Stardew Valley", 2016, "Indie", "PC/Switch", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeLlFQDTHsYjSHtbBsInAYl2aIF54Qz_8zQ&s"),
("Civilization VI", 2016, "Estratégia", "PC", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXiZ-89M-aP8YGFTopi1hVoYkxNpTuRPBkw&s"),
("Celeste", 2018, "Indie", "PC/Switch", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTyHwZALe0IbGg2IbjWTN7ox_ZxvoeqMVnQ&s"),
("God of War", 2018, "Ação", "PS4/PS5", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROK0d2PfraYCSgZZ4gsjR_VElOaULWw14DQA&s"),
("Hades", 2020, "Roguelike/Indie", "PC/Switch", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kYV-N_EFXMQpqzE06XeKuWph49kB3Udcuw&s"),
("Mario Kart 8", 2014, "Corrida/Multiplayer", "Switch", "https://upload.wikimedia.org/wikipedia/pt/0/0d/MarioKart8.jpg");