import React from 'react'
import connectDB from '../../../utils/database'
import { ItemModel } from '../../../utils/schemaModels'

const getSingleItem = async(req, res) => {
  try {
    await connectDB()
    const singleItem = await ItemModel.findById(req.query.id)
    return res.status(200).send({message: "1つ読み取り成功", singleItem: singleItem})
  } catch (error) {
    return res.status(400).send({message: "1つ読み取り失敗"})
  }
}

export default getSingleItem