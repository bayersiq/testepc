const fs = require("fs");
const fastCsv = require("fast-csv");

var array = []
var options = {
	objectMode: true,
	delimiter : ";",
	delimiter : ","
}
fs.createReadStream("bolsistas.csv")
  .pipe(fastCsv.parse(options))
  .on("data", (data) => {
    array.push(data);
	for(var i = 0; i <= 2; i++){
		array.find(nome => nome.nome)
	}
  })
  

  function retornaNome(nome){
	  return nome.nome == "LUCIMAR RIBEIRO DE MATO"
  }