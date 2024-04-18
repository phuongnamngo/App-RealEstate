import React from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Container, Flex, Gap, HStack, VStackStart, View } from "../../components/Layout";
import { Text14, Text15Medium, Text18Bold, TextBold } from "../../components/Text";
import { colors } from "../../styled";
import { ImagePost, ItemContainer } from "./Post.style";
import { useNavigation } from "@react-navigation/native";
const PostScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const data = [{
        id: 1,
        title: 'Bai dang 1',
        image: require('../../../assets/images/anh1.jpg'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam justo. Nullam sed volutpat nunc.'
    },
    {
        id: 2,
        title: 'Bai dang 2',
        image: require('../../../assets/images/anh2.jpg'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam justo. Nullam sed volutpat nunc.'
    },
    {
        id: 3,
        title: 'Bai dang 3',
        image: require('../../../assets/images/anh3.png'),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec diam justo. Nullam sed volutpat nunc.'
    },]
    const renderItem = (item, index) => {
        return (
            <ItemContainer style={{ borderBottomWidth: index === data.length - 1 ? 0 : 4 }}>
                <ImagePost source={item.image} />
                <Gap $height={10} />
                <TouchableOpacity onPress={() => navigation.navigate("Root", { screen: "PostDetail", params: { item } })}>
                    <Text15Medium $color={colors.dark}>{item.title}</Text15Medium>
                    <Gap $height={5} />
                    <Text14 numberOfLines={2} $color={colors.dark}>{item.content}</Text14>
                </TouchableOpacity>
            </ItemContainer>
        )
    }
    return (
        <Flex style={{ backgroundColor: colors.white }}>
            <HStack>
                <TextBold $fontSize={'24px'} $color={colors.dark}>Bài đăng</TextBold>
            </HStack>
            <Gap $height={20} />
            <FlatList
                data={data}
                renderItem={({ item, index }) => renderItem(item, index)}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Flex>
    );
};
export default PostScreen;