import connectDB from "../../../../utils/database"
import { ItemModel } from "../../../../utils/schemaModels"
import auth from '../../user/auth.js'

const deleteItem = async(req, res) => {
  try {
    await connectDB()
    await ItemModel.findByIdAndDelete(req.query.id)
    return res.status(200).send({message: "delete complete"})
    
  } catch (error) {
    return res.status(400).send({message: "delete no complete"})
    
  }
}

export default auth(deleteItem)