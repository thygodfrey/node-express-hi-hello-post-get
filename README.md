# node-express-hi-hello-post-get

Tried using cURL for this where once the server is running, I can use the command: 'curl http://localhost:3000/hello?name=John' where its response will be "Hi, John!" once ran.

The checkHeader middleware inspects the x-blokc-key header and returns a 401 unauthorized response if it's not present. This middleware is then used in the POST /hi endpoint.
The default exception handler is used to catch any unhandled errors in the application and send a 500 Internal Server Error response.
