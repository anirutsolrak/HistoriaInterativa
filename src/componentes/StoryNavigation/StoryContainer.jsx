import React from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const StoryContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: `linear-gradient(to bottom, 
          ${theme.palette.background.default}, 
          ${theme.palette.background.paper})`,
        overflow: 'hidden',
      }}
    >
      {children}
    </Box>
  );
};

export default StoryContainer;