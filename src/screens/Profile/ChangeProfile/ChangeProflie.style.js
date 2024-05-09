import styled from "styled-components";
import { HStackBetween, VStackStart } from "@/components/Layout";
import { colors } from "@/styled";
import { Pressable } from "react-native";

export const ChangeInputProfile = styled(VStackStart)`
    margin-top:15px;
`;
export const BirthdayView = styled(HStackBetween)`
    border-width: 1px;
    border-color: ${colors.gray1};
    border-radius: 24px;
    width:100%;
`;
export const ButtonCalendar = styled(Pressable)`
    margin-right: 15px;    
`; 