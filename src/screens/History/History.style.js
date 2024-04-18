import styled from "styled-components";
import { HStackBetween } from "../../components/Layout";
import { colors } from "../../styled";
import { TouchableOpacity } from "react-native";

export const HistoryList = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const HistoryStatus = styled.View`
    background-color: ${props => props.$bgColor || colors.green1};
    border-radius: 5px;
    padding: 5px 10px;
`;