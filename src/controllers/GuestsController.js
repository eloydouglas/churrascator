const Churras = require('../models/Churras');
const Guest = require('../models/Guest');
const ObjectId = require('mongoose').Types.ObjectId;

exports.create = (req, res) => {
    const { name, value, drinkIncluded, churrasId } = req.body;

        const guest = new Guest({
            name,
            value,
            drinkIncluded,
            churras: ObjectId(churrasId)
        });
        
        guest.save((err, newGuest) => {
            if (err) return res.status(500).json({ error: err.message });
    
            Churras.findById(guest.churras, (err, churras)=> {
                if (err) return res.status(500).json({ error: err.message });

                try{
                    churras.guests.push(guest._id);
                    churras.totalGuests = churras.guests.length;
                    churras.totalValue += guest.value;
                    
                    churras.save((err, savedChurras => {
                        if (err) return res.status(500).json({ error: err.message });
                        return res.status(200).send();
                    }));
                }catch(err){
                    return res.status(500).json({ error: err.message });
                }    
            });
    
            res.status(201).send({newGuest});
        });
};

exports.delete = (req, res) => {
    Guest.findById(req.params.id, (err, tempGuest) => {
        if (err) return res.status(500).json({ error: err.message });

        Churras.findOne({ guests: ObjectId(req.params.id) }, (err, churras)=> {
            if (err) return res.status(500).json({ error: err.message });

            try{
                churras.guests = churras.guests.filter(guest => guest.toString() != req.params.id);
                churras.totalGuests--;
                churras.totalValue -= tempGuest.value;
                
                churras.save((err, savedChurras => {
                    if (err) return res.status(500).json({ error: err.message });
                    
                    Guest.findByIdAndDelete(req.params.id, err => {
                        if (err) return res.status(500).json({ error: err.message });
                        return res.status(200).send();
                    })
                }));
            }catch(err){
                return res.status(500).json({ error: err.message });
            }    
        });

    });
};