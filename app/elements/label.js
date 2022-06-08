import React from 'react';
import styled from 'styled-components/native';

import { themeStylesToCssString } from '../utils/helpers';

const StyledText = styled.Text`
    ${() => themeStylesToCssString('header-0')};  
    text-align: center;
` 
export const Label = (props) => {
    return <StyledText {...props}>{props.children}</StyledText>
};

export default Label;