const connection = require('../../db');
require("dotenv").config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const login = async (req,res)=>{
    let email=req.body.email;
    const query = await `SELECT * FROM users WHERE email ='${email}'`

    connection.query(query,async(err,result)=>{
        if(err) throw err;
        
        //check if there is user with the request data
        if(result.length===1) {
            let password =await bcrypt.compare(req.body.password,result[0].password );
            if(password){
                const payload = {
                    id:result[0].id,
                    role_id:result[0].role_id
                };
                const options ={
                    expiresIn:process.env.TOKEN_EXPIRATION
                };

                //putting token to login account
                token =jwt.sign(payload,process.env.SECRET,options);
                res.header('x-auth',token).json(token);
            } else{
                return res.json("Invalid Email or password..");
            }
        }else return res.json("Invalid Email or password..")               
    })

};

module.exports = {
    login
};
