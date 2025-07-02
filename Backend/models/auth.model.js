import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    allergies:{
        type:Array,
        default:[]
    },
    cuisine:{
        type:Array,
        default:[]
    },
    diet:{
        type:Array,
        default:[]
    },
    cooking_level:{
        type:String,
        default:"Beginner"
    }
},{timestamps:true})

export const User = mongoose.model("User",userSchema)

