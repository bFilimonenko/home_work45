import { styled } from 'styled-components';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export const StyledCard = styled(Card)`
    //width: 50vw;
    //margin: 10px;
    //width: 300px
    min-width: 250px;
    width: 49%;
    //width: 45%;
    
    @media (max-width: 900px) {
        width: 100%;
    }

`;


