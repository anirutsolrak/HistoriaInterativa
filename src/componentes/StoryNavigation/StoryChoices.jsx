import React from 'react';
import { Box, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const StoryChoices = ({ choices, onChoiceSelect }) => {
  const theme = useTheme();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Box
      component={motion.div}
      variants={container}
      initial="hidden"
      animate="show"
      sx={{
        width: '100%',
        maxWidth: '800px',
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        pb: 4,
      }}
    >
      {choices.map((choice, index) => (
        <motion.div key={index} variants={item}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => onChoiceSelect(choice.proximoNodo)}
            sx={{
              mb: 2,
              py: 2,
              backgroundColor: theme.palette.background.paper,
              color: theme.palette.text.primary,
              borderRadius: 2,
              border: `1px solid ${theme.palette.divider}`,
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: theme.palette.primary.main,
                transform: 'translateY(-2px)',
                boxShadow: theme.shadows[4],
              },
            }}
          >
            {choice.texto}
          </Button>
        </motion.div>
      ))}
    </Box>
  );
};

export default StoryChoices;