import React from 'react'
import connectDB from '../../../utils/database'
import { UserModel } from '../../../utils/schemaModels'

const register = async(req, res) => {
  try {
    await connectDB()
    console.log(req.body)
    await UserModel.create(req.body)
    return res.status(200).json({message: "user create"})
  } catch (error) {
    return res.status(400).json({message: "user not create"})
  }
}

export default register