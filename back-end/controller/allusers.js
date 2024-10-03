import mongoose from "mongoose";
import User from "../model/userModel.js"

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        const allUserDetails = []
        allUsers.forEach(user => {
            allUserDetails.push({
                _id: user._id, 
                name: user.name,
                email: user.email })
        })
        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { name, email } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Profile unavailable...');
    }

    try {
        const updatedProfile = await User.findByIdAndUpdate( _id, { $set: { 'name': name, 'email': email } }, { new: true } )
        res.status(200).json(updatedProfile)
    } catch (error) {
        res.status(405).json({ message: error.message })
    }
}