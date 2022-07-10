import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, Controller } from 'react-hook-form';
import { Stack } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Container } from '@mui/system';

const schema = yup.object({
  title: yup.string().required("タイトルは入力は必須です"),
  price: yup.string().required("値段は入力は必須です"),
  image: yup.string().required("画像は入力は必須です"),
  description: yup.string().required("説明は入力は必須です"),
})

const Delete = ({singleItem}) => {
  const { control, handleSubmit } = useForm({ 
    resolver: yupResolver(schema),
    defaultValues: {
      title: singleItem.title,
      price: singleItem.price,
      image: singleItem.image,
      description: singleItem.description,
    }

  });

  const onSubmit = async(data) => {
    try {
      const response = await fetch(`http://localhost:3000/api/item/delete/${singleItem._id}`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "authorization": `Bearer ${localStorage.getItem("token")}`
        },
      })
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (error) {
      alert("アイテム削除失敗")
    }
  }

  return (
    <div>
      <Container maxWidth="sm">
        <h1>アイテム削除</h1>
        <Stack spacing={2}>
          <Controller
            name="title"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                label="title" 
                variant="standard" 
              />
            )}
          >
          </Controller>
          <Controller
            name="price"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                label="price" 
                variant="standard" 
              />
            )}
          >
          </Controller>
          <Controller
            name="image"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                label="image"
                variant="standard" 
              />
            )}
          >
          </Controller>
          <Controller
            name="description"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                label="description"
                variant="standard" 
              />
            )}
          >
          </Controller>
          <Button onClick={handleSubmit(onSubmit)} variant="contained">削除</Button>
        </Stack>
      </Container>
    </div>
  )
}

export const getServerSideProps = async(context) => {
  const response = await fetch(`http://localhost:3000/api/item/${context.params.id}`)
  const singleItem = await response.json()
  return {
    props: singleItem,
  }
}

export default Delete