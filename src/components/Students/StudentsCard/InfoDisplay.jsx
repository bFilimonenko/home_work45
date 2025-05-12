import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const InfoDisplay = ({ label, value }) => (
  <Box>
    <Typography className="label" variant="caption" color="textSecondary">
      {label}
    </Typography>
    <Typography className="value" variant="body1">
      {value}
    </Typography>
  </Box>
);