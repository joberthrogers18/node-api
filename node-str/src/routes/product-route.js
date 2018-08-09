'user strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next)=>{
    res.status(201).send(req.body); //status code 201 for create
});

router.put('/:id', (req, res, next)=>{ // update
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    }); 
});

router.delete('/', (req, res, next)=>{
    res.status(200).send(req.body); //delete
});

module.exports = router;
