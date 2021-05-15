
const Booking = require("../models/Booking");

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

        await booking.populate("imovel").populate("user").execPopulate();
//arrumar esse parte ultiima coisa do video
        return res.json(booking)
     }
 
};