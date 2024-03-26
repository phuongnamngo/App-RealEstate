import React, { memo } from "react";
import { useDispatch } from "react-redux";
import { HomeContainer, HomeHeaderIcon, HomePoint, HomeReferal, IconAbsolute, ImageBanner, ImageBody } from "./Home.style";
import useHome from "./Home.hook";
import { Flex, Gap, HStackBetween, HStackEnd, HStackStart, VStack, VStackStart, View } from "../../components/Layout";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import icAccount from '../../../assets/icons/ic-account.png';
import icNoti from '../../../assets/icons/ic-noti.png';
import icPoint from '../../../assets/icons/ic-point.png';
import icHome from '../../../assets/icons/ic-home.png';
import icPost from '../../../assets/icons/ic-post.png';
import icReferal from '../../../assets/icons/ic-referal.png';
import imgBanner from '../../../assets/images/banner-bds.png';
import imgRealEstate from '../../../assets/images/img-bds.jpg';
import { Text, Text14Medium, Text15Medium, Text18Bold, TextMedium } from "../../components/Text";
import AutoScroll from "@homielab/react-native-auto-scroll";
import { colors } from "../../styled";
const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const { } = useHome();
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

    return (
        <Flex>
            <ScrollView showsVerticalScrollIndicator={false}>
                <HomeContainer>
                    <HStackBetween>
                        <HStackStart>
                            <Image source={icAccount} />
                            <Gap $width={15} />
                            <VStackStart>
                                <TextMedium $color={colors.gray2}>Xin chào,</TextMedium>
                                <Gap $height={1} />
                                <Text18Bold $color={colors.dark}>Đăng Chánh</Text18Bold>
                            </VStackStart>
                        </HStackStart>
                        <HStackStart>
                            <HeaderNotification />
                        </HStackStart>
                    </HStackBetween>
                    <Gap $height={20} />
                    <HomePoint>
                        <HStackBetween>
                            <View></View>
                            <Text14Medium $color={colors.gray2}>Điểm:</Text14Medium>
                            <Text14Medium $color={colors.dark}>{number.toLocaleString()}</Text14Medium>
                        </HStackBetween>
                        <HStackBetween>
                            <View></View>
                            <Text14Medium $color={colors.gray2}>Ngọc:</Text14Medium>
                            <Text14Medium $color={colors.dark}>{number.toLocaleString()}</Text14Medium>
                        </HStackBetween>
                    </HomePoint>
                    <Gap $height={30} />
                    <ImageBanner source={imgBanner} />
                    <Gap $height={30} />
                    <AutoScroll endPadding={50}>
                        <Text15Medium>
                            Hôm nay là một ngày tuyệt vời!
                        </Text15Medium>
                    </AutoScroll>
                    <Gap $height={30} />
                    <HStackBetween>
                        <TouchableOpacity>
                            <HomeReferal $background={colors.blueBland}>
                                <Image source={icHome} />
                                <Gap $height={10} />
                                <Text15Medium $color={colors.blue}>GIỚI THIỆU</Text15Medium>
                            </HomeReferal>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <HomeReferal $background={colors.redBland}>
                                <Image source={icReferal} />
                                <Gap $height={10} />
                                <Text15Medium $color={colors.orange}>LIÊN HỆ</Text15Medium>
                            </HomeReferal>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <HomeReferal $background={colors.greenBland}>
                                <Image source={icPost} />
                                <Gap $height={10} />
                                <Text15Medium $color={colors.green}>BÀI VIẾT</Text15Medium>
                            </HomeReferal>
                        </TouchableOpacity>
                    </HStackBetween>
                    <Gap $height={30} />
                    <ImageBody source={imgRealEstate} />
                </HomeContainer>
            </ScrollView>
        </Flex>
    );
};
export default HomeScreen;