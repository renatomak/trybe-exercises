#!/bin/bash
#Exercicios 14/08/2020 em dupla
#Exercicios para verificar caminho passado pelo usuario
FILEPATH="/home/renato/Documents/PROJETOS/novoDiretorio/arquivo.txt";
if [ "$FILEPATH" ]
then
echo "O caminho " $FILEPATH " está habilitado!"
else
echo "O caminho não existe!"
fi
if [ -w $FILEPATH ]
then
echo "Você tem permissão para editar $FILEPATH"
else 
echo "Você NÃO foi autorizado a editar $FILEPATH"
fi
