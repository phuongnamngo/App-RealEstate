import React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Container, Gap, HStackBetween, VStack, View } from "../../components/Layout";
import { colors } from "../../styled";
import icGoBack from '../../../assets/icons/ic-goback.png';
import { Text13, Text14Medium, Text16Bold, TextBold } from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import { ImagePostDetail } from "./PostDetail.style";

const PostDetailScreen = (props) => {
    const navigation = useNavigation();

    const { item } = props.route.params
    return (
        <Container style={{ backgroundColor: colors.white }}>
            <HStackBetween>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icGoBack} />
                </TouchableOpacity>
                <TextBold $fontSize={'24px'} $color={colors.dark}>Chi tiết bài viết</TextBold>
                <View></View>
            </HStackBetween>
            <Gap $height={20} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <VStack>
                    <ImagePostDetail source={item?.image} />
                    <Gap $height={20} />
                    <TextBold $fontSize={'22px'} $color={colors.dark}>{item.title}</TextBold>
                    <Gap $height={15} />
                    <Text13 $color={colors.dark}>{item.content}</Text13>
                </VStack>
            </ScrollView>
        </Container>
    );
};
export default PostDetailScreen;