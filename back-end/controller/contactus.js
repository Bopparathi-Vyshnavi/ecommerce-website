import Contact from '../model/contactModel.js'
import User from "../model/userModel.js"

import mongoose from "mongoose";
import bcrypt from 'bcrypt'


export const postMessage = async (req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        const existinguser = await User.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }
        const postmessage = await Contact.create({ name, email, subject, message });
        await postmessage.save();
        res.status(200).json("Posted a message successfully")
    } catch (error) {
        console.log(error)
        res.status(500).json("Couldn't post a new message")
    }
};

export const getAllMessages = async (req, res) => {
    try {
        const messageList = await Contact.find();
        res.status(200).json(messageList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export  const deleteMessage = async (req, res) => {
    const { id:_id } = req.params ;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('message unavailable...');
    }
    try {
        await Contact.findByIdAndRemove(_id);
        res.status(200).json({ message: "successfully deleted..." })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
