import React from 'react';
import { Container, Typography, Paper, Grid, Card, CardContent, CardActions, Button, Avatar } from '@mui/material';

const TeamManagement = () => {
  const team = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      avatar: 'JD',
      skills: ['Leadership', 'Strategy', 'Business Development']
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      avatar: 'JS',
      skills: ['Technology', 'Architecture', 'Innovation']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'COO',
      avatar: 'MJ',
      skills: ['Operations', 'Process', 'Efficiency']
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
        Team Management
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mb: 3 }}
      >
        Add Team Member
      </Button>

      <Grid container spacing={3}>
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card>
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item>
                    <Avatar sx={{ bgcolor: 'primary.main' }}>{member.avatar}</Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography color="textSecondary">{member.role}</Typography>
                  </Grid>
                </Grid>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Skills:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {member.skills.join(', ')}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Edit</Button>
                <Button size="small" color="error">Remove</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom>Team Overview</Typography>
        <Typography paragraph>
          • Total Team Size: {team.length}
          • Key Roles Filled: 3/5
          • Average Experience: 8 years
          • Team Diversity: 33% Female, 67% Male
        </Typography>
      </Paper>
    </Container>
  );
};

export default TeamManagement; 