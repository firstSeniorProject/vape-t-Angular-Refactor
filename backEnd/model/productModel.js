const mongoose=require('mongoose')

module.exports={
    Products:mongoose.model('Products',{
        nameBrand:{type:String,required:true},
        price:{type:Number},
        description:{type:String},
        imgSrc:{type:String},
        imgSrc2:{type:String},
        imgSrc3:{type:String},
        category:{type:String,required:true}

    })
}

