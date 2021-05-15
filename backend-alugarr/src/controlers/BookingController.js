
const Booking = require("../models/Booking");
const User = require("../models/User");

module.exports = {
     async store(req,res){
         const {user_id} =  req.headers;
         const {imovel_id} = req.params;
        const{date} = req.body;


        const booking = await Booking.create({
            user: user_id,
            imovel: imovel_id,
            date,
        })
            
        await booking.populate("user").populate("imovel").execPopulate();
 
        return res.json(booking)
     }
 
};