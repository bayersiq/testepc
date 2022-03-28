const fs = require("fs");
const fastCsv = require("fast-csv");
var readline = require('readline');

var rl = readline.createInterface(
	process.stdin, process.stdout);

const options = {
    objectMode: true,
    delimiter: ";",
    quote: null,
    headers: true,
    renameHeaders: false,
  };

  const data = [];

fs.createReadStream("bolsistas.csv")
  .pipe(fastCsv.parse(options))
  .on("error", (error) => {
    console.log(error);
  })
  .on("data", (row) => {
    //console.log(data.length)
    data.push(row);
  })
  .on("end", (rowCount) => {
    //console.log(rowCount);
    //console.log(data);
  });

  rl.question('Informe o ano de pesquisa: ', (bolsista_ano) => {

    const result = data.find(ano => ano.AN_REFERENCIA == bolsista_ano);
    console.log('\nNome: ' + result.NM_BOLSISTA + '\nCPF: ' + result.CPF_BOLSISTA + '\nEntidade de Ensino: ' + result.NM_ENTIDADE_ENSINO
    + '\nValor da bolsa: ' + result.CD_MOEDA + result.VL_BOLSISTA_PAGAMENTO);

    rl.question('\nDigite o nome do bolsista: ', (bolsista_nome) => {

        const result_nome = data.find(nome => nome.NM_BOLSISTA == bolsista_nome)

        //ESCREVER CODIFICAÇÃO DO NOME E VER A PARTE DA ACENTUAÇÃO

        console.log('\nNome: ' + result_nome.NM_BOLSISTA + '\nAno: ' + result_nome.AN_REFERENCIA + '\nEntidade de Ensino: ' + result_nome.NM_ENTIDADE_ENSINO
    + '\nValor da bolsa: ' + result_nome.CD_MOEDA + result_nome.VL_BOLSISTA_PAGAMENTO);

        rl.question('\nInforme o ano de consulta para a média dos valores: ', (media_ano) => {

            //DESENVOLVER MÉDIA

            rl.question('\nDeseja visualizar o ranking de valores da bolsa? S/N' + '\n', (questao) => {

                if(questao == 'S'){
                    
                    var maximos = data.VL_BOLSISTA_PAGAMENTO.map(Number).reduce(function(a, b){
                        return Math.max(a, b)
                        console.log(max);
                    });

                } else {
                    console.log("\nObrigado por utilizar o programa :)")  
                }
                rl.close();
            });
        });
    });
});
