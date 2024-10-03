import User from "../model/userModel.js"

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' 

export const account = async (req,res) => {
    try {
        const email = req.body.localVal
        const check = await User.findOne({email:email})
        res.json(check.name)
    } catch (error) {
        res.json('fail')
    }
}

export const signin = async (req, res) => {
    const { name, email, password } = req.body;
    try{
        const existinguser = await User.findOne({ email });
        if(existinguser){
            return res.status(404).json({ message: "User already Exist."})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({ name, email, password: hashedPassword }) 
        res.status(200).json({ result: newUser})
    } catch(error){
        res.status(500).json("Something went worng...")
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existinguser = await User.findOne({ email });
        if(!existinguser){
            return res.status(404).json({ message: "User don't Exist."})
        }
        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        if(!isPasswordCrt){
            return res.status(400).json({message : "Invalid credentials"})
        }
        const token = jwt.sign({ email: existinguser.email, id:existinguser._id}, process.env.JWT_SECRET , { expiresIn: '1h'});
        res.status(200).json({ result: existinguser, token})
    } catch (error){
        res.status(500).json("Something went worng...")
    }
};


