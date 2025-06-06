import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';

const StartupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    industry: '',
    fundingGoal: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      await axios.post('/api/startups', formData, config);
      // Handle success (e.g., redirect or show message)
    } catch (err) {
      console.error(err.response.data);
      // Handle error
    }
  };

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
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Create New Startup
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Startup Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
            required
          />
          <TextField
            fullWidth
            label="Industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Funding Goal"
            name="fundingGoal"
            type="number"
            value={formData.fundingGoal}
            onChange={handleChange}
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Create Startup
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default StartupForm; 