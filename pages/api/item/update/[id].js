import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"

const updateItem = async(req, res) => {
  try {
    await connectDB()
    await ItemModel.findByIdAndUpdate(req.query.id, req.body)
    return res.status(200).send({message: "update complete"})
    
  } catch (error) {
    return res.status(400).send({message: "update no complete"})
    
  }
}

export default updateItem