import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { ContainerBanner, Discount, DiscountImage, HomeContainer, HomeHeaderIcon, HomePoint, HomeReferal, IconAbsolute, ImageBanner, ImageBody, ImageHeader, NewsHot, NewsHotImage, NewsHotView, NewsText, SearchInput } from "./Home.style";
import useHome from "./Home.hook";
import { Flex, Gap, HStackBetween, HStackEnd, HStackStart, View } from "../../components/Layout";
import { Image, Linking, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import icAccount from '../../../assets/icons/ic-account.png';
import icNoti from '../../../assets/icons/ic-noti.png';
import IcDiamond from '../../../assets/icons/ic_diamond.png';
import icPoint from '../../../assets/icons/ic-point.png';
import icHome from '../../../assets/icons/ic-home.png';
import icPost from '../../../assets/icons/ic-post.png';
import icReferal from '../../../assets/icons/ic-referal.png';
import imgHeader from '../../../assets/images/img-header.jpg';
import imgSearch from '../../../assets/icons/search.png';
import { Text14Medium, Text15Medium, Text18Bold, TextMedium } from "../../components/Text";
import AutoScroll from "@homielab/react-native-auto-scroll";
import { colors, fonts, fontsizes } from "../../styled";
import Swiper from "react-native-swiper";

const HomeScreen = () => {
    const dispatch = useDispatch();
    const { dataBanner, dataNews, dataDiscount, goPostDetail, navigation } = useHome();
    const number = 1234567;
    const HeaderNotification = memo(() => {
        return (
            <TouchableOpacity>
                <HomeHeaderIcon>
                    <Image source={icNoti} />
                    <IconAbsolute top={-5} right={-4}>
                        <Image source={icPoint} />
                    </IconAbsolute>
                </HomeHeaderIcon>
            </TouchableOpacity>
        );
    });
    const HeaderDiamond = memo(() => {
        return (
            <TouchableOpacity>
                <HomeHeaderIcon>
                    <Image source={IcDiamond} />
                </HomeHeaderIcon>
            </TouchableOpacity>
        );
    });
    return (
        <Flex style={{ backgroundColor: colors.white }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <ImageHeader source={imgHeader}
                />
                <HomeContainer>
                    <HStackBetween>
                        <HStackStart>
                            <Image source={icAccount} />
                            <Gap $width={15} />
                            <Text18Bold $color={colors.dark}>Xin chào, Đăng Chánh</Text18Bold>
                        </HStackStart>
                        <HStackStart>
                            <HeaderDiamond />
                            <Gap $width={15} />
                            <HeaderNotification />
                        </HStackStart>
                    </HStackBetween>
                    <Gap $height={15} />
                    <HomePoint>
                        <SearchInput>
                            <Image source={imgSearch} />
                            <TextInput
                                placeholder="Tìm kiếm"
                                placeholderTextColor={colors.gray2}
                                style={styles.searchInputl}
                            />
                        </SearchInput>
                        <Gap $width={15} />
                        <View>
                            <HStackEnd>
                                <Text14Medium $color={colors.gray2}>Điểm: </Text14Medium>
                                <Text14Medium $color={colors.dark}>{number.toLocaleString()}</Text14Medium>
                            </HStackEnd>
                            <HStackEnd>
                                <View></View>
                                <Text14Medium $color={colors.gray2}>Ngọc: </Text14Medium>
                                <Text14Medium $color={colors.dark}>{number.toLocaleString()}</Text14Medium>
                            </HStackEnd>
                        </View>
                    </HomePoint>
                    <Gap $height={20} />
                    <Swiper
                        autoplay={true}
                        autoplayTimeout={3}
                        loop={true}
                        style={styles.slide}
                    >
                        {dataBanner.map((item, idx) => {
                            return (
                                <ContainerBanner key={idx}>
                                    <ImageBanner source={item.image} />
                                </ContainerBanner>
                            );
                        })}
                    </Swiper>
                    <Gap $height={30} />
                    <AutoScroll endPadding={50}>
                        <Text15Medium>
                            Hôm nay là một ngày tuyệt vời!
                        </Text15Medium>
                    </AutoScroll>
                    <Gap $height={30} />
                    <HStackBetween>
                        <TouchableOpacity onPress={() => navigation.navigate("Root", { screen: "Profile" })}>
                            <HomeReferal $background={colors.blueBland}>
                                <Image source={icHome} />
                                <Gap $height={10} />
                                <Text15Medium $color={colors.blue}>GIỚI THIỆU</Text15Medium>
                            </HomeReferal>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL(`tel:0123456789`)}>
                            <HomeReferal $background={colors.redBland}>
                                <Image source={icReferal} />
                                <Gap $height={10} />
                                <Text15Medium $color={colors.orange}>LIÊN HỆ</Text15Medium>
                            </HomeReferal>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Main", { screen: "Post" })}>
                            <HomeReferal $background={colors.greenBland}>
                                <Image source={icPost} />
                                <Gap $height={10} />
                                <Text15Medium $color={colors.green}>BÀI VIẾT</Text15Medium>
                            </HomeReferal>
                        </TouchableOpacity>
                    </HStackBetween>
                    <Gap $height={30} />
                    <View>
                        <Text18Bold $color={colors.dark}>Ưu đãi</Text18Bold>
                        <Gap $height={20} />
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <HStackStart>
                                {dataDiscount.slice(0, 3).map((item) => (
                                    <Discount key={item.id} onPress={() => goPostDetail(item)}>
                                        <DiscountImage source={item.image} />
                                        <Gap $height={15} />
                                        <Text14Medium $color={colors.dark}>{item.title}</Text14Medium>
                                    </Discount>
                                ))}
                            </HStackStart>
                        </ScrollView>
                    </View>
                    <View>
                        <Text18Bold $color={colors.dark}>Tin tức - Khuyến mãi</Text18Bold>
                        <Gap $height={15} />
                        <NewsHot>
                            {dataNews.map(item => (
                                <NewsHotView key={item.id} onPress={() => goPostDetail(item)}>
                                    <NewsHotImage source={item.image} />
                                    <NewsText>{item.title}</NewsText>
                                </NewsHotView>
                            ))}
                        </NewsHot>
                    </View>
                </HomeContainer>
            </ScrollView>
        </Flex>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    searchInputl: {
        fontFamily: fonts.primaryRegular,
        fontSize: fontsizes.biggernormal,
        color: colors.dark,
        width: '100%',
        paddingHorizontal: 10
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 180
    },
});