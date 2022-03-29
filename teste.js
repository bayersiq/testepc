// const fs = require("fs");
// const fastCsv = require("fast-csv");

var a = "Bruno daniel pereira frandalozzo"
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}
console.log(a.shuffle())


// var array = []
// var options = {
// 	objectMode: true,
// 	delimiter : ";",
// 	delimiter : ","
// }
// fs.createReadStream("bolsistas.csv")
//   .pipe(fastCsv.parse(options))
//   .on("data", (data) => {
//     array.push(data);
// 	for(var i = 0; i <= 2; i++){
// 		array.find(nome => nome.nome)
// 	}
//   })