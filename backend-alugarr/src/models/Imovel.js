const mongoose = require("mongoose");

const  ImovelSchema = new mongoose.Schema({
    thumbnail: String,
    titulo:String,
    bairro: String,
    rua: String,
    whatsapp:String,
    description: String,
    price: Number,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

});


module.exports = mongoose.model("Imovel", ImovelSchema);