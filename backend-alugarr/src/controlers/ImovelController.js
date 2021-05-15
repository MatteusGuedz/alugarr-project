const Imovel = require("../models/Imovel");
const User = require("../models/User");
const { all } = require("../routes");

module.exports = {

    async index(req, res){
         
         
         const imoveis = await Imovel.find(all);
         return res.json(imoveis)
    },

    async listaFilter(req, res){
        
     const {bairro} = req.params;
        console.log(bairro)
        const imoveis = await Imovel.find({bairro:bairro});
         return res.json(imoveis)
   }, 



    async store(req, res){
        const {filename} = req.file;
        const {
            titulo,
            bairro, 
            rua,
            whatsapp,
            description, 
            price, 
        } = req.body;
        const {user_id} = req.headers;
        

        const user = await User.findById(user_id);
        if(!user){
            return res.status(400).json({error: "O Usuario nao existe!"})
        }
        
        const imovel = await Imovel.create({
            user:user_id,
            thumbnail: filename,
            titulo: titulo,
            bairro: bairro,
            rua:rua,
            whatsapp: whatsapp,
            description: description,
            price: price
        })

        return res.json(imovel)
    }
};