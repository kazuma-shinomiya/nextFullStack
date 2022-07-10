import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Index = ({allItems}) => {
  return (
    <Container>
      <Grid container spacing={2}>
        {
          allItems.map((item) => 
          <Grid item xs={4} key={item._id}>
            <Card sx={{ maxWidth: 345 }} >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt="goods image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography gutterBottom variant="h7" component="div">
                  {item.price}円
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={`/item/${item._id}`} key={item._id}>
                  <Button size="small">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
            </Grid>
          )  
        }
      </Grid>
    </Container>
  )
}

export const getServerSideProps = async() => {
  const response = await fetch("http://localhost:3000/api/item/readAll")
  const allItems = await response.json()
  return {
    props: allItems,
  }
}

export default Index
