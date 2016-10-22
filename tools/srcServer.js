/* eslint-disable no-console */

// app deps
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';
// socket.io deps
import http from 'http';
import socket_io from 'socket.io';

// app server configs
const app_port = 8000;
const app_server = express();
// socket.io server configs
const io_port = 8080;
const io_server = http.createServer();
// webpack compiler
const compiler = webpack(config);


/*  ------------------------------------------------------
										APPLICATION SERVER 
  ------------------------------------------------------ */

app_server.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app_server.use(require('webpack-hot-middleware')(compiler));

app_server.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app_server.listen(app_port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${app_port}`);
  }
});


/*  ------------------------------------------------------
										SOCKET.IO SERVER 
  ------------------------------------------------------ */

io_server.listen(io_port);
const io = socket_io();

io.attach(io_server);
io.on('connection', function(socket){
  console.log("Socket connected: " + socket.id);
  socket.on('action', (action) => {
    if(action.type === 'server/whatsup'){
      console.log(action.data);
      socket.emit('action', {type:'message', data:'websocket connection UP'});
    }
  });
});