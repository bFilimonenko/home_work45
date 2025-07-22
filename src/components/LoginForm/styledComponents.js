import { styled } from 'styled-components';
import { Box } from '@mui/material';
import { Form } from 'formik';

export const StyledBox = styled(Box)`
    position: relative;
    justify-items: center;
    border-radius: 4px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.4), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 25px 20px;
    margin-top: 15vh;
    width: 40vw;
    min-width: 350px;
    max-width: 750px;
    min-height: 300px;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

export const StyledImg = styled(Box)`
    max-height: 300px;
    min-width: 100px;
    width: 34%;
    position: absolute;
    bottom: 60px;
    right: 0;
`;
