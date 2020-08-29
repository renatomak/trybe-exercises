#!/bin/bash
#Exercicio 05
#read -p "Informe o caminho de um arquivo ou diretorio que desja verificar: " FILEPATH
FILEPATH=$1 

if [ -f $FILEPATH ] #-f verifica se o arquivo é um arquivo comum, dirotorio ou arquivo especial
then
echo "Esté é um arquivo comum!"
else
    if [ -d $FILEPATH ] #-d verifica se o caminho é um diretorio
    then
        echo "Esté caminho é um diretório!"
    else
        echo "Esté caminho NÃO É UM arquivo ou diretório!"
    fi
fi
cd $FILEPATH
ls -la
