const express = require('express');
const members = require('../../Members');
const uuid = require('uuid');

const router = express.Router();

//Gets All members
router.get('/', (req, res) => {
    res.json(members);
});

//Get a Single Member
router.get('/:id', (req, res) => {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
})

//Create Member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age : req.body.age
    }

    if (!newMember.firstName || !newMember.lastName){
        res.status(400).json({ msg: 'Please include a name' });
    } 

    members.push(newMember);
    //res.json(members); //API Behaviour
    res.redirect('/'); //Template Rendering
});

module.exports = router;