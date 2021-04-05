

const fs = require('fs');

function readData(){

	fs.readFile('./personData.json', (err,data)=>{
		if (err){
			console.log('it doesnot work' + err.message);
			return;
		}
		let objekt = JSON.parse(data);
		console.log('Namn:'  + objekt.name );
		console.log('E-post:' + objekt.email);
	})
}

module.exports = readData; 
