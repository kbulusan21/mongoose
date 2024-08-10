const mongoose = require('mongoose');
const User = require("./User");

//  teachers collection
const teachers = require("./Teachers");

//connecting to our mongo database
const dbURI = 'mongodb://localhost:27017/school';
//a promise
mongoose.connect(dbURI)
    .then((result)=>console.log("CONNECTED"))
    .catch((e)=>console.log(e));
// schema -> ex: user has name, age, email, pass structure of data
// model -> schema is an idividual schema object
// query -> making against mongodb database

//make a model to interact with the databse, can leave schema empty when trying to just access data
const students = mongoose.model("students",{});
async function searchDB(query, projection){
    const search = await students.find(query, projection);
    console.log(search);
}

//Properties of students in database
let filterObj = {
    _id:false,
    name:true,
    age:true,
    gpa:true,
    registerDate:true,
    graduationDate:true,
    courses:true,
    address:true,
    fullTime:true

}
delete filterObj.graduationDate;
// Possible to delete properties we dont want to show
delete filterObj.fullTime;

searchDB({gpa:{$gte:3}},filterObj);

//insertDB();
//async function because it is a promise
async function insertDB(){
    //create new user
    /*
    const user = await User.create({
        name:"Mia Mai",
        age:29,
        hobbies: ["Shooting", "Stabbing"],
        address:{
            street: "Wanker",
            city: "Shabby"
        }
    });
    //const user = new User({name:"Kyle",age:26});
    
    await user.save();
    console.log(user);
    */
    const teacher = await teachers.create({
        name:"Mrs. Puff",
        age: 25,
        email: "puffdd@school.com",
        courses: ["Driving","Boating"]
    })
    await teacher.save();
    console.log(teacher);
    const teacher_names = await teachers.find({},{_id:false,name:true});
    console.log(teacher_names[0].name);
}


