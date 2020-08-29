#!/bin/bash
#Exercicio 07
read -p "Informe o caminho de um arquivo ou diretorio que desja verificar: " FILEPATH

if [ -f $FILEPATH ] #-f verifica se o arquivo é um arquivo comum, dirotorio ou arquivo especial
then
echo "Esté é um arquivo comum!"
else
    if [ -ne -d $FILEPATH ] #-d verifica se o caminho é um diretorio
    then
        echo "Esté caminho NÃO É UM arquivo ou diretório!"
    else
        echo "Esté caminho é um diretório!"; cd $FILEPATH; ls -la|grep -e "^-"|wc -l     
    fi
fi
