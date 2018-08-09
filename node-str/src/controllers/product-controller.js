'use strict'

exports.post =(req, res, next)=>{
    res.status(201).send(req.body); //status code 201 for create
};

exports.put =  (req, res, next)=>{ // update
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    }); 
};

exports.delete = (req, res, next)=>{
    res.status(200).send(req.body); //delete
};