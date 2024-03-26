import styled from "styled-components";
import { HStackBetween } from "../../components/Layout";
import { colors } from "../../styled";
import { TouchableOpacity } from "react-native";
import { Text15 } from "../../components/Text";

export const SettingItem = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-color:${colors.gray1};
    padding-bottom:20px;
    margin-bottom:20px;
`;
export const TextTotal = styled(Text15)`
    color:${colors.dark};
    padding:5px 30px;
    border-width:1px;
    border-color:${colors.gray1};
    border-radius:22px;
`;