import React from 'react'
import connectDB from '../../../utils/database'
import { UserModel } from '../../../utils/schemaModels'

const login = async(req, res) => {
  try {
    await connectDB()
    const savedUserData = await UserModel.findOne({email: req.body.email})
    if (savedUserData === null || req.body.password !== savedUserData.password) {
      return res.status(400).json({message: "mail or password not collect"}) 
    }
    return res.status(200).json({message: "user login"})
  } catch (error) {
    return res.status(400).json({message: "user not login"}) 
  }
}

export default login