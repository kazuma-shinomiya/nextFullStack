import React from 'react'
import connectDB from '../../../utils/database'
import { UserModel } from '../../../utils/schemaModels'
import jwt from 'jsonwebtoken'

const SECRET_KEY = "nextmarket";

const login = async(req, res) => {
  try {
    await connectDB()
    const savedUserData = await UserModel.findOne({email: req.body.email})
    if (savedUserData === null || req.body.password !== savedUserData.password) {
      return res.status(400).json({message: "mail or password not collect"}) 
    }

    const payload = {
      email: req.body.email,
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"})
    console.log(token)
    return res.status(200).json({message: "user login"})
  } catch (error) {
    console.log(error);
    return res.status(400).json({message: "user not login"}) 
  }
}

export default login