const connection = require('../../db');
require("dotenv").config();
const bcrypt = require('bcrypt');

const  register = async (req,res)=>{
    let name=req.body.name;
    let adress = req.body.adress;
    let email =req.body.email;
    let password =req.body.password;  
    let phone = req.body.phone;
    let role_id =0

    //setting the role for the registered account
    if(req.params.role ==="instructor"){
        role_id = 2
     }else if(req.params.role ==="student"){
        role_id = 3
     };

      //Checking if there is  same data in database with the request data
    const query = await `SELECT * FROM users WHERE email ='${email}' OR  name = '${name}' `;
    connection.query(query,async(err,result)=>{
        console.log(result)
       if(err) throw err;
       if(result.length===1){
            if(result[0].email===email) return res.json("Email is used..");
            if(result[0].name===name)return res.json("User name is used..");
       };

     //hashing the password 
     password = await bcrypt.hash(password,parseInt(process.env.SALT));

     // Adding new user to Database
     const newUser =`INSERT INTO users (name,adress,email,password,phone,role_id) VALUES('${name}','${adress}','${email}','${password}','${phone}','${role_id}');`
     connection.query(newUser,(err,result)=>{if(err) throw err});

      // if everything is good get this res..
      res.json("Your account has been successfully created.")
    })
};

module.exports = {
    register,
};
