
const City = require('../Models/City')

exports.getCityList =(req,res,next)=>{
    City.find().then(result=>{
        res.status(200).json(
            {
                message:"Cities fetched successfully",
                city:result
           
           
            }
        )
    }

    )


}

exports.addCity=(req,res,next)=>{

const name = req.body.name;
const city_id = req.body.city_id
const location_id = req.body.location_id
const country_name = req.body.country_name


console.log(' name, cityId,locationId,countryName = ' ,name, city_id,location_id,country_name)
const Cities = new City(
    {
        name:name,
        city_id:city_id,
        location_id:location_id,
        country_name:country_name
  }
)
Cities.save().then( result => {
    res.status(200).json(
        {
            message:"City Added successfully",
            city:result
        }
    )
}

).catch(err=>{
    console.log(err)
}

)

}

