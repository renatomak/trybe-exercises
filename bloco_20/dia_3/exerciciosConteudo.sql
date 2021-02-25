--Dia 3
-- 1 - Precisamos identificar o cliente com o e-mail LEONARD.SCHOFIELD@sakilacustomer.org .
SELECT first_name, last_name FROM customer
WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';

--2 - Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
SELECT * FROM sakila.customer
WHERE active=false AND store_id=2 AND first_name<>'KENNETH';

-- 3 - O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares.
SELECT description, release_year, rating FROM sakila.film
WHERE (rating='PG' AND rating='G' and replacement_cost<18) order by replacement_cost DESC limit 100;

-- 4 - Quantos clientes estão ativos e na loja 1?
SELECT count(customer_id) FROM sakila.customer
WHERE store_id=1 AND active=true;

-- 5 - Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
SELECT * FROM sakila.customer
WHERE store_id=1 AND active=false;

-- 6 - Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes.
SELECT * FROM film 
where rating='R' order by rental_rate DESC limit 50;

-- usando o LIKE
-- 1 - Encontre todos os detalhes dos filmes que contêm a palavra " ace " no nome.
SELECT * FROM film 
where description like '%ace%';

-- 2 - Encontre todos os detalhes dos filmes cujas descrições finalizam com " china ".
SELECT * FROM film 
where description like '%china';

-- 3 - Encontre todos os detalhes dos dois filmes cujas descrições contêm a palavra " girl " e o título finaliza com a palavra " lord ".
SELECT * FROM film 
where description like '%china%' and title like '%lord';


-- 6 - Encontre os dois filmes cujos títulos ou finalizam com " academy " ou inciam com " mosquito ".

SELECT * FROM film 
where title like '%academy' or title like 'mosquito%';

-- 7 - Encontre os seis filmes que contêm as palavras " monkey " e " sumo " em suas descrições.

-- Englobando uma faixa de resultados com IN e BETWEEN
-- 1 - Encontre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
SELECT * FROM customer
where last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales','kennedy')
order by last_name DESC;

-- 2 - Encontre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
SELECT email FROM customer
where address_id IN (172, 173, 174, 175, 176)
order by email;

-- 3 - Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT count(payment_id) FROM payment
where payment_date between '2005/05/01' AND '2005/08/01';

-- 4 - Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
SELECT title, release_year, rental_duration FROM film
where rental_duration
between 3 and 6 order by rental_duration;

-- 5 - Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade. Os resultados devem estar ordenados por classificação mais abrangente primeiro.
SELECT title, rating FROM film where rating='PG' OR rating='G' ORDER BY rating;

-- Encontrando e separando resultados que incluem datas
-- 1 - Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.
SELECT count(rental_id) FROM sakila.rental where return_date like '2005-08-29%';

-- 2 - Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005 ?
select count(rental_id) from rental where rental_date between '2005/07/01' and '2005/08/22';

-- 3 - Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
select date(rental_date), year(rental_date),
month(rental_date), day(rental_date),
hour(rental_date), minute(rental_date) from rental
where rental_id=10330;

-- 4 - Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
select rental_id, rental_date from rental
where rental_date like '2005-08-18 00:14:03';
