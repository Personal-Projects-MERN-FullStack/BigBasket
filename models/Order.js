// getting-started.js
const mongoose = require('mongoose');


}
const OrderSchema = new mongoose.Schema(
    {
        userId : {tpye: string , required : true},
        products:[{productId : {type:string},quantity :{type : Number , default :1}}],
        address : {type : String , required:true},
        amount : {type : Number , required : true},
        status : {type : String ,defualt:'pending', required : true}


    }, {timestamps: true}
);
mongoose.models = {}
export defualt mongoose.model("order",OrderSchema);