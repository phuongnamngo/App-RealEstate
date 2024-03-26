import React from "react";
import { useDispatch } from "react-redux";
import { Container, Gap, HStackBetween, VStack, VStackStart, View } from "../../components/Layout";
import icGoBack from '../../../assets/icons/ic-goback.png';
import { Image, TouchableOpacity } from "react-native";
import { Text, Text14Medium, Text16, TextBold } from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styled";
import icProfile from '../../../assets/icons/icon-profile.png';
import icAddress from '../../../assets/icons/ic-address.png';
import icBirthday from '../../../assets/icons/ic-birthday.png';
import icPhone from '../../../assets/icons/ic-phone.png';
import icMail from '../../../assets/icons/ic-mail.png';
import { ButtonProfile, InputProfile } from "./Profile.style";
import iconAccount from "../../../assets/images/ic-account.png";

const ProfileScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const data = {
        name: 'Đăng Chánh',
        address: "City Land, Gò Vấp",
        birthday: "01/01/1990",
        phone: "0123456789",
        mail: "dangchanh@gmail.com"
    };
    const label = [{
        title: "Chủ tài khoản",
        image: icProfile,
        key: 'name',
    },
    {
        title: "Địa chỉ",
        image: icAddress,
        key: 'address',
    },
    {
        title: "Số điện thoại",
        image: icPhone,
        key: 'phone',
    },
    {
        title: "Ngày sinh",
        image: icBirthday,
        key: 'birthday',
    },
    {
        title: "Email",
        image: icMail,
        key: 'mail',
    },
    ]
    return (
        <Container>
            <HStackBetween>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icGoBack} />
                </TouchableOpacity>
                <TextBold $fontSize={'24px'} $color={colors.dark}>Thông tin cá nhân</TextBold>
                <View></View>
            </HStackBetween>
            <Gap $height={30} />
            <View>
                <VStack>
                    <Image source={iconAccount} />
                </VStack>
                <Gap $height={20} />
                {label.map((item, index) => {
                    return (
                        <InputProfile key={index} style={{ borderBottomWidth: index === label.length - 1 ? 0 : 2 }}>
                            <VStackStart>
                                <Text16 $color={colors.gray}>{item.title}</Text16>
                                <Gap $height={5} />
                                <Text16 $color={colors.dark}>{data[item.key]}</Text16>
                            </VStackStart>
                            <View>
                                <Image source={item.image} />
                            </View>
                        </InputProfile>
                    )
                })}
                <ButtonProfile onPress={() => navigation.navigate("ChangeProfle", { data })}>
                    <Text14Medium $color={colors.white}>Sửa thông tin</Text14Medium>
                </ButtonProfile>
            </View>
        </Container >
    );
};
export default ProfileScreen;