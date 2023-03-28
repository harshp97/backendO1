const functions = require("firebase-functions");
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/'){
      res.statusCode = 200;
      res.write('<h1>This is Home.</h1>');
      res.end();
    }
    else if(req.url == '/api/courses'){
      //res.write(JSON.stringify([1,2,3]));
      res.statusCode = 200;
      res.end(JSON.stringify([1, 2, 3]));
    }
    else{
      res.statusCode = 404;
      res.end('<h1>Page not found</h1>');
    }
});

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
