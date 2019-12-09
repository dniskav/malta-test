const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = 4000;
const gameList = require('./data.json');

const server = http.createServer(app);

//webpack
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
app.use(
    webpackDevMiddleware(compiler)
);
//*

app.use(express.static(path.resolve('dist')));

app.get('/list', (req, res, next) => {
    res.json(gameList);
});

server.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.