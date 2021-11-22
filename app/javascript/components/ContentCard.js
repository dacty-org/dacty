import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Box, Container, Grid, Typography } from '@mui/material';

const ContentCard = () => {
    const [contents, setContents] = useState([])

    useEffect(() => {
        axios.get('/api/v1/contents.json')
        .then(resp => {
            console.log(resp.data)
            setContents(resp.data);
        })
        .catch(e => {
            console.log(e);
        })
    }, [])

  return (
    <>
        {contents.map((val, key) => (
            <Grid key={key}
            item
            lg={6}
            md={6}
            xs={12}>
                <Card sx={{ maxWidth: 800}}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={val.content_thumbnail}
                        alt={val.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {val.title.length > 30 ?
                        `${val.title.substring(0, 30)}...` : val.title
                        }
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {val.description.length > 100 ?
                        `${val.description.substring(0, 100)}...` : val.description
                        }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </>
  );
}

export default ContentCard;