import React from 'react';
import { useLinkProps } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Button } from '../elements';


const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    margin-top: 16px;
    width: 100%;
`;


const StyledText = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.1px;
    width: 70%;
    align-self: center;
` 

export const Header = ({ username, onLogOut }) => {

    return (
        <StyledView>
            <StyledText>{`Welcome, ${username}`}</StyledText>
            <Button
                onPress={onLogOut}
                title="Sign Out"
            >
                Sign Out
            </Button>
        </StyledView>
    );
    
};

export default Header;