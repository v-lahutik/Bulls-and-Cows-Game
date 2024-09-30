import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { green, orange, red } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',  // Smaller text size on medium and below
    padding: '8px 16px', // Adjust padding for medium and smaller screens
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',  // Smaller text size on small screens
    padding: '6px 12px', // Adjust padding for small screens
  },
}));

export const KeyboardButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
  margin: '5px',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    padding: '8px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '6px 12px',
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
  margin: '5px',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    padding: '8px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '6px 12px',
  },
}));
export const DeleteButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
  margin: '5px',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
    padding: '8px 16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '6px 12px',
  },
}));

