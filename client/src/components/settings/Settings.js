import React, { useState, useEffect, useCallback } from 'react';
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
  Snackbar,
  IconButton,
  Tooltip,
  Fade,
  Zoom,
  useTheme,
  alpha,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Chip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SecurityIcon from '@mui/icons-material/Security';
import PaletteIcon from '@mui/icons-material/Palette';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const Settings = () => {
  const theme = useTheme();
  
  // Theme and appearance settings
  const [themeMode, setThemeMode] = useState('light');
  const [fontSize, setFontSize] = useState(16);
  const [accentColor, setAccentColor] = useState('#2196f3');
  const [profileVisibility, setProfileVisibility] = useState('public');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dataSharing, setDataSharing] = useState(false);

  // Notification settings
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [volume, setVolume] = useState(70);
  const [customSound, setCustomSound] = useState(null);

  // Keyboard shortcuts
  const [keyboardShortcuts, setKeyboardShortcuts] = useState({
    'Save': 'Ctrl + S',
    'New Item': 'Ctrl + N',
    'Search': 'Ctrl + F',
    'Settings': 'Ctrl + ,',
    'Help': 'Ctrl + ?'
  });
  const [editingShortcut, setEditingShortcut] = useState(null);

  // Advanced privacy controls
  const [privacySettings, setPrivacySettings] = useState({
    dataRetention: '30days',
    locationSharing: false,
    activityTracking: true,
    thirdPartyAccess: false,
    dataEncryption: true
  });

  // Data management
  const [exportDialog, setExportDialog] = useState(false);
  const [importDialog, setImportDialog] = useState(false);
  const [exportFormat, setExportFormat] = useState('json');
  const [importFile, setImportFile] = useState(null);

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Animation variants
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

  // Theme change handler
  const handleThemeChange = (newTheme) => {
    setThemeMode(newTheme);
    handleSave('themeMode', newTheme);
  };

  // Accent color change handler
  const handleAccentColorChange = (event) => {
    setAccentColor(event.target.value);
    handleSave('accentColor', event.target.value);
  };

  // Handle notification sound change
  const handleSoundChange = (event) => {
    const sound = event.target.value;
    setNotifications(sound === 'custom');
    setSoundEnabled(sound === 'custom');
    if (sound === 'custom' && customSound) {
      const audio = new Audio(URL.createObjectURL(customSound));
      audio.volume = volume / 100;
      audio.play();
    }
    handleSave('notifications', sound === 'custom');
    handleSave('soundEnabled', sound === 'custom');
  };

  // Handle custom sound upload
  const handleCustomSoundUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setCustomSound(file);
      handleSave('customSound', file);
    }
  };

  // Handle keyboard shortcut edit
  const handleShortcutEdit = (action) => {
    setEditingShortcut(action);
  };

  const handleShortcutSave = useCallback(() => {
    setSnackbar({
      open: true,
      message: 'Shortcuts saved successfully',
      severity: 'success'
    });
  }, []);

  // Handle data export
  const handleExport = () => {
    const data = {
      settings: {
        notifications: {
          email: notifications,
          push: notifications,
          updates: notifications,
          sound: notifications ? 'custom' : 'default',
          volume: volume
        },
        privacy: privacySettings,
        shortcuts: keyboardShortcuts
      }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `settings-export-${new Date().toISOString()}.${exportFormat}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setExportDialog(false);
  };

  // Handle data import
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          // Apply imported settings
          if (data.settings) {
            setNotifications(data.settings.notifications.email);
            setSoundEnabled(data.settings.notifications.sound === 'custom');
            setVolume(data.settings.notifications.volume);
            setPrivacySettings(data.settings.privacy);
            setKeyboardShortcuts(data.settings.shortcuts);
          }
          handleSave('import', data);
          setImportDialog(false);
        } catch (error) {
          setSnackbar({
            open: true,
            message: 'Invalid import file format',
            severity: 'error'
          });
        }
      };
      reader.readAsText(file);
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
    const handleKeyPress = (event) => {
      if (editingShortcut) {
        handleShortcutSave(event);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [editingShortcut, handleShortcutSave]);

  useEffect(() => {
    // Load saved settings
    const savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      const { notifications, soundEnabled, volume } = JSON.parse(savedSettings);
      setNotifications(notifications);
      setSoundEnabled(soundEnabled);
      setVolume(volume);
    }
  }, []);

  useEffect(() => {
    // Save settings when they change
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