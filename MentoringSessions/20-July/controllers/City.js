const City = require('../Models/City.json')

exports.getCityList = (req,res)=>{
    let cities = City.map((city)=>{
        return city.name;
    })

    res.status(200).json({message:"Cities Fetched Successfully", city:cities})
    
}





