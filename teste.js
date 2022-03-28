var fs = require('fs'); 
const {parse} = require('csv-parse');
var parser = parse({columns: true}, function (err, records) {
	console.log(records);
});

fs.createReadStream('bolsistas.csv').pipe(parser);