import { ImageBackground, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { View } from "../../components/Layout";
import { colors } from "../../styled";

export const LoginContainer = styled(View)`
    flex: 1;
    background-color:${colors.white};    
`;
export const ImagebackgroundLogin = styled(ImageBackground)`
    flex:1;
`
export const ButtonLogin = styled(TouchableOpacity)`
    background-color:${colors.primary};
    border-radius:12px;
    align-items:center;
    padding:15px;
    margin-top:15px;
`
export const ForgotPass = styled(TouchableOpacity)`
    margin-top:20px;
    align-items:flex-end;
`