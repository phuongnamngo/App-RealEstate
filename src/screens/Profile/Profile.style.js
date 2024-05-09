import styled from "styled-components";
import { HStackBetween, VStackStart } from "@/components/Layout";
import { colors } from "@/styled";
import { Dimensions, TouchableOpacity } from "react-native";

const { width } = Dimensions.get('window');
export const InputProfile = styled(HStackBetween)`
    border-bottom-width: 2px;
    border-color:${colors.gray1};
    padding-bottom: 15px;
    margin-top: 15px;
`;
export const ButtonProfile = styled(TouchableOpacity)`
    padding: 15px 0;
    border-radius: 8px;
    align-items: center;
    background-color:${colors.primary};
    margin-top:20px;
`;
export const InfoView = styled(VStackStart)`
    flex:1;
`