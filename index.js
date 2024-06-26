var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on("connection", (socket) => {

	//Identificando desconexao
	socket.on("disconnect", () => {
		console.log("X desconectou: " + socket.id);
	});


	socket.on("mensagem", (data) => {
		io.emit("showmsg", data); //Emitir para todos a partir do servidor
		console.log(data)
	});

});

app.set("view engine", "ejs");


app.get('/', (req, res) => {
	res.render("index")
});


http.listen(3000, () => {
	console.log("app running...")
});