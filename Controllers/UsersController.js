const User = require('../Models/users')

//add user by signup process

exports.signUp = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const SignUpUser = new User(
        {
             email : email,
             password : password,
             firstname : firstname,
             lastname : lastname
        }
    )

    SignUpUser.save().then( result => {
        res.status(200).json(
            {
                message:"User Signedup Successfully",
                user:result
            }
        )
    }
    
    ).catch(err=>{
        console.log(err)
    }
    
    )

}


exports.login=(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    console.log('inside login and req.body = ',req.body)
    User.find({email : email , password : password})
    .then((result)=>{
        console.log("result  = ",result)
        if(result.length >= 1){
            res.status(200).json(
                {
                    message:"User Loggedin Successfully",
                    isAUthenticated : true,
                    user : result
                }
            )
        }else{
            res.status(200).json(
                {
                    message:"User Login Failed",
                    isAUthenticated : false,
                    user : result
                }
            )
        }

    }

    ).catch((err)=>{
        console.log(err)
    }

    )

}