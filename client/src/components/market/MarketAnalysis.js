import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

const MarketAnalysis = () => {
  return (
    <Container sx={{ 
      mt: 4, 
      mb: 4, 
      minHeight: '100vh', 
      py: 4,
      px: { xs: 2, sm: 3, md: 4 },
      background: 'linear-gradient(135deg, #0a1929 0%, #1a237e 50%, #283593 100%)',
      borderRadius: 2,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)',
        pointerEvents: 'none'
      }
    }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Market Analysis
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Market Size</Typography>
            <Typography paragraph>
              Total Addressable Market (TAM): $50B
              Serviceable Addressable Market (SAM): $10B
              Serviceable Obtainable Market (SOM): $1B
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Competition Analysis</Typography>
            <Typography paragraph>
              • Competitor A: 30% market share
              • Competitor B: 25% market share
              • Competitor C: 20% market share
              • Others: 25% market share
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Market Trends</Typography>
            <Typography paragraph>
              • Growing demand for AI solutions
              • Increased focus on sustainability
              • Shift towards cloud-based services
              • Rising importance of data security
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MarketAnalysis; 