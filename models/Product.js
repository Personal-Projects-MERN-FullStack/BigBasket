// getting-started.js
const mongoose = require('mongoose');



const ProductSchema = new mongoose.Schema(
    {
        title : {tpye: String , required : true},
        slug : {tpye: String , required : true, unique : true},
        desc : {tpye: String , required : true},
        img : {tpye: String , required : true},
        catagory : {tpye: String , required : true},
        size : {tpye: String },
        price : {tpye: Number, required:true },
        availableQty : {tpye: Number, required:true },



    }, {timestamps: true}
);
mongoose.models = {}
export default mongoose.model("Product",ProductSchema);