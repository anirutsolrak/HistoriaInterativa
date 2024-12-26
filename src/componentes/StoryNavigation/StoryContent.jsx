import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const StoryContent = ({ text }) => {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      sx={{
        flex: 1,
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{
          color: theme.palette.text.primary,
          lineHeight: 1.8,
          textAlign: 'left',
          mb: 4,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default StoryContent;