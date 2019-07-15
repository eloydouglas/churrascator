const Churras = require('../models/Churras');

exports.list = (req, res) => {
    Churras.find((err,churrasList) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).send({churrasList});
    });
};

exports.create = (req, res) => {
    const { description, date, note } = req.body;

    const churras = new Churras({
        description,
        date,
        note,
        totalGuests: 0,
        totalValue: 0,
    });
    
    churras.save((err, newChurras) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).send({newChurras});
    });
    
};