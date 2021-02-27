-- STORED PROCEDURE - 1 - Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
USE sakila;
DELIMITER $$

CREATE PROCEDURE Exibir10AtoresMaisPopulares()
BEGIN
	SELECT actor_id, COUNT(*) Qtd FROM film_actor GROUP BY actor_id;
END $$

DELIMITER ;
CALL Exibir10AtoresMaisPopulares();
-- STORED PROCEDURE - 2 - Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ExibirDetalheDosFilmes(IN categoria VARCHAR(200))
BEGIN
	SELECT f.film_id, f.title, c.category_id, c.`name`
    FROM film f, film_category fc, category c
    WHERE c.`name`=categoria AND c.category_id=fc.category_id AND f.film_id=fc.film_id;
END $$

DELIMITER ;

CALL ExibirDetalheDosFilmes('Action');

-- STORED PROCEDURE - 3 - Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
USE sakila;
DELIMITER $$

CREATE PROCEDURE VerificarStatusPorEmail(IN emailRecebido VARCHAR(50), OUT situacao VARCHAR(100))
BEGIN
	SELECT IF(`active`, 'Cliente Ativo!', 'Cliente Inativo!') INTO situacao
    FROM customer
    WHERE email=emailRecebido;
END $$

DELIMITER ;
CALL VerificarStatusPorEmail('SANDRA.MARTIN@sakilacustomer.org', @situacao);
SELECT @situacao;

-- FUNCTIONS - 1 - Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION QuantidadeTotalDePagamentosFeitosPorId(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE total INT;
	SELECT COUNT(amount) FROM payment WHERE customer_id = id
    INTO total;
    RETURN total;
END $$

DELIMITER ;
SELECT QuantidadeTotalDePagamentosFeitosPorId(2);
-- FUNCTIONS - 2 - Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila;
DELIMITER $$

CREATE FUNCTION BuscarFilmePorId(id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
	DECLARE filme VARCHAR(200);
    SELECT f.title FROM film f, inventory i
    WHERE i.film_id=f.film_id AND i.film_id=id
    LIMIT 1
    INTO filme;
    RETURN filme;
END $$

DELIMITER ;
SELECT BuscarFilmePorId(1);

-- FUNCTIONS - 1 - Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila;
DELIMITER &&

CREATE FUNCTION BuscarQuantidadeFilmesPorCategoria(categoria VARCHAR(200))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidadePorCategoria INT;
    SELECT COUNT(*) 
    FROM film f, film_category fc, category c
    WHERE c.`name`=categoria AND f.film_id=fc.film_id AND c.category_id=fc.category_id 
    INTO quantidadePorCategoria;
    RETURN quantidadePorCategoria;
END &&

DELIMITER ;
SELECT BuscarQuantidadeFilmesPorCategoria('Action');
