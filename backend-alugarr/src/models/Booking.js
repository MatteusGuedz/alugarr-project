const mongoose = require("mongoose");

const  BookingSchema = new mongoose.Schema({
    date: String,
   disponibildade: Boolean,
   user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
    },
   imovel:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Imovel"
        },
    
   
});


module.exports = mongoose.model("Booking", BookingSchema);