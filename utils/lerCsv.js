const fs = require('fs')
const { parse } = require('csv-parse/sync')

function lerCsv(caminho){
    const conteudo = fs.readFileSync(caminho, 'utf-8')
    const registros = parse(conteudo, {
        columns: true,
        skip_empty_lines: true
    })
    return registros
}

// Exemplo de uso
// const dados = lerCsv('fixtures/csv/massaProdutos.csv');
// console.log(dados);

module.exports = { lerCsv }