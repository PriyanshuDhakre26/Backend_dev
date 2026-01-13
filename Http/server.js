const http=require('http');
// const server=http.createServer((req,res)=>{
//    console.log("url"+req.url);
//    console.log("method"+""+req.method);
//    res.writeHead(200,{'Content-Type':'text/plain','userInfo':'MyNodeServer'});
//    res.end('Hello World');
// });

// const server=http.createServer((req,res)=>{
//     if(req.url==='/home'){
//         let user={
//             name:'John Doe',
//             age:30
//         }
//         res.writeHead(200,{'content-type':'application/json'});
//         res.end(JSON.stringify(user))
//     }
//     else{
//         res.end('Invalid Request');
//         return;
//     }


// });
const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>Home Page</h1>')
    }
     
    else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'});
         res.end('<h1>About Page</h1>');
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'content-type':'text/html'});
         res.end('<h1>Contact Page</h1>');
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
         res.end('<h1>404 Page Not Found</h1>');
    }
   
})

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});