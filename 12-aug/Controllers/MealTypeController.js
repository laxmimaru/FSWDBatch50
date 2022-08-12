const Meal = require('../Models/MealTypes')

exports.getMealTypes=(req,res,next)=>{
    Meal.find().then(result=>{
        console.log('result = ',result)
        res.status(200).json(
            {
                message:"MealTypes retrieved successfully",
                mealtypes:result
            }
        )
    }

    )
}