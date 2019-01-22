describe('Broswer_Commands', function() {it('should be created', function() { 
browser.get('http://cafetownsend-angular-rails.herokuapp.com/login'); 
browser.restart(); 
browser.get('http://cafetownsend-angular-rails.herokuapp.com/login'); 
browser.getCurrentUrl().then(function (res) {   console.log('Current URL is - ' + res); }); 
browser.getPageSource().then(function (res) {   console.log('Page source code is - ' + res); }); 
browser.getTitle().then(function (res) {   console.log('Current URL is - ' + res); }); 
browser.refresh(); 
browser.sleep(5000); 
var fs = require('fs'); 
        	function writeScreenShot(data, filename) {   
        	var stream = fs.createWriteStream(filename); stream.write(new Buffer(data, 'base64')); stream.end();  
        	}    
        	 
        	browser.takeScreenshot().then(function (png) {  
        	writeScreenShot(png, 'image.jpg');     }); 
browser.close(); 
});});