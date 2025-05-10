import { styled } from 'styled-components';
import Card from '@mui/material/Card';
import { Avatar, IconButton } from '@mui/material';
import Box from '@mui/material/Box';

export const StyledCard = styled(Card)`
    &.MuiPaper-root {
        margin: 10px;
        border-radius: 14px;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12)
        }
    }
`

export const DeleteButton = styled(IconButton)`
    &.MuiButtonBase-root {
        position: absolute;
        top: 8px;
        right: 8px;
        color: #d50000;

        &:hover {
            background-color: rgba(197, 50, 50, 0.1)
        }
    }
`

export const StyledAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        width: 50px;
        height: 50px;
        background-color: #32C5A2;
        margin-right: 16px;
        font-size: 1.5rem;
    }
`

export const InfoDisplay = styled(Box)`
  
    margin-bottom: 12px;

     & .MuiTypography-root {
        &.label {
            font-weight: 500;
            color: #455a64;
            font-size: 0.875rem;
            margin-bottom: 2px;
        }

        &.value {
            font-size: 1rem;
            color: #1F2937;
        }
    }
`

