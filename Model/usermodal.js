import mongoose from "mongoose";
import { Schema } from "mongoose";

const voter = new Schema
({
    name:String,
    email:String,
    password:String,
    confirmpassword:String,
    phoneno:Number
})

export default mongoose.model("voters",voter)