import { memo } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Gap, HStack } from "./Layout";
import { Text, TextMedium } from "./Text";
import { colors } from "../styled";

const ButtonConfirm = ({
    content,
    icon,
    fontSize,
    textColor,
    onPress,
    style,
}) => {
    return (
        <ButtonConfirmContainer
            onPress={onPress}
            {...style}>
            <HStack>
                {icon}
                {icon && <Gap $width={12} />}
                <Text
                    $fontSize={fontSize}
                    $color={textColor ? textColor : colors.white}>
                    {content}
                </Text>
            </HStack>
        </ButtonConfirmContainer>
    );
};
const ButtonConfirmContainer = styled(TouchableOpacity)`
    border-radius: ${props => props.$borderRadius || 10}px;
    padding: ${props => props.$padding || 15}px;
    border: ${(`1px solid`, props => props.$borderColor || 'none')};
    background-color: ${props => props.$bgColor || colors.primary};
  `;
export default memo(ButtonConfirm);
