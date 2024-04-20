import styled from "styled-components";
import { colors } from "../../styled";
import { HStackStart, VStack, View } from "../../components/Layout";
import { Dimensions, Image, ScrollView, TouchableOpacity } from "react-native";
import { Text14Medium } from "../../components/Text";

const numColumns = 2;
const screenWidth = Dimensions.get('window').width;
const itemWidth = (screenWidth / numColumns) - 25;

export const HomeContainer = styled.View`
    background-color:${colors.white};
    padding:15px 15px 0 15px;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    position:relative;
    bottom:20px
`;
export const ImageHeader = styled(Image)`
    width:100%;
    height:100px;
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
export const ContainerBanner = styled(View)`
    border-radius:10px;
    height:180px;
`;
export const ImageBanner = styled(Image)`
    width:100%;
    height:100%;
    border-radius:10px;
    resize-mode: cover;
`;
export const ImageBody = styled(Image)`
    resize-mode: cover;
    width: 100%;
    border-radius: 10px
`;
export const HomePoint = styled(HStackStart)`
`;
export const SearchInput = styled(HStackStart)`
    background-color:${colors.gray4};
    border-radius: 100px;
    padding: 0 20px;
    flex:1;
`;
export const Discount = styled(TouchableOpacity)`
    width: ${itemWidth}px;
    height: ${itemWidth + 40}px;
    margin-right: 10px;
`;
export const DiscountImage = styled(Image)`
    width: 100%;
    height: 150px;
    resizeMode: cover;
    border-radius: 10px;
`;
export const NewsHot = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
`;
export const NewsHotView = styled(TouchableOpacity)`
    width: ${itemWidth}px;
    height: ${itemWidth + 50}px;
    margin: 5px;
    border-radius: 10px;
    overflow: hidden;
    border:1px solid ${colors.gray1}
`;
export const NewsHotImage = styled(Image)`
    width: 100%;
    height: 150px;
    resizeMode:cover;
`;
export const NewsText = styled(Text14Medium)`
    color:${colors.dark};
    margin-top: 10px;
    padding: 0 10px;
`;