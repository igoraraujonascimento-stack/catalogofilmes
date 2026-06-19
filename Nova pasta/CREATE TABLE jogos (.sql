CREATE TABLE jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    ano INT NOT NULL,
    genero VARCHAR(100) NOT NULL,
    plataforma VARCHAR(100) NOT NULL,
    capa TEXT NOT NULL
);
INSERT INTO jogos (titulo, ano, genero, plataforma, capa) VALUES
('Horizon Zero Dawn', 2017, 'Ação/RPG', 'PS4/PC', 'https://upload.wikimedia.org/wikipedia/pt/d/d0/Horizon_Zero_Dawn_capa.png'),

('The Witcher 3', 2015, 'RPG', 'PC/PS4/Xbox', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0luKkWyzTO6oBg_DBlhrjJQlYTD9Z3FoBw&s'),

('Stardew Valley', 2016, 'Indie', 'PC/Switch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeLlFQDTHsYjSHtbBsInAYl2aIF54Qz_8zQ&s'),

('Civilization VI', 2016, 'Estratégia', 'PC', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeXiZ-89M-aP8YGFTopi1hVoYkxNpTuRPBkw&s'),

('Celeste', 2018, 'Indie', 'PC/Switch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTyHwZALe0IbGg2IbjWTN7ox_ZxvoeqMVnQ&s'),

('God of War', 2018, 'Ação', 'PS4/PS5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROK0d2PfraYCSgZZ4gsjR_VElOaULWw14DQA&s'),

('Hades', 2020, 'Roguelike/Indie', 'PC/Switch', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1kYV-N_EFXMQpqzE06XeKuWph49kB3Udcuw&s'),

('Mario Kart 8', 2014, 'Corrida/Multiplayer', 'Switch', 'https://upload.wikimedia.org/wikipedia/pt/0/0d/MarioKart8.jpg');