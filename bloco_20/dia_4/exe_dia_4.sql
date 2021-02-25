-- Exercicios do dia 4
-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :
insert into Movies (title, director, `year`, `length_minutes`)
values ('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo','John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .
insert into BoxOffice
values(9, 6.8, 450000000, 370000000);

-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .
update Movies set director='Andrew Staton' where title='Procurando Nemo' and id=9;

-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .
update Movies set title='Ratatouille', `year`=2007 where title='ratatui' and id=3;

-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :
-- Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
-- Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
-- WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
-- Exemplo de consulta aninhada: select * from BoxOffice as B, Movies as M where B.movie_id=M.id in (select id from Movies where title='Monstros SA');
insert into BoxOffice 
values((select id from Movies where title='Os Incríveis'), 7.4, 460000000, 510000000),
((select id from Movies where title='WALL-E'), 9.9, 290000000, 280000000);

-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".
delete from BoxOffice where movie_id in (select id from Movies where title='WALL-E');
delete from Movies where title='WALL-E' and id=11;

-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".
delete from BoxOffice where movie_id in (2, 9);
delete from Movies where id in (2, 9);

-- Exercício 8 : Altere a classificação da tabela BoxOffice para 9.0 de todos os filmes que lucraram mais de 400 milhões no mercado interno.
SET SQL_SAFE_UPDATES = 0;

update BoxOffice set rating=9.0 where domestic_sales>400000000;

-- Exercício 9 : Altere a classificação da tabela BoxOffice para 6.0 de todos os filmes que lucraram menos de 300 milhões no mercado internacional e mais de 200 milhões no mercado interno.

where `international_sales`<300000000 AND `international_sales`>200000000;

-- Exercício 10 : Exclua da tabela Movies todos os filmes com menos de 100 minutos de duração.
SET SQL_SAFE_UPDATES = 0;
delete from BoxOffice where movie_id in (select id from Movies where length_minutes<100);
delete from Movies where length_minutes<100;


