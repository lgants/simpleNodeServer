var server = require("./server");
var router = require("./router");

//injects route function of router into server 
server.start(router.route);
