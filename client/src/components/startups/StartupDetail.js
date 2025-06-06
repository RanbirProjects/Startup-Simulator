import React from 'react';
import { Container, Typography, Paper, Grid, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const StartupDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Sample data - replace with actual API call
  const startup = {
    id: parseInt(id),
    name: 'Tech Innovators',
    description: 'Revolutionary AI solutions for modern businesses',
    industry: 'Technology',
    fundingGoal: 1000000,
    currentFunding: 500000,
    teamSize: 5,
    foundedDate: '2024-01-01',
    stage: 'Seed',
    metrics: {
      revenue: 250000,
      customers: 50,
      growth: 25
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Button 
        variant="outlined" 
        onClick={() => navigate('/startups')}
        sx={{ mb: 3 }}
      >
        Back to Startups
      </Button>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {startup.name}
        </Typography>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Overview</Typography>
            <Typography paragraph>{startup.description}</Typography>
            <Typography variant="body2">Industry: {startup.industry}</Typography>
            <Typography variant="body2">Stage: {startup.stage}</Typography>
            <Typography variant="body2">Founded: {startup.foundedDate}</Typography>
            <Typography variant="body2">Team Size: {startup.teamSize}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Financials</Typography>
            <Typography variant="body2">Funding Goal: ${startup.fundingGoal.toLocaleString()}</Typography>
            <Typography variant="body2">Current Funding: ${startup.currentFunding.toLocaleString()}</Typography>
            <Typography variant="body2">Revenue: ${startup.metrics.revenue.toLocaleString()}</Typography>
            <Typography variant="body2">Customers: {startup.metrics.customers}</Typography>
            <Typography variant="body2">Growth Rate: {startup.metrics.growth}%</Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => navigate(`/market-analysis?startup=${startup.id}`)}
            >
              Market Analysis
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => navigate(`/financial-projections?startup=${startup.id}`)}
            >
              Financial Projections
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => navigate(`/team-management?startup=${startup.id}`)}
            >
              Team Management
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              color="primary"
              onClick={() => navigate(`/pitch-deck?startup=${startup.id}`)}
            >
              Pitch Deck
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default StartupDetail; 