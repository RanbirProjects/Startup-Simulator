import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button, ButtonGroup, useTheme, Tooltip as MuiTooltip, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area
} from 'recharts';
import {
  TrendingUp,
  People,
  AttachMoney,
  Assessment,
  Info,
  Download,
  Refresh
} from '@mui/icons-material';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('month');
  const theme = useTheme();

  const revenueData = [
    { name: 'Jan', revenue: 4000, users: 2400, engagement: 1800 },
    { name: 'Feb', revenue: 3000, users: 1398, engagement: 1200 },
    { name: 'Mar', revenue: 2000, users: 9800, engagement: 2400 },
    { name: 'Apr', revenue: 2780, users: 3908, engagement: 2100 },
    { name: 'May', revenue: 1890, users: 4800, engagement: 1900 },
    { name: 'Jun', revenue: 2390, users: 3800, engagement: 2200 },
  ];

  const marketShareData = [
    { name: 'Your Company', value: 30 },
    { name: 'Competitor A', value: 25 },
    { name: 'Competitor B', value: 20 },
    { name: 'Others', value: 25 },
  ];

  const COLORS = [theme.palette.primary.main, theme.palette.secondary.main, theme.palette.success.main, theme.palette.warning.main];

  const metrics = [
    { 
      title: 'Total Revenue', 
      value: '$1.2M', 
      change: '+15%',
      icon: <AttachMoney sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main
    },
    { 
      title: 'Active Users', 
      value: '12.5K', 
      change: '+8%',
      icon: <People sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main
    },
    { 
      title: 'Conversion Rate', 
      value: '3.2%', 
      change: '+2%',
      icon: <TrendingUp sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main
    },
    { 
      title: 'Avg. Order Value', 
      value: '$85', 
      change: '+5%',
      icon: <Assessment sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <Paper sx={{ p: 2, boxShadow: 3 }}>
          <Typography variant="subtitle2">{label}</Typography>
          {payload.map((entry, index) => (
            <Typography key={index} variant="body2" sx={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </Typography>
          ))}
        </Paper>
      );
    }
    return null;
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
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          mb: 4,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -16,
            left: 0,
            right: 0,
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
          }
        }}>
          <Typography variant="h4" component="h1" sx={{ 
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
            Analytics Dashboard
          </Typography>
          <Box>
            <IconButton sx={{ 
              mr: 1, 
              color: '#ffffff', 
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { 
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'rotate(180deg)',
                transition: 'all 0.3s ease'
              } 
            }}>
              <Refresh />
            </IconButton>
            <IconButton sx={{ 
              color: '#ffffff', 
              backgroundColor: 'rgba(255,255,255,0.1)',
              '&:hover': { 
                backgroundColor: 'rgba(255,255,255,0.2)',
                transform: 'translateY(-2px)',
                transition: 'all 0.3s ease'
              } 
            }}>
              <Download />
            </IconButton>
          </Box>
        </Box>

        <ButtonGroup sx={{ 
          mb: 4,
          '& .MuiButton-root': {
            textTransform: 'none',
            fontWeight: 600,
            letterSpacing: '0.5px'
          }
        }}>
          <Button
            variant={timeRange === 'week' ? 'contained' : 'outlined'}
            onClick={() => setTimeRange('week')}
            sx={{ 
              px: 3,
              backgroundColor: timeRange === 'week' ? '#4caf50' : 'transparent',
              color: '#ffffff',
              borderColor: '#4caf50',
              '&:hover': {
                backgroundColor: timeRange === 'week' ? '#388e3c' : 'rgba(76, 175, 80, 0.1)',
                borderColor: '#4caf50',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)'
              }
            }}
          >
            Week
          </Button>
          <Button
            variant={timeRange === 'month' ? 'contained' : 'outlined'}
            onClick={() => setTimeRange('month')}
            sx={{ 
              px: 3,
              backgroundColor: timeRange === 'month' ? '#4caf50' : 'transparent',
              color: '#ffffff',
              borderColor: '#4caf50',
              '&:hover': {
                backgroundColor: timeRange === 'month' ? '#388e3c' : 'rgba(76, 175, 80, 0.1)',
                borderColor: '#4caf50',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)'
              }
            }}
          >
            Month
          </Button>
          <Button
            variant={timeRange === 'year' ? 'contained' : 'outlined'}
            onClick={() => setTimeRange('year')}
            sx={{ 
              px: 3,
              backgroundColor: timeRange === 'year' ? '#4caf50' : 'transparent',
              color: '#ffffff',
              borderColor: '#4caf50',
              '&:hover': {
                backgroundColor: timeRange === 'year' ? '#388e3c' : 'rgba(76, 175, 80, 0.1)',
                borderColor: '#4caf50',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(76, 175, 80, 0.2)'
              }
            }}
          >
            Year
          </Button>
        </ButtonGroup>

        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
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
                    <MuiTooltip title="Click for more details">
                      <IconButton size="small" sx={{ 
                        color: '#ffffff', 
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          transform: 'scale(1.1)'
                        }
                      }}>
                        <Info fontSize="small" />
                      </IconButton>
                    </MuiTooltip>
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
                    {metric.change} from last {timeRange}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}

          <Grid item xs={12} md={8}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                height: '100%', 
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.3)'
                }
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: '#ffffff', 
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 4,
                  height: 20,
                  backgroundColor: '#4caf50',
                  mr: 1,
                  borderRadius: 2
                }
              }}>
                Revenue & Users Over Time
              </Typography>
              <Box sx={{ height: 500 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4caf50" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#4caf50" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2196f3" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2196f3" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#4caf50"
                      fillOpacity={1}
                      fill="url(#colorRevenue)"
                    />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#2196f3"
                      fillOpacity={1}
                      fill="url(#colorUsers)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                height: '100%', 
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.3)'
                }
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: '#ffffff', 
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 4,
                  height: 20,
                  backgroundColor: '#2196f3',
                  mr: 1,
                  borderRadius: 2
                }
              }}>
                Market Share
              </Typography>
              <Box sx={{ height: 500 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={marketShareData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {marketShareData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper 
              elevation={0}
              sx={{ 
                p: 3, 
                background: 'rgba(0, 0, 0, 0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.3)'
                }
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ 
                fontWeight: 'bold', 
                color: '#ffffff', 
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 4,
                  height: 20,
                  backgroundColor: '#ff9800',
                  mr: 1,
                  borderRadius: 2
                }
              }}>
                User Engagement
              </Typography>
              <Box sx={{ height: 500 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="name" stroke="#ffffff" />
                    <YAxis stroke="#ffffff" />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar 
                      dataKey="engagement" 
                      fill="#ff9800"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default Analytics; 