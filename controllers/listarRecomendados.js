const livros = require('../database')
const read = require('readline-sync')

const listarRecomendados = () => {
    const opcaoInicial = read.question('Deseja listar os livros recomendados? S/N: ').toUpperCase()

    if (opcaoInicial === 'S') {

        const recomendados = livros.filter(livro => livro.leu == true && livro.recomenda == true )
        console.table(recomendados)
        
    }

}


module.exports = listarRecomendados