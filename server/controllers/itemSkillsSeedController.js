const express = require('express');
const itemSkillSet = require('../models/itemSkillsArrayModel');


const itemSkillsSeedController = async(req, res, next) => {
  
  try {
    console.log(req.body)

    const { id, value } = req.body     

    const skills = new itemSkillSet({ id, value })
     
    //  const skills = new itemSkillSet({ itemId: itemSkills[0].itemId, value: itemSkills[0].value});
    
     console.log(skills);
     
     await skills.save();     
  
     res.status(200).json(skills);

   } catch (err) {
     return next(err);
   }      
} 

module.exports = itemSkillsSeedController