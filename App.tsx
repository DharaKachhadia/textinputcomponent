import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';
import MainContainer from './src/Compoenents/container/MainContainer';
import BigText from './src/Compoenents/Texts/BigText';
import SmallText from './src/Compoenents/Texts/SmallText';
import RegularText from './src/Compoenents/Texts/RegularText';

export default function App() {
  return (
    <MainContainer>
      <BigText>hello start from here</BigText>
      <RegularText>hello from regular text </RegularText>
      <SmallText>hello from small text</SmallText>
      <Text>hellooo start from text</Text>
    </MainContainer>
  );
}
