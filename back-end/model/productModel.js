import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    fname:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,   
    },
    brand:{
        type: String,
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: Array,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    subCategory:{
        type: String,
    },
    sizes:{
        type: Array,
        required: true
    },
    bestseller:{
        type: Boolean,
    },
    featuredproduct:{
        type: Boolean,
    },
    joinedOn:{
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("products", productSchema)