import jwt from 'jsonwebtoken';

import UserModel from '../models/user.js';

export const signin = async (req, res) => {
    const {email, password} = req.headers;
    //console.log(req.headers)
    try {
        const existingUser = await UserModel.findOne( {email} )
        
        if(!existingUser) return res.status(404).json({message: "User doesn't exist.--"});

        let isPasswordCorrect;
        if(password == existingUser.password) {isPasswordCorrect=true}else{isPasswordCorrect=false};
        
        if(!isPasswordCorrect) return res.status(400).json({message: "Incorrect password."});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {expiresIn:"1h"}); // this second parameter is the secret it must go to the enviroment variables for security on a project for security

        res.status(200).json({result: existingUser, token})

    } catch (error) {
        if (error.response){

            console.log(error.response)
            console.log("error.response")
            
            }else if(error.request){
            
            console.log(error.request)
            console.log("error.request")
            
            }else if(error.message){
            
            console.log(error.message)
            console.log("error.message")
            
            }
        //res.status(500).json({message:"Something went wrong."})

    }
}

export const signup = async (req, res) => {
    
    const { name, email, password } = req.body;

    try {
        const existingUser = await UserModel.findOne({ email });

        if(existingUser) return res.status(400).json({message: "User email is already in use."});

        const result = await UserModel.create({name,email,password,coins:0});

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', {expiresIn:"1h"})

        res.status(200).json({result, token})

    } catch (error) {
        res.status(500).json({message:"Something went wrong."})
    }
}

export const updateUser = async (req, res) => {
    const { email,coins } = req.body;

    try {          

        await UserModel.findOneAndUpdate({email},{coins});
        const result = await UserModel.findOne({ email })

        res.status(200).json({result})

    } catch (error) {
        res.status(500).json({message:"Something went wrong."})
    }
}