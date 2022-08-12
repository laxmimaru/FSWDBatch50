
const mongoose = require('mongoose');

const Schema = mongoose.Schema ;

const CitySchema = new Schema(
    {
        name:{
            type:String
        },
        city_id:{
            type:String
        },
        location_id:{
            type:String
        },
        country_name:{
            type:String
        }
    }

)


module.exports = mongoose.model('cities',CitySchema)