#!/bin/bash
#exercicio bonus 01

read -p "Digite a quantidade de vezes que você deseja que repita o comando: " CONT

for N in {1..CONT};
do

done

#!/bin/bash 
FILES=$@ for FILE in $FILES 
do
    if [ -f "$FILE" ] then echo "$FILE é um arquivo comum" elif [ -d "$FILE" ] then echo "$FILE é um diretório" else echo "$FILE é alguma outra coisa" fi ls -l $FILE done ```