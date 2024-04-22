import mongoose,{Schema} from "mongoose";

const dataSchema = Schema({
    fullName:{
        type : String,
        required : true
    },
    Description:{
        type : String,
        required : true
    },
})

export const Data = mongoose.model("data" , dataSchema)