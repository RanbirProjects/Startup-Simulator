import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Button,
  Box,
  Alert
} from '@mui/material';
import axios from 'axios';

const StartupDetails = () => {
  const { id } = useParams();
  const [startup, setStartup] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStartup = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'x-auth-token': token
          }
        };
        const res = await axios.get(`/api/startups/${id}`, config);
        setStartup(res.data);
      } catch (err) {
        setError(err.response?.data?.msg || 'Error fetching startup details');
      }
    };
    fetchStartup();
  }, [id]);

  if (error) {
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
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!startup) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          {startup.name}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography paragraph>
              {startup.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Industry
            </Typography>
            <Typography>
              {startup.industry}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Funding Goal
            </Typography>
            <Typography>
              ${startup.fundingGoal.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StartupDetails; 