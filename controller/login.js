const validation = require('../src/mongodb')
const bcrypt = require('bcrypt')

let detailsArray=[];

const login = async(req,res)=>{
    const mail=req.body.Email;
    
    validation.findOne({Email:mail}).then(async(user)=>{
        detailsArray[0]=user.fname;
        detailsArray[1]=user.lname;
        detailsArray[2]=user.Email;
    }).catch((err)=>console.log('error in finding'))
    
    validation.findOne({Email : req.body.Email}).then(async(data)=>{
        if(data){
            const validpassword = await bcrypt.compare(req.body.password,data.password)
            if(validpassword){
                res.render('home')
            }
            else{
                res.status(400).render('login',{'res':'Invalid Password','control':true})
            }
        }
        else{
            res.status(400).render('login',{'res':'User does not Exist','control':true});
        }
    }).catch((err)=>{
        console.log(err)
    })
}

function mail() {
    return detailsArray;
}

module.exports = {
    mail,
    login,
};


