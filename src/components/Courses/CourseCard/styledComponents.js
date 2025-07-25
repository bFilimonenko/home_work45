import { styled } from 'styled-components';
import Card from '@mui/material/Card';
import { NavLink } from 'react-router';

export const StyledCard = styled(Card)`
    min-width: 250px;
    width: 49%;
    
    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    color: #0066ff;
`


