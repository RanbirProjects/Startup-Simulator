import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StartupList = () => {
  const navigate = useNavigate();

  // Sample data - replace with actual API call
  const startups = [
    {
      id: 1,
      name: 'Tech Innovators',
      description: 'Revolutionary AI solutions',
      industry: 'Technology',
      fundingGoal: 1000000
    },
    {
      id: 2,
      name: 'Green Energy Solutions',
      description: 'Sustainable energy for tomorrow',
      industry: 'Clean Energy',
      fundingGoal: 2000000
    }
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your Startups
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => navigate('/startups/new')}
        sx={{ mb: 3 }}
      >
        Create New Startup
      </Button>

      <Grid container spacing={3}>
        {startups.map((startup) => (
          <Grid item xs={12} sm={6} md={4} key={startup.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="h2" gutterBottom>
                  {startup.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {startup.description}
                </Typography>
                <Typography variant="body2">
                  Industry: {startup.industry}
                </Typography>
                <Typography variant="body2">
                  Funding Goal: ${startup.fundingGoal.toLocaleString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => navigate(`/startups/${startup.id}`)}>
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default StartupList; 