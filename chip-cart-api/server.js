const express=require('express');
const server=express();
const port=3000;
const cors=require('cors');
const cors_options={origin:"http://localhost:4200"};
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use(cors(cors_options));

//App Url "http://localhost:3000/app"

require('./app/app-route')(server);



//Main Url "http://localhost:3000/app"

server.get('/',(req,resp)=>{

    resp.send({message:"Welcome to express + postgre+ node"})

})



server.listen(port,()=>{

    console.log(`http://localhost:${port} started`);

})