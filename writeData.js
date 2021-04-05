const fs = require('fs');

function writeData(){

	console.log('Write your name and email');

	let state = 'get name';
	// let count = 0;
	let name, email;
	process.stdin.on('data', data =>{
		let string = data.toString().trim();
		// console.log('this is from users:  ' + string);

		if(state === 'get name'){
			name = string;
			state = 'get email'
		}
		else if (state ==='get email') {
			email= string;
			console.log(name, email);
			writeToFile({name, email})
			state = 'done'
			process.stdin.pause()
		}

	})
	process.stdin.resume()

}
function writeToFile(object){

	fs.writeFile('./personData.json', JSON.stringify(object), err=>{
		if(err) console.log('cant find the file ' + err.message);
	})

}

module.exports = writeData;
