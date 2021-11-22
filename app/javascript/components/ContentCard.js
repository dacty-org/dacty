import React, { useState, useEffect } from 'react';
import {Stack, Avatar,} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Grid, Typography } from '@mui/material';
import {ExpertiseTagButton, StepTagButton, HardskillTagButton, SoftskillTagButton, TopicTagButton} from "./Tags/index";
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';

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
                    <Grid sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <ExpertiseTagButton />
                        <StepTagButton />
                        <HardskillTagButton />
                        <SoftskillTagButton />
                        <TopicTagButton />
                    </Grid>
                    <Grid
                    container
                    spacing={3}
                    sx={{ pt: 2, px: 2 }}
                    >
                        <Grid
                        item
                        lg={4}
                        md={4}
                        xs={12}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                sx={{ borderRadius: 2 }}
                                image={val.content_thumbnail}
                                alt={val.title}
                            />
                        </Grid>
                        <Grid
                        item
                        lg={8}
                        md={8}
                        xs={12}
                        >
                            <CardContent sx={{ p: 0 }}>
                                <Typography gutterBottom variant="h6" component="div">
                                    {val.title.length > 30 ?
                                    `${val.title.substring(0, 30)}...` : val.title
                                    }
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {val.description.length > 100 ?
                                    `${val.description.substring(0, 100)}...` : val.description
                                    }
                                </Typography>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ pt: 2 }} style={{ justifyContent: 'flex-end' }}>
                                    <Avatar
                                    alt={val.account}
                                    src={val.account_thumbnail}
                                    sx={{ width: 24, height: 24 }}
                                    />
                                    <Typography variant="overline">
                                        {val.account.length > 20 ?
                                        `${val.account.substring(0, 20)}...` : val.account
                                        }
                                    </Typography>
                                    <Typography variant="body2" style={{ marginLeft: 'auto' }}>
                                        note
                                    </Typography>
                                </Stack>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <CardActions style={{ justifyContent: 'flex-end' }} sx={{ pt: 0 }}>
                        <Button size="small" startIcon={<BookmarkAddOutlinedIcon />}>
                            マイノート：22
                        </Button>
                        <Typography
                            variant="caption"
                            sx={{ color: 'text.disabled', display: 'block' }}
                            style={{ marginLeft: 'auto' }}
                        >
                            更新日：{val.date}
                        </Typography>
                    </CardActions>
                </Card>
            </Grid>
        ))}
    </>
  );
}

export default ContentCard;