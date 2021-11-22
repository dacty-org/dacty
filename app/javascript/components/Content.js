import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import ContentCard from './ContentCard';

const Content = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          学習している専門領域
        </Typography>
        <Grid
          container
          spacing={3}
        >
            <ContentCard />
        </Grid>
      </Container>
    </Box>
  </>
);

export default Content;