DROP SCHEMA IF EXISTS albuns;
CREATE SCHEMA albuns;
USE albuns;

CREATE TABLE albuns (
	albuns_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    preco DECIMAL(4,2) NOT NULL DEFAULT 1.99,
    estilo_musical VARCHAR(15) NOT NULL,
    PRIMARY KEY (albuns_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE artistas (
	artistas_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    PRIMARY KEY (artistas_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE musicas (
	musicas_id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    duracao INT,
    PRIMARY KEY (musicas_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE album_artista (
	albuns_id SMALLINT UNSIGNED NOT NULL,
    artistas_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (albuns_id, artistas_id),
    CONSTRAINT fk_albuns_id FOREIGN KEY (albuns_id) REFERENCES albuns (albuns_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_artistas_id FOREIGN KEY (artistas_id) REFERENCES artistas (artistas_id) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARSET=utf8mb4;

CREATE TABLE musicas_do_album (
	albuns_id SMALLINT UNSIGNED NOT NULL,
    musicas_id SMALLINT UNSIGNED NOT NULL,
    PRIMARY KEY (albuns_id, musicas_id),
    CONSTRAINT fk_albuns_id FOREIGN KEY (albuns_id) REFERENCES albuns (albuns_id) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_musicas_id FOREIGN KEY (musicas_id) REFERENCES musicas (musicas_id) ON DELETE RESTRICT ON UPDATE CASCADE
) DEFAULT CHARSET=utf8mb4;
