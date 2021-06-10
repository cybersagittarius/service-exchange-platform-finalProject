const mongoose = require('mongoose');
const itemSkillsSubSchema = require('./itemSkillsSubSchema')

const itemSkillSchema = new mongoose.Schema({
    // itemSkills: {type: [
    //     { itemId: Number, value: String }
    //     ]

    itemSkills: { type: [ itemSkillsSubSchema ], required: true },
   }
)

module.exports = mongoose.model('itemSkills', itemSkillSchema)


//Collection => []

/*
    Collection = [

        {
            _id : something
            itemSkills: [{...},{...},{...},{...},{...},{...},{...},{...},{...},]
            createdAt: date,
            updatedAt: date,
            __v: 0
        }
            
    ]

    collection[0].itemSkills[2].value
*/


/*
    Collection = [

        {
            itemId: 1
            value : 'something'
        },
        {
            itemId: 2
            value : 'something extra'
        },
        {...},
        {...},
        {...},
        {...},
        {...},{...},{...},{...},

            
    ]

    collection[2].value
*/