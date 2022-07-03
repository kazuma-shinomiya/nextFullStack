import React from 'react'
import connectDB from '../../../utils/database'
import { ItemModel } from '../../../utils/schemaModels'

const readAll = async(req, res) => {
  try {
    await connectDB()
    const allItems = await ItemModel.find()
    return res.status(200).send({message: "全部読み取り成功", allItems: allItems})
  } catch (error) {
    return res.status(400).send({message: "全部読み取り失敗"})
  }
}

export default readAll