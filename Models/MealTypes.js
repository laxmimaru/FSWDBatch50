
const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const MealTypeSchema = new Schema(
    {

         meal_type:{
            type:String
        },
        name:{
            type:String
        },
        image:{
            type:String
        }
    }

)


module.exports = mongoose.model('MealTypes',MealTypeSchema)