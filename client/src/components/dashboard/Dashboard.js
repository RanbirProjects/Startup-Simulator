import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box, Avatar, List, ListItem, ListItemText, ListItemAvatar, Divider, LinearProgress, useTheme, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  AttachMoney,
  Assessment as AssessmentIcon,
  Description as DescriptionIcon,
  Notifications,
  Timeline,
  Business as BusinessIcon,
  School as SchoolIcon
} from '@mui/icons-material';

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const features = [
    {
      title: 'Startup Management',
      description: 'Create and manage your startup ventures',
      action: () => navigate('/startups'),
      buttonText: 'View Startups',
      icon: <BusinessIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main
    },
    {
      title: 'Market Analysis',
      description: 'Analyze market trends and competition',
      action: () => navigate('/market-analysis'),
      buttonText: 'Analyze Market',
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main
    },
    {
      title: 'Financial Projections',
      description: 'Plan and track your financial goals',
      action: () => navigate('/financial-projections'),
      buttonText: 'View Financials',
      icon: <AttachMoney sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main
    },
    {
      title: 'Team Management',
      description: 'Build and manage your startup team',
      action: () => navigate('/team-management'),
      buttonText: 'Manage Team',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.info.main
    },
    {
      title: 'Pitch Deck',
      description: 'Create and manage your pitch deck',
      action: () => navigate('/pitch-deck'),
      buttonText: 'View Pitch Deck',
      icon: <DescriptionIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main
    },
    {
      title: 'Resources',
      description: 'Access learning materials and tools',
      action: () => navigate('/resources'),
      buttonText: 'View Resources',
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.error.main
    }
  ];

  const recentActivities = [
    { id: 1, action: 'Updated financial projections', time: '2 hours ago', icon: <Timeline /> },
    { id: 2, action: 'Added new team member', time: '5 hours ago', icon: <PeopleIcon /> },
    { id: 3, action: 'Completed market analysis', time: '1 day ago', icon: <AssessmentIcon /> },
    { id: 4, action: 'Updated pitch deck', time: '2 days ago', icon: <DescriptionIcon /> }
  ];

  const metrics = [
    { title: 'Total Revenue', value: '$1.2M', change: '+15%', icon: <AttachMoney /> },
    { title: 'Active Users', value: '12.5K', change: '+8%', icon: <PeopleIcon /> },
    { title: 'Conversion Rate', value: '3.2%', change: '+2%', icon: <TrendingUpIcon /> }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
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
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ 
              fontWeight: 'bold', 
              color: '#ffffff', 
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                left: -24,
                top: '50%',
                transform: 'translateY(-50%)',
                width: 4,
                height: '70%',
                background: '#4caf50',
                borderRadius: 2
              }
            }}>
              Welcome back, Founder!
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              Here's what's happening with your startup today
            </Typography>
          </Box>
        </motion.div>

        {/* Metrics Section */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {metrics.map((metric, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${metric.color}, transparent)`
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      background: 'rgba(0, 0, 0, 0.5)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      color: metric.color,
                      mr: 2,
                      backgroundColor: `${metric.color}15`,
                      p: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1) rotate(5deg)'
                      }
                    }}>
                      {metric.icon}
                    </Box>
                  </Box>
                  <Typography variant="subtitle2" sx={{ 
                    fontWeight: 500, 
                    color: '#ffffff', 
                    opacity: 0.8,
                    letterSpacing: '0.5px'
                  }}>
                    {metric.title}
                  </Typography>
                  <Typography variant="h4" sx={{ 
                    my: 1, 
                    fontWeight: 'bold', 
                    color: '#ffffff', 
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    letterSpacing: '-0.5px'
                  }}>
                    {metric.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={metric.change.startsWith('+') ? '#4caf50' : '#f44336'}
                    sx={{ 
                      fontWeight: 'medium',
                      display: 'flex',
                      alignItems: 'center',
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: metric.change.startsWith('+') ? '#4caf50' : '#f44336',
                        mr: 1
                      }
                    }}
                  >
                    {metric.change} from last period
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants}>
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 3,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${feature.color}, transparent)`
                    },
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      background: 'rgba(0, 0, 0, 0.5)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    color: feature.color
                  }}>
                    {feature.icon}
                    <Typography variant="h6" component="h2" sx={{ ml: 1, color: '#ffffff' }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                    {feature.description}
                  </Typography>
                  <Button 
                    size="small" 
                    onClick={feature.action}
                    sx={{ 
                      color: feature.color,
                      '&:hover': {
                        bgcolor: `${feature.color}15`
                      }
                    }}
                  >
                    {feature.buttonText}
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Recent Activity */}
        <motion.div variants={itemVariants}>
          <Paper 
            elevation={0}
            sx={{ 
              p: 3,
              transition: 'all 0.3s ease',
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              '&:hover': {
                transform: 'translateY(-4px)',
                background: 'rgba(0, 0, 0, 0.5)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Notifications sx={{ mr: 1, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ color: '#ffffff' }}>Recent Activity</Typography>
            </Box>
            <List>
              {recentActivities.map((activity, index) => (
                <React.Fragment key={activity.id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}>
                        {activity.icon}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={activity.action}
                      secondary={activity.time}
                      primaryTypographyProps={{ sx: { color: '#ffffff' } }}
                      secondaryTypographyProps={{ sx: { color: 'rgba(255,255,255,0.6)' } }}
                    />
                  </ListItem>
                  {index < recentActivities.length - 1 && <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Dashboard; 