-- 1 - Escreva uma query para exibir todas as peças que começam com GR .
SELECT * FROM Pecas where name like 'GR%';

-- 2 - Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por alfabética de fornecedor.
SELECT * FROM Fornecimentos where peca=2 order by Fornecedor;

-- 3 - Escreva uma query para exibir as peças e o preço de todos os fornecimentos em que o código do fornecedor tenha a letra N .
SELECT peca, Preco FROM Fornecimentos where Fornecedor like '%N%';

-- 4 - Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
SELECT * FROM Fornecedores where name like '%LTDA';

-- 5 - Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT count(code) FROM Fornecedores where name like '%F%';

-- 6 - Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
SELECT * FROM Fornecimentos where Preco between 15 and 40 order by Preco;

-- 7 - Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
SELECT * FROM Vendas where order_date between '2018-04-15' and '2019-07-30';
