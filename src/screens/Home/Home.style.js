import styled from "styled-components";
import { colors } from "../../styled";
import { VStack } from "../../components/Layout";
import { Image } from "react-native";

export const HomeContainer = styled.View`
    background-color:#FFFFFF;
    padding:20px;
`;
export const HomeHeaderIcon = styled.View`
`;
export const IconAbsolute = styled.View`
  position: absolute;
`;
export const HomeReferal = styled(VStack)`
    ${props => (props.$background ? `background-color: ${props.$background}` : null)};
    border-radius: 12px;
    width: 110px;
    height: 120px;
    padding: 5px;
`;
export const ImageBanner = styled(Image)`
    border-radius:10px;
`;
export const ImageBody = styled(Image)`
    resize-mode: cover;
    width: 100%;
    border-radius: 10px
`;

