//create user
//thoughts
//reactions

const { create } = require("domain");
const { userInfo } = require("os");

userInfo.find().then((user)=>{
    user.thoughts = [{(_id )}]
    user.save();
})