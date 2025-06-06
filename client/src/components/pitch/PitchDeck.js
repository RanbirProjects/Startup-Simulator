import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';

const PitchDeck = () => {
  const slides = [
    {
      title: 'Problem Statement',
      content: 'Current market solutions are inefficient and expensive, creating a significant gap in the market.'
    },
    {
      title: 'Solution',
      content: 'Our innovative platform leverages AI to provide efficient, cost-effective solutions for businesses.'
    },
    {
      title: 'Market Opportunity',
      content: 'Total Addressable Market: $50B\nServiceable Market: $10B\nTarget Market: $1B'
    },
    {
      title: 'Business Model',
      content: 'SaaS-based revenue model with tiered pricing\nSubscription + Transaction fees\nEnterprise licensing'
    },
    {
      title: 'Traction',
      content: '• 50+ Enterprise Customers\n• $250K Monthly Recurring Revenue\n• 25% Month-over-Month Growth'
    },
    {
      title: 'Team',
      content: 'Experienced team with proven track record in technology and business development.'
    },
    {
      title: 'Financials',
      content: '• $1M Revenue in 2024\n• $2.5M Revenue in 2025\n• $5M Revenue in 2026'
    },
    {
      title: 'Ask',
      content: 'Seeking $5M Series A funding to scale operations and accelerate growth.'
    }
  ];

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
        Pitch Deck
      </Typography>
      <Grid container spacing={3}>
        {slides.map((slide, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Slide {index + 1}: {slide.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {slide.content}
              </Typography>
              <Button variant="outlined" size="small">
                Edit Slide
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>Pitch Deck Actions</Typography>
        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="primary">
              Export PDF
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              Present
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined">
              Share
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default PitchDeck; 