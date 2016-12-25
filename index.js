var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers")

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

//injects route function of router into server
server.start(router.route, handle);
