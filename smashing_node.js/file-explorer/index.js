
/* index.js */

/**
* Module dependencies.
*/
var fs = require("fs")
  , stdin = process.stdin
  , stdout = process.stdout


fs.readdir(process.cwd(), function (err, files) {
	console.log("");
	if (!files.length) {
		return console.log("\033[31m No files to show!\033[39m\n");
	}
	
	console.log("Select which file or directory you want to see\n");

	var stats = {};

	// called for each file walked in the directory
	function file(i) {
		var filename = files[i];
		
		fs.stat(__dirname + "/" + filename, function (err, stat) {
				
		// save the statistics data on the current fs object (file or directory)
		stats[i] = stat;
		
		if (stat.isDirectory()) {
			console.log(" " + i + " \033[36m" + filename + "/\033[39m");
		} else {
			console.log(" " + i + " \033[90m" + filename + "\033[39m");
		}
			
			if (++i == files.length) {
				read();
			} else {
				file(i);
			}
		});
	}

	function read() {
		console.log("");
		process.stdout.write(" \033[33mEnter your choice: \033[39m");
		
		process.stdin.resume();
		process.stdin.setEncoding("utf8");
		
		process.stdin.on('data', option);
	}

	// called with the option parameter supplied by the user
	function option(data) {
		var filename = files[Number(data)];	
		if(!filename) {
			process.stdout.write(" \033[33mEnter your choice: \033[39m");
		}
		else {
			stdin.pause();

			if(stats[Number(data)].isDirectory()) {
				fs.readdir(__dirname + '/' + filename, function (err, files) {
					console.log('');
					console.log('        (' + files.length + ' files');
					files.forEach( function (file) {
						console.log(' -     ' + file);
					});
					console.log('');
				});
			}
			else {
				fs.readFile(__dirname + '/' + filename, 'utf8', function (err, data) {
					console.log('');
					console.log('\033[90m' + data.replace(/(.*)/g, '        $1') + '\033[39m');
				});
			}
		}
	}	
	
	// start by walking the first file	
	file(0);
});
