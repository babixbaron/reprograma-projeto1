const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const opcaoInicial = read.question('Deseja ordenar por numero de paginas? S/N: ').toUpperCase()

    if (opcaoInicial === 'S') {

        const ordenados = livros.sort((a,b) => a.paginas - b.paginas)

        console.table(ordenados)
        
    }
}

module.exports = listarLivrosOrdenados