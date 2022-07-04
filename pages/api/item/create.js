import React from 'react'
import connectDB from '../../../utils/database'
import { ItemModel } from '../../../utils/schemaModels'
import auth from '../user/auth'

const create = async(req, res) => {
  try {
    await connectDB()
    console.log(req.body)
    await ItemModel.create(req.body)
    return res.status(200).json({message: "item create"})
  } catch (error) {
    return res.status(400).json({message: "item not create"})
  }
}
export default auth(create)