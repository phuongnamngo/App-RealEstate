import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import loadingJson from '../../assets/json/loading.json';
import {colors} from '../styled';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Center>
      <LottieView
        source={loadingJson}
        autoPlay
        loop
        style={{width: 100, height: 100}}
      />
    </Center>
  );
};
export default Loading;
const Center = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  opacity: 1;
  background-color: ${colors.rgba};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;
