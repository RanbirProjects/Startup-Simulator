import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Switch,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Slider,
  Alert,
  Snackbar
} from '@mui/material';
import { motion } from 'framer-motion';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';

const Settings = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [volume, setVolume] = useState(70);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const handleSave = (setting, value) => {
    console.log(`Saving ${setting}:`, value);
    setSnackbar({
      open: true,
      message: 'Settings saved successfully',
      severity: 'success'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  useEffect(() => {
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      const { notifications, soundEnabled, volume } = JSON.parse(savedSettings);
      setNotifications(notifications);
      setSoundEnabled(soundEnabled);
      setVolume(volume);
    }
  }, []);

  useEffect(() => {
    const settings = {
      notifications,
      soundEnabled,
      volume
    };
    localStorage.setItem('settings', JSON.stringify(settings));
  }, [notifications, soundEnabled, volume]);

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
            Settings
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Customize your startup simulator experience
          </Typography>
        </Box>

        <motion.div variants={itemVariants}>
          <Paper 
            sx={{ 
              p: 3, 
              mb: 3,
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
              <Brightness4Icon sx={{ mr: 1, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ color: '#ffffff' }}>Appearance</Typography>
            </Box>
            <Box sx={{ pl: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={themeMode === 'dark'}
                    onChange={(e) => {
                      setThemeMode(e.target.checked ? 'dark' : 'light');
                      handleSave('themeMode', e.target.checked ? 'dark' : 'light');
                    }}
                  />
                }
                label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Dark Mode</Typography>}
              />
              <FormControl fullWidth sx={{ mt: 2 }}>
                <FormLabel sx={{ color: 'rgba(255,255,255,0.8)' }}>Font Size</FormLabel>
                <Slider
                  value={fontSize}
                  onChange={(e, newValue) => {
                    setFontSize(newValue);
                    handleSave('fontSize', newValue);
                  }}
                  min={12}
                  max={24}
                  step={1}
                  marks
                  valueLabelDisplay="auto"
                  sx={{
                    color: '#4caf50',
                    '& .MuiSlider-thumb': {
                      '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(76, 175, 80, 0.16)'
                      }
                    }
                  }}
                />
              </FormControl>
            </Box>
          </Paper>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paper 
            sx={{ 
              p: 3, 
              mb: 3,
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
              <NotificationsIcon sx={{ mr: 1, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ color: '#ffffff' }}>Notifications</Typography>
            </Box>
            <Box sx={{ pl: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={notifications}
                    onChange={(e) => setNotifications(e.target.checked)}
                  />
                }
                label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Enable Notifications</Typography>}
              />
            </Box>
          </Paper>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paper 
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
              <SecurityIcon sx={{ mr: 1, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ color: '#ffffff' }}>Privacy</Typography>
            </Box>
            <Box sx={{ pl: 2 }}>
              <FormControl component="fieldset" sx={{ mb: 2 }}>
                <FormLabel component="legend" sx={{ color: 'rgba(255,255,255,0.8)' }}>Profile Visibility</FormLabel>
                <RadioGroup
                  value={profileVisibility}
                  onChange={(e) => {
                    setProfileVisibility(e.target.value);
                    handleSave('profileVisibility', e.target.value);
                  }}
                >
                  <FormControlLabel 
                    value="public" 
                    control={<Radio />} 
                    label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Public</Typography>} 
                  />
                  <FormControlLabel 
                    value="private" 
                    control={<Radio />} 
                    label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Private</Typography>} 
                  />
                  <FormControlLabel 
                    value="connections" 
                    control={<Radio />} 
                    label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Connections Only</Typography>} 
                  />
                </RadioGroup>
              </FormControl>

              <FormControlLabel
                control={
                  <Switch
                    checked={twoFactorAuth}
                    onChange={(e) => {
                      setTwoFactorAuth(e.target.checked);
                      handleSave('twoFactorAuth', e.target.checked);
                    }}
                  />
                }
                label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Two-Factor Authentication</Typography>}
              />
            </Box>
          </Paper>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Paper 
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
              <SecurityIcon sx={{ mr: 1, color: '#ffffff' }} />
              <Typography variant="h6" sx={{ color: '#ffffff' }}>Sound</Typography>
            </Box>
            <Box sx={{ pl: 2 }}>
              <FormControlLabel
                control={
                  <Switch
                    checked={soundEnabled}
                    onChange={(e) => setSoundEnabled(e.target.checked)}
                  />
                }
                label={<Typography sx={{ color: 'rgba(255,255,255,0.8)' }}>Enable Sound</Typography>}
              />
              <Box sx={{ mt: 2 }}>
                <Typography gutterBottom>Volume</Typography>
                <Slider
                  value={volume}
                  onChange={(e, newValue) => setVolume(newValue)}
                  disabled={!soundEnabled}
                />
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </motion.div>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ 
            width: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.8)',
            color: '#ffffff',
            '& .MuiAlert-icon': {
              color: '#ffffff'
            }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Settings; 