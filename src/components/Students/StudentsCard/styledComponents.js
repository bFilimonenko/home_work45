import { styled } from 'styled-components';
import Card from '@mui/material/Card';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';

export const StyledCard = styled(Card)`
    &.MuiPaper-root {
        margin: 10px;
        border-radius: 14px;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }
    }
`

export const StyledCardActions = styled(CardActions)`
    position: absolute;
    top: 8px;
    right: 8px;
`

export const ProfileHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`

export const StyledAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        width: 50px;
        height: 50px;
        background-color: #1976D2;
        margin-right: 16px;
        font-weight: bold;
    }
`


