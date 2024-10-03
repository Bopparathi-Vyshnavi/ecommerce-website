import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    }, 
    email:{
        type: String,
        required: true,   
        unique: true
    }, 
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
    joinedOn:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("contacts", contactSchema)