import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { useDispatch } from "react-redux";
import { Container, Flex, Gap, HStack, HStackStart, VStack } from "../../components/Layout";
import { Text16, TextBold } from "../../components/Text";
import { colors } from "../../styled";
import iconProfile from "../../../assets/icons/ic-profile.png";
import iconChangePass from "../../../assets/icons/ic-changePass.png";
import iconNext from "../../../assets/icons/ic-next.png";
import iconHistory from "../../../assets/icons/ic-history.png";
import iconLogout from "../../../assets/icons/ic-logout.png";
import iconAccount from "../../../assets/images/ic-account.png";
import { SettingItem, TextTotal } from "./Setting.style";
import { useNavigation } from "@react-navigation/native";
import useSetting from "./Setting.hook";
const SettingScreen = (props) => {
    const dispatch = useDispatch();
    const { Logout } = useSetting();
    const navigation = useNavigation()
    const data = [{
        id: 1,
        icNext: iconNext,
        icProfile: iconHistory,
        title: 'Lịch sử giao dịch',
        onPress: ""
    },
    {
        id: 2,
        icNext: iconNext,
        icProfile: iconProfile,
        title: 'Thông tin cá nhân',
        onPress: "Profile"
    },
    {
        id: 3,
        icNext: iconNext,
        icProfile: iconChangePass,
        title: 'Đổi mật khẩu',
        onPress: "ChangePassword"
    }]
    return (
        <Container>
            <HStack>
                <TextBold $fontSize={'24px'} $color={colors.dark}>Tài khoản</TextBold>
            </HStack>
            <Gap $height={30} />
            <VStack>
                <Image source={iconAccount} />
                <Gap $height={10} />
                <TextBold $fontSize={'20px'} $color={colors.dark}>Đăng Chánh</TextBold>
                <Gap $height={10} />
                <TextTotal $fontSize={'20px'} $color={colors.dark}>Tổng điểm bạn đang có: 200 điểm</TextTotal>
            </VStack>
            <Gap $height={40} />
            {data.map((item, index) => {
                return (
                    <SettingItem onPress={() => navigation.navigate("Root", { screen: item.onPress })} key={index} style={{ borderBottomWidth: 1 }}>
                        <HStackStart>
                            <Image source={item.icProfile} />
                            <Gap $width={10} />
                            <Text16 $color={colors.gray3}>{item.title}</Text16>
                        </HStackStart>
                        <Image source={item.icNext} />
                    </SettingItem>
                )
            })}
            <SettingItem onPress={() => Logout()}>
                <HStackStart>
                    <Image source={iconLogout} />
                    <Gap $width={10} />
                    <Text16 $color={colors.gray3}>Đăng xuất</Text16>
                </HStackStart>
                <Image source={iconNext} />
            </SettingItem>

        </Container>
    );
};
export default SettingScreen;
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});