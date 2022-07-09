import React from 'react'
import jwt from 'jsonwebtoken'

const SECRET_KEY = "nextmarket";

const auth = (handler) => {
  return async(req, res) => {
    if (req.method === "GET") {
      return handler(req, res)
    }

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImEiLCJpYXQiOjE2NTY5MzU4MDcsImV4cCI6MTY1NzAxODYwN30.t7P5RPfZ1BcvnrDbBJVUGd7TEGN0w9M3vU_-ijWUmUg"
    // const token = await req.headers.authorization.split(" ")[1]
    if (!token) {
      return res.status(400).json({message: "token not found"}) 
    }
    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      req.body.email = decoded.email
      return handler(req, res)
    } catch (error) {
      return res.status(400).json({message: "token is not collect"})  
    }
  }
}

export default auth