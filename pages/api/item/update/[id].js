import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"
import auth from '../../../../utils/auth'

const updateItem = async(req, res) => {
  try {
    console.log(req)
    await connectDB()
    const singleItem = await ItemModel.findById(req.query.id)
    if (singleItem.email !== req.body.email) throw new Error();

    await ItemModel.findByIdAndUpdate(req.query.id, req.body)
    return res.status(200).send({message: "update complete"})
    
  } catch (error) {
    return res.status(400).send({message: "update no complete"})
    
  }
}

export default auth(updateItem)