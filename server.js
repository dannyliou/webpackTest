var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.server.config')
var express = require('express');
var request = require('request');

var app = new (require('express'))()
var bodyParser = require('body-parser');
var port = 4000

var compiler = webpack(config)
app.use('/lib', express.static('lib'))
app.use('/img', express.static('js'))
app.use(express.static('static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


var os = require('os');
var ifaces = os.networkInterfaces();
var localIP = '127.0.0.1';
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      // console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      // console.log(ifname, iface.address);
    }
    if (ifname === 'eth0') {
        localIP = iface.address;
    }
    ++alias;
  });
});


app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port,localIP, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up %s:%s/ in your browser.", port, localIP,port)
  }
});
