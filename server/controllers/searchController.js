const express = require ('express');
const User = require('./models/userModel')
const Essential = require ('./models/Essential')

const searchController = (req, res, next) => {
    const { searchSkills, searchCountry, searchRigion } = req.body;
    const user = {searchSkills, searchCountry, searchRigion}
    
    

    const findSkills = () =>{
        
    }


}

module.exports = searchController