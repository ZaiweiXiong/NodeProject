var wkhtmltopdf = require('wkhtmltopdf');
var fs = require('fs');
 
// URL 
//https://www.npmjs.com/package/wkhtmltopdf
//http://wkhtmltopdf.org/usage/wkhtmltopdf.txt
wkhtmltopdf('http://google.com/', { pageSize: 'letter' })
  .pipe(fs.createWriteStream('out.pdf'));
  
  wkhtmltopdf('<h1>Test</h1><p>Hello world</p>')
  .pipe(res);