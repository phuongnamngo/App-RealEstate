import styled from "styled-components";
import { HStackBetween } from "../../components/Layout";
import { colors } from "../../styled";
import { TouchableOpacity } from "react-native";

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