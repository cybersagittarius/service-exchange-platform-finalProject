const express = require('express');
const ItemSkills = require('../models/itemSkillsArrayModel')

const itemSkillsController = async (req, res, next) => {

    try {
        const itemSkills = await ItemSkills.find().populate()
        console.log('itemSkills')       
        res.status(200).json(itemSkills);
        } catch(error) {
        next(error.message)
        } 
}

module.exports = itemSkillsController 