import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import { Stack } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container } from '@mui/system';

const schema = yup.object({
  email: yup.string().required("メールは入力は必須です"),
  password: yup.string().required("パスワードは入力は必須です"),
})

const Login = () => {
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async(data) => {
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (error) {
      alert("ログイン失敗")
    }
  }

  return (
    <Container maxWidth="sm">
        <h1>ログイン</h1>
        <Stack spacing={2}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                label="email" 
                variant="standard" 
              />
            )}
          >
          </Controller>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                label="password"
                type="password" 
                variant="standard" 
              />
            )}
          >
          </Controller>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">ログイン</Button>
        </Stack>
      </Container>
  )
}

export default Login