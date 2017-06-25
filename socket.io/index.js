var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log(socket.id);
	console.log('user connected');
  socket.on('aa', function(msg){
  	console.log(msg);
    io.emit('bb', msg);
  });
  socket.on('disconnect',function(){
  	console.log('user disconnected!!!');
  })
});

