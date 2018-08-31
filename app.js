const http = require('http');

const config =  require('./mmodule/config');
const helpers =  require('./mmodule/helper');

http.createServer(helpers.onRequest).listen(config.port);
