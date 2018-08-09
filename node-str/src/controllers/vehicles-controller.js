'use strict'

const mongoose = require('mongoose');
const Vehicle = mongoose.model('Vehicle');

exports.get=(req, res, next) => {
    Vehicle.find({active:true},'title price slug') //take only 
        .then(data=>{
            res.status(200).send(data);
        }).catch(e=>{
            res.status(400).send(e);
        });
};

exports.post =(req, res, next)=>{
    var vehicle = new Vehicle(req.body);
    vehicle.save()
    .then(x=>{
        res.status(201).send({message: 'Produto cadastrado com sucesso!'}); //status code 201 for create
    }).catch(e=>{
        res.status(400).send({message: 'Falha ao casdastrar', data : e});
    });
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