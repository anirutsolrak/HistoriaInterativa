import React from 'react';
import { Box, LinearProgress, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const StoryProgress = ({ current, total }) => {
  const theme = useTheme();
  const progress = (current / total) * 100;

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[2],
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
        }}
      >
        <Typography variant="body2" sx={{ mr: 2 }}>
          {current} de {total}
        </Typography>
        <Box sx={{ width: '200px' }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              backgroundColor: theme.palette.background.default,
              '& .MuiLinearProgress-bar': {
                borderRadius: 4,
                backgroundColor: theme.palette.primary.main,
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default StoryProgress;