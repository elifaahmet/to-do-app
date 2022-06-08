import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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

const StyledButton = styled.Text`
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
    background-color: #92929D;
    align-content: center;
    justify-content: center;
`;

const StyledTextInput = styled.TextInput`
    width: 85%;
    color: black;
    padding-left: 3px;
    padding: 12px;
    border-width: 0px;
    ${() => themeStylesToCssString('text-1')};
`;

const StyledText = styled.Text`
    width: 85%;
    color: black;
    padding-left: 3px;
    padding: 12px;
    border-width: 0px;
    ${() => themeStylesToCssString('text-1')};
`;

const StyledTouchableWithoutFeedback = styled.TouchableWithoutFeedback`
    background-color: transparent;
    ${() => themeStylesToCssString('text-1')};
`;

export const TaskBox = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(props.task);

    return (
        <StyledView>
            <StyledTouchableWithoutFeedback onPress={() => { setEditMode(true) }}>
                {editMode ?
                    <StyledTextInput
                        {...props}
                        autoFocus={true}
                        onChangeText={setValue} 
                        value={value}
                        onSubmitEditing={() => { props.onEditTask(props.task, value); setEditMode(false); }}
                    />
                    :
                    <StyledText {...props}>{props.task}
                    </StyledText>
                }
            </StyledTouchableWithoutFeedback>
            <StyledTOView>
                <StyledTouchableOpacity
                    onPress={() => {props.onDeleteTask(props.task)}}
                >
                    <StyledButton>X</StyledButton> 
                </StyledTouchableOpacity>
            </StyledTOView>
        </StyledView>
    );
    
};

export default TaskBox;