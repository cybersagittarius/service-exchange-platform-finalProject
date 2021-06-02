const express = require('express');
const itemSkills = require('../models/itemSkillsArrayModel')

const itemSkillsController = async (req, res, next) => {

    try {
        const users = await itemSkills.find()
        res.status(200).json({itemSkills});
        } catch(error) {
        next(error.message)
        } 
}

module.exporst = itemSkillsController 