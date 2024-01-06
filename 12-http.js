const http= require('http');


//req- request from the server, res- response
const serer= http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to home page of piggy bank!!');
    }
    else if (req.url === '/about'){
        res.end("Here's a small journey about our piggy bank :)");
    } else{
    res.end(`
    <h1>Ooops</h>
    <p>We can not find the page you are looking for</p>
    <a href="/">back home</a>
    `);
    }
    
    // res.write('Welcome to home page piggy bank!!');
    // res.end();
});

serer.listen(5000);
