import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { green } from '@mui/material/colors';
import { orange } from '@mui/material/colors';

export const ColorButton = styled(Button)(({ theme }) => ({
  
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
}));

export const KeyboardButton = styled(Button)(({ theme }) => ({
  
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
  margin: '5px'
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  
  color: theme.palette.getContrastText(green[500]),
  backgroundColor: green[500],
  '&:hover': {
    backgroundColor: green[700],
  },
  margin: '5px'
}));


