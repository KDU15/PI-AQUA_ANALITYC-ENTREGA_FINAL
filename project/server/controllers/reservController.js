const {Reserv: ReservModel} = require ("../models/Reserv");

const reservController = {
    create: async(req, res) =>{
        try {
            const reserv = {
                name: req.body.name,
                adress: req.body.adress,
                lat:  req.body.lat,
                lon: req.body.lon,
                ip: req.body.ip,
                type: req.body.type,
        
            };

         const response = await ReservModel.create(reserv);

         res.status(201).json({response, msg: "Cadastrado com sucesso!"});



        }   catch (error) {
            console.log(error);
        }
    },

    getAll: async (rec,res) =>{
        try {
            const reserv = await ReservModel.find();

            res.json(reserv);
            
        } catch (error) {
            console.log(error);
        }
    },

    get: async (req, res) =>{
        try {
            
            const id = req.params.id;
            const reserv = await ReservModel.findById(id);

            if(!reserv){
                res.status(404).json({msg: "reservatório não encontrado."});
                return;
            }
            res.json(reserv);

        } catch (error) {
            console.log(error);
        }
    },

    delete: async(req,res) =>{
        try {
            
            const id = req.params.id;
            const reserv = await ReservModel.findById(id);

            if(!reserv){
                res.status(404).json({msg: "reservatório não encontrado."});
                return;
            }
            const deleteReserv = await ReservModel.findByIdAndDelete(id)
            res.status(200).json({deleteReserv, msg: "Reservatório deletado"})



        } catch (error) {
            console.log(error)
        }
    },

    update: async(req,res) =>{

        const id = req.params.id;

        const reserv = {
            name: req.body.name,
            adress: req.body.adress,
            lat:  req.body.lat,
            lon: req.body.lon,
            ip: req.body.ip,
            type: req.body.type,
    
        };

        const updateReserv = await ReservModel.findByIdAndUpdate(id, reserv);

        if(!updateReserv){
            res.status(404).json({msg: "reservatório não encontrado."});
            return;
        };

        res.status(200).json({reserv, msg: "Dados atualizado com sucesso."})
    }


};
module.exports = reservController;