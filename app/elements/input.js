import React from 'react';
import styled from 'styled-components/native';
import { themeStylesToCssString } from '../utils/helpers';

const StyledView = styled.View`
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
    width: 100%;
`;

const StyledTextInput = styled.TextInput`
    padding-left: 3px;
    border-style: solid;
    border-width: 1px;
    padding: 12px;
    background-color: #F1F1F5;
    border-color: ${props => props.error ? '#FF4545' : '#FCFCFC'};
    color: ${props => props.error ? '#FF4545' : 'black'};
    ${() => themeStylesToCssString('text-1')};
` 

const StyledText = styled.Text`
    text-align: left;
    color: #FF4545;
    ${() => themeStylesToCssString('error')};  
` 

export const Input = (props) => {
    return (
        <StyledView>
            <StyledTextInput {...props}>{props.children}</StyledTextInput>
            {!!props.error && <StyledText testId={props.testId + '_error'}>{props.error}</StyledText> }
        </StyledView>
    );
    
};

export default Input;