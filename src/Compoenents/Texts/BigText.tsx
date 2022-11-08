import {View, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {TextProps} from './types'
import { color} from '../colors';
const {lightgray} = color;

const StyledText = styled.Text`
  font-size:30px;
  color: ${lightgray};
  text-align:left;
`

const BigText: FunctionComponent<TextProps> = (props) => {
  return (
 <StyledText style={props.style}>{props.children}</StyledText>
  );
};

export default BigText;
