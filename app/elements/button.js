import React from 'react';
import styled from 'styled-components/native';

import { themeStylesToCssString } from '../utils/helpers';

const StyledButton = styled.TouchableOpacity`
    background-color: #0062FF;
    padding: 12px;
`;

const StyledText = styled.Text`
    ${() => themeStylesToCssString('text-2')};
    text-align: center;
    color: #FCFCFC;
    text-transform: uppercase;
`;


export default function (props) {
    return (
    <StyledButton {...props}>
        <StyledText>{props.children}</StyledText>
    </StyledButton>
    );
};
