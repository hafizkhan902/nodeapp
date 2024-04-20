const fs=require('fs');
const http=require('http');


const index=fs.readFileSync('./templates/index.html','utf-8');
const login=fs.readFileSync('./templates/login.html','utf-8');
const returnsarray=()=>{
   let contents = index.replace('{{%LOGIN%}}','login.html');
   contents = contents.replace('{{%CONTENT%}}',login);
   return contents;
}

const server=http.createServer((req,res)=>{
    const path=req.url;
    console.log(path);
    console.log(index);
    if(path==='./' || path==='/home'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(returnsarray);
    }
})

server.listen(3000,()=>{
    console.log('server has started');
})