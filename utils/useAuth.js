import { useRouter } from 'next/router'
import { React, useEffect, useState } from 'react'

const SECRET_KEY = "nextmarket";

const useAuth = () => {
  const [loginUserEmail, setLoginUserEmail] = useState("")
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("user/login")
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      setLoginUserEmail(decoded.email)
      return handler(req, res)
    } catch (error) {
      router.push("user/login")
    }
  }, [router])
  

  return loginUserEmail
}

export default useAuth