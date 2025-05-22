const fs = require('fs');
const { parse } = require('csv-parse');

function lerCsv(caminho){
    const conteudo = fs.readFileSync(caminho)
    const registros = parse(conteudo, {
        columns: true,
        skip_empty_lines: true
    })
    return registros;
}

module.exports = { lerCsv }