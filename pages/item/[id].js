import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Image from 'next/image'

const ReadSingleItem = ({singleItem}) => {
  console
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Image src={singleItem.image.trim()} width="750px" height="500px" alt="goods image"></Image>
        </Grid>
        <Grid item xs={6}>
          <h1>{singleItem.title}</h1>
          <h1>{singleItem.price}</h1>
          <p>{singleItem.description}</p>
        </Grid>
      </Grid>
    </Container>
  )
}

export const getServerSideProps = async(context) => {
  const response = await fetch(`http://localhost:3000/api/item/${context.params.id}`)
  const singleItem = await response.json()
  return {
    props: singleItem,
  }
}

export default ReadSingleItem