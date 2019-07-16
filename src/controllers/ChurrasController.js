const Churras = require('../models/Churras');

exports.list = (req, res) => {
    Churras.find()
    .populate('guests')
    .exec((err,churrasList) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(200).send({churrasList});
    });
};

exports.get = (req, res) => {
    try{
        Churras.findById(req.params.id)
        .populate('guests')
        .exec((err,churras) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(200).send({churras});
    });
    }catch(err){
        return res.status(500).json({ error: err.message });
    };
};

exports.create = (req, res) => {
    const { description, date, note } = req.body;

    const churras = new Churras({
        description,
        date,
        note
    });
    
    churras.save((err, newChurras) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).send({newChurras});
    });
    
};