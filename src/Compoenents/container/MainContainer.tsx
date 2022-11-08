import {View, Text} from 'react-native';
import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {ContainerProps} from './types'
import { color} from '../colors';
const {gray} = color;

const StyledView = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: 40px;
  /* background-color: ${gray}; */
  justify-content: center;
  align-items: center;
`

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
  return (
 <StyledView style={props.style}>{props.children}</StyledView>
  );
};

export default MainContainer;
