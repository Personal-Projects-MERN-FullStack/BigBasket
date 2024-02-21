// getting-started.js
const mongoose = require('mongoose');


}
const UserSchema = new mongoose.Schema(
    {
        name : {tpye: string , required : true},
        email : {tpye: string , required : true, unique : true},
        password : {tpye: string , required : true},
        

    }, {timestamps: true}
);
mongoose.models = {};
export defualt mongoose.model("users",UserSchema);