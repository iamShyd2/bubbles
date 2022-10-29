const express = require('express');
const path = require('path');

if(process.NODE_ENV !== "production"){

  const livereload = require("livereload");
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, 'public'));

  const connectLivereload = require("connect-livereload");

  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLivereload());

}

const port = 3000;

const app = express();


app.use(express.static('public'));

const env = process.env.NODE_ENV;

app.get('/', function (req, res) {

  res.sendFile(path.join(__dirname, '/public/index.html'));

});

console.log(port);
module.exports = app.listen(port);
