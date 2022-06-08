import React from 'react';
import styled from 'styled-components/native';

import { themeStylesToCssString } from '../utils/helpers';


const StyledView = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
    width: 100%;
    background-color: #F1F1F5;
    border-style: solid;
    border-width: 1px;
    border-color: ${props => props.error ? '#FF4545' : '#FCFCFC'};
`;

const StyledText = styled.Text`
    color: white;
    ${() => themeStylesToCssString('text-2')};
    align-self: center;
`;

const StyledTOView = styled.View`
    padding: 12px;
    align-content: flex-end;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
    border-radius: 50%;
    width: 24px;
    height: 24px;
    opacity: ${props => props.disabled ? 0.3 : 1};
    background-color: #92929D;
    align-content: center;
    justify-content: center;
`;

const StyledTextInput = styled.TextInput`
    padding-left: 3px;
    padding: 12px;
    border-width: 0px;
    width: 85%;
    color: black;
    ${() => themeStylesToCssString('text-1')};
`;


export const TaskInput = (props) => {
    return (
        <StyledView>
            <StyledTextInput {...props}>{props.children}
            </StyledTextInput>
            <StyledTOView disabled={!props.addButtonEnabled}>
                <StyledTouchableOpacity
                    onPress={props.onAddTask}
                    disabled={!props.addButtonEnabled}
                >
                    <StyledText>+</StyledText> 
                </StyledTouchableOpacity>
            </StyledTOView>
        </StyledView>
    );
    
};

export default TaskInput;