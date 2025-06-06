import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  IconButton,
  Button,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import {
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Share as ShareIcon,
  Download as DownloadIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material';

const resources = {
  videos: [
    {
      id: 1,
      title: 'Building a Successful Startup: A Complete Guide',
      description: 'Learn the fundamentals of building and scaling a successful startup from industry experts.',
      thumbnail: 'https://img.youtube.com/vi/0hx7lK5Vw1Y/maxresdefault.jpg',
      duration: '45:30',
      category: 'Business',
      url: 'https://www.youtube.com/watch?v=0hx7lK5Vw1Y'
    },
    {
      id: 2,
      title: 'Mastering Product Development',
      description: 'Deep dive into product development methodologies and best practices.',
      thumbnail: 'https://img.youtube.com/vi/8hly31xKli0/maxresdefault.jpg',
      duration: '32:15',
      category: 'Development',
      url: 'https://www.youtube.com/watch?v=8hly31xKli0'
    },
    {
      id: 3,
      title: 'Startup Marketing Strategies',
      description: 'Effective marketing strategies for early-stage startups.',
      thumbnail: 'https://img.youtube.com/vi/3lbnR702scs/maxresdefault.jpg',
      duration: '28:45',
      category: 'Marketing',
      url: 'https://www.youtube.com/watch?v=3lbnR702scs'
    },
    {
      id: 4,
      title: 'Pitch Deck Masterclass',
      description: 'Learn how to create a compelling pitch deck that attracts investors.',
      thumbnail: 'https://img.youtube.com/vi/6BQxvC8yqNc/maxresdefault.jpg',
      duration: '35:20',
      category: 'Pitching',
      url: 'https://www.youtube.com/watch?v=6BQxvC8yqNc'
    },
    {
      id: 5,
      title: 'Customer Acquisition Strategies',
      description: 'Proven strategies for acquiring and retaining customers.',
      thumbnail: 'https://img.youtube.com/vi/9P8mASSREYM/maxresdefault.jpg',
      duration: '40:15',
      category: 'Growth',
      url: 'https://www.youtube.com/watch?v=9P8mASSREYM'
    },
    {
      id: 6,
      title: 'Startup Legal Essentials',
      description: 'Understanding legal requirements and protecting your startup.',
      thumbnail: 'https://img.youtube.com/vi/7Pq-S557XQU/maxresdefault.jpg',
      duration: '38:45',
      category: 'Legal',
      url: 'https://www.youtube.com/watch?v=7Pq-S557XQU'
    },
    {
      id: 7,
      title: 'Financial Planning for Startups',
      description: 'Essential financial planning and management strategies.',
      thumbnail: 'https://img.youtube.com/vi/2Iapc5rXUbg/maxresdefault.jpg',
      duration: '42:30',
      category: 'Finance',
      url: 'https://www.youtube.com/watch?v=2Iapc5rXUbg'
    },
    {
      id: 8,
      title: 'Team Building and Culture',
      description: 'Building and maintaining a strong team culture.',
      thumbnail: 'https://img.youtube.com/vi/4YQf9_9vqJ8/maxresdefault.jpg',
      duration: '36:15',
      category: 'Culture',
      url: 'https://www.youtube.com/watch?v=4YQf9_9vqJ8'
    },
    {
      id: 9,
      title: 'Product Launch Strategies',
      description: 'Successful product launch strategies and execution.',
      thumbnail: 'https://img.youtube.com/vi/5Qn8z3t9MGs/maxresdefault.jpg',
      duration: '33:45',
      category: 'Product',
      url: 'https://www.youtube.com/watch?v=5Qn8z3t9MGs'
    }
  ],
  articles: [
    {
      id: 1,
      title: 'The Ultimate Startup Funding Guide',
      description: 'Comprehensive guide to securing funding for your startup.',
      category: 'Finance',
      readTime: '15 min',
      url: 'https://www.startupguide.com/funding'
    },
    {
      id: 2,
      title: 'Building a Strong Company Culture',
      description: 'Learn how to create and maintain a positive company culture.',
      category: 'Culture',
      readTime: '10 min',
      url: 'https://www.startupguide.com/culture'
    },
    {
      id: 3,
      title: 'Growth Hacking Techniques',
      description: 'Proven growth hacking strategies for startups.',
      category: 'Growth',
      readTime: '12 min',
      url: 'https://www.startupguide.com/growth-hacking'
    },
    {
      id: 4,
      title: 'Product-Market Fit: A Complete Guide',
      description: 'Understanding and achieving product-market fit for your startup.',
      category: 'Product',
      readTime: '18 min',
      url: 'https://www.startupguide.com/product-market-fit'
    },
    {
      id: 5,
      title: 'Remote Team Management Best Practices',
      description: 'Essential strategies for managing remote teams effectively.',
      category: 'Management',
      readTime: '14 min',
      url: 'https://www.startupguide.com/remote-teams'
    },
    {
      id: 6,
      title: 'Startup Metrics That Matter',
      description: 'Key metrics every startup founder should track.',
      category: 'Analytics',
      readTime: '16 min',
      url: 'https://www.startupguide.com/metrics'
    },
    {
      id: 7,
      title: 'AI Integration in Startups',
      description: 'How to leverage artificial intelligence in your startup.',
      category: 'Technology',
      readTime: '20 min',
      url: 'https://www.startupguide.com/ai-integration'
    },
    {
      id: 8,
      title: 'Sustainable Startup Practices',
      description: 'Building an environmentally conscious startup.',
      category: 'Sustainability',
      readTime: '12 min',
      url: 'https://www.startupguide.com/sustainability'
    }
  ],
  tools: [
    {
      id: 1,
      title: 'Business Model Canvas',
      description: 'Interactive tool for developing your business model.',
      category: 'Planning',
      url: 'https://www.businessmodelgeneration.com/canvas'
    },
    {
      id: 2,
      title: 'Startup Financial Projections',
      description: 'Template for creating financial projections.',
      category: 'Finance',
      url: 'https://www.startupguide.com/financials'
    },
    {
      id: 3,
      title: 'Market Research Toolkit',
      description: 'Comprehensive toolkit for market research.',
      category: 'Research',
      url: 'https://www.startupguide.com/market-research'
    }
  ]
};

const Resources = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [savedItems, setSavedItems] = useState([]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const toggleSave = (itemId) => {
    setSavedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

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

  const renderVideos = () => (
    <Grid container spacing={3}>
      {resources.videos.map((video) => (
        <Grid item xs={12} sm={6} md={4} key={video.id}>
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={video.thumbnail}
                alt={video.title}
                sx={{ 
                  position: 'relative',
                  '&:hover': {
                    opacity: 0.9
                  }
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  display: 'flex',
                  gap: 1
                }}
              >
                <Tooltip title={savedItems.includes(video.id) ? 'Remove from saved' : 'Save'}>
                  <IconButton
                    onClick={() => toggleSave(video.id)}
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 1)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    {savedItems.includes(video.id) ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                  </IconButton>
                </Tooltip>
                <Tooltip title="Share">
                  <IconButton
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      '&:hover': { 
                        bgcolor: 'rgba(255, 255, 255, 1)',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <ShareIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 8,
                  right: 8,
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1
                }}
              >
                <Typography variant="caption">
                  <AccessTimeIcon sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                  {video.duration}
                </Typography>
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Chip
                  label={video.category}
                  size="small"
                  sx={{ 
                    mb: 1,
                    bgcolor: 'primary.main',
                    color: 'white',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    }
                  }}
                />
                <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {video.description}
                </Typography>
                <Button
                  variant="contained"
                  startIcon={<PlayCircleOutlineIcon />}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                  sx={{
                    bgcolor: 'primary.main',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                      transform: 'scale(1.02)'
                    }
                  }}
                >
                  Watch Video
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  const renderArticles = () => (
    <Grid container spacing={3}>
      {resources.articles.map((article) => (
        <Grid item xs={12} md={4} key={article.id}>
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Chip
                    label={article.category}
                    size="small"
                    color="primary"
                  />
                  <Typography variant="caption" color="text.secondary">
                    <AccessTimeIcon sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.5 }} />
                    {article.readTime}
                  </Typography>
                </Box>
                <Typography gutterBottom variant="h6" component="h2">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {article.description}
                </Typography>
                <Button
                  variant="outlined"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                >
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  const renderTools = () => (
    <Grid container spacing={3}>
      {resources.tools.map((tool) => (
        <Grid item xs={12} md={4} key={tool.id}>
          <motion.div variants={itemVariants}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Chip
                    label={tool.category}
                    size="small"
                    color="primary"
                  />
                  <Tooltip title="Download">
                    <IconButton>
                      <DownloadIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
                <Typography gutterBottom variant="h6" component="h2">
                  {tool.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {tool.description}
                </Typography>
                <Button
                  variant="contained"
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  fullWidth
                >
                  Access Tool
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

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
            Resources
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Access valuable resources to help you build and grow your startup
          </Typography>
        </Box>

        <Box sx={{ 
          borderBottom: 1, 
          borderColor: 'rgba(255,255,255,0.1)', 
          mb: 4 
        }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              '& .MuiTab-root': {
                color: 'rgba(255,255,255,0.7)',
                '&.Mui-selected': {
                  color: '#ffffff'
                }
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#4caf50'
              }
            }}
          >
            <Tab
              icon={<PlayCircleOutlineIcon />}
              label="Video Tutorials"
              iconPosition="start"
            />
            <Tab
              icon={<SchoolIcon />}
              label="Articles"
              iconPosition="start"
            />
            <Tab
              icon={<CodeIcon />}
              label="Tools & Templates"
              iconPosition="start"
            />
          </Tabs>
        </Box>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {activeTab === 0 && renderVideos()}
          {activeTab === 1 && renderArticles()}
          {activeTab === 2 && renderTools()}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Resources; 