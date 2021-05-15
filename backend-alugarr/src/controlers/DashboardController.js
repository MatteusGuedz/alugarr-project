const Imovel = require("../models/Imovel");
module.exports ={
    async show(req, res){
        const {user_id} =  req.headers;

        const imoveis = await Imovel.find({user:user_id})
        return res.json(imoveis)

    }
}