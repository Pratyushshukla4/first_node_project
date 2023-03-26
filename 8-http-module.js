const http  = require('http');

const server = http.createServer((req , res)=>{

    // res.write("welcome to home page , how can i help you ?");
    // res.end();
    // if(req.url==='/')
    // {
    //     res.write("welcom to home page")
    //     res.end();
    // }
    if(req.url ==='/about')
    {     res.write("welcom to about page")
        res.end();
    }
    res.write("sorry , page is not found")
    res.end();
});

server.listen(5000);