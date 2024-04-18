import { Image } from "react-native";
import styled from "styled-components";
import { VStackStart } from "../../components/Layout";
import { colors } from "../../styled";

export const ItemContainer = styled(VStackStart)`
    padding: 15px 15px 20px 15px;
    margin-bottom:20px;
    border-color:${colors.gray1}
`;
export const ImagePost = styled(Image)`
    width:100%;
    height:200px;
    resize-mode:cover;
    border-radius:8px;
`;