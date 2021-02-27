-- 2 - Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , action e log_date ).
USE BeeMovies;
-- DROP TRIGGER IF EXISTS trigger_compara_alteracao;
DELIMITER $$

CREATE TRIGGER trigger_compara_alteracao
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs(movie_id, `action`, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;
UPDATE movies SET ticket_price = 13 WHERE movie_id=1;
