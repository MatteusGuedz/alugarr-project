const express = require("express");
const routes = require("./routes")
const mongoose = require("mongoose")
const app = express();


app.use(express.json());
app.use(routes);
mongoose.connect("mongodb+srv://MateusGuedz:32382020@guedzcluster.wj9er.mongodb.net/alugarr?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true

})

app.get("/",(req,res)=>{
    return res.json({message:"Rodando servidor!"});
});

app.listen(3333,()=>{
    console.log("rodando backend");
});





/*

*PARA LOGIN
Nome = para ser identificado
WhatsApp = para a empresa abrir chat no whatsapp quando aceitar
Estado = para filtrar cidades
Cidade = para filtrar alugueis

 */