const read = require('readline-sync')
const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarRecomendados = require('./controllers/listarRecomendados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

const resposta = read.question(`

=-=-=-=-=-=-=-=-=-=- MENU -=-=-=-=-=-=-=-=-=-=

1 - CATEGORIA: Buscar livros por categoria
2 - ORDENAR: Ordenar livros por quantidade de paginas
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJOS: Busca livros nao lidos

5 - SAIR

Digite um numero [1-5]: 

`)

switch (resposta) {
    case '1': 
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default: 
        console.log('Até logo!')
        break
}





