var https = require('https')
var fs = require('fs')
https.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.write('hello Nodejs')
	res.end()
}).listen(2017)
	

gl_FragColor = vec(2.0,3.0,4.0,1.0)
gl.drawArrays(gl.POINTS,0,1)