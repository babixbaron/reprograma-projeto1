const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const opcaoInicial = read.question('Acessar lista de desejos? S/N: ').toUpperCase()

    if (opcaoInicial === 'S') {

        const naoLidos = livros.filter(livro => livro.leu == false)    
        console.table(naoLidos)    
    }

}

module.exports = listarLivrosNaoLidos