(function() {
  var 
    inFile,
    outFile,
    args = process.argv;

  if (args.length < 3) {
    console.log('You forgot to provide a haml file.');
    return;
  }

  inFile = args[2];

  var Haml = require('haml'),
      fs = require('fs');
  
  var haml = fs.readFileSync(inFile, 'utf8');

  outFile = inFile.replace(/.haml$/i, '.html');
  
  fs.writeFile(outFile, Haml.render(haml), function(err) {
    if (err) {
      console.log(err);
    }
  });
}());
