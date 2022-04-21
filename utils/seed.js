const User = require('../models/users');
const Thought = require('../models/thought');
const Reaction = require('../models/reaction');
const {faker} = require('@faker-js/faker');

async function seedUsers(numbers){

    await User.deleteMany();

    const users = [];

    for (let index = 0; index < numbers.length; index++) {
        
        const [firstName, lastName] = [faker.name.firstName(), faker.name.lastName()];

        const created = await User.create({
            userName: faker.internet.userName(firstName, lastName),
            email: faker.internet.email(firstName, lastName),
        });
        
    }
}

//create user
//thoughts
//reactions

const { create } = require("domain");
const { userInfo } = require("os");

userInfo.find().then((user)=>{
    user.thoughts = [{(_id )}]
    user.save();
})