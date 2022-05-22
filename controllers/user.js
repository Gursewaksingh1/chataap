const User = require('../model/user')
const Message = require('../model/message')

const {Op} = require('sequelize')
const session = require('express-session')


exports.postcreateUser = async (req, res, next) => {
console.log(req.body);

    try {
        const user = await User.create({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password,
            test: req.body.test
 
        })
        res.send('/user/login')
    } catch (err) {
        
            console.log(err);

    }
    
}


exports.postloginUser =async (req, res, next) => {
    console.log(req.body)
    let user;
    try {
      user = await User.findAll()
   console.log(user[10].test.toString())
        res.send(user)
    } catch (err) {
console.log(err)
    }
    
}

exports.getHome = async (req, res, next) => {
  
        const users = await User.findAll()
   res.send(users)

    }

exports.getChatRoom =async  (req, res, next) => {
    
        const msg = await Message.findAll({where: {
            [Op.and]: [{ userId: session.user.id }, { receiverId: req.query.id }]}}  );
            console.log(msg)
   
    
}


function errorHandling(err) {
    let errMessege = [];

    if (err.errors != undefined) {
        for(i=0;i<err.errors.length;i++) {
            console.log(err.errors[i].message)
            errMessege.push(err.errors[i].message)
        }
    }else{
        errMessege.push("Something Went Worng")
    }
    
    return errMessege
   
}

