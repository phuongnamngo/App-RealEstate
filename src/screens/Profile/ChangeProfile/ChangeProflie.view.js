import React from "react";
import { View, TouchableOpacity, Image, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { useDispatch } from "react-redux";
import { Container, Gap, HStackBetween, VStack, VStackStart } from "../../../components/Layout";
import { Text14Medium, Text16, TextBold } from "../../../components/Text";
import { colors, fonts, fontsizes } from "../../../styled";
import icGoBack from '../../../../assets/icons/ic-goback.png';
import { useNavigation } from "@react-navigation/native";
import iconAccount from "../../../../assets/images/ic-account.png";
import { ChangeInputProfile } from "./ChangeProflie.style";
import { ButtonProfile } from "../Profile.style";
const ChangeProflieScreen = (props) => {
    const { data } = props.route.params;
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const label = [{
        title: "Chủ tài khoản",
        place: "Nhập tên",
        key: 'name',
    },
    {
        title: "Địa chỉ",
        place: "Nhập địa chỉ",
        key: 'address',
    },
    {
        title: "Số điện thoại",
        place: "Nhập số điện thoại",
        key: 'phone',
    },
    {
        title: "Ngày sinh",
        place: "Nhập ngày sinh",
        key: 'birthday',
    },
    {
        title: "Email",
        place: "Nhập email",
        key: 'mail',
    },
    ]
    return (
        <Container>
                <HStackBetween>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icGoBack} />
                    </TouchableOpacity>
                    <TextBold $fontSize={'24px'} $color={colors.dark}>Chỉnh sửa thông tin</TextBold>
                    <View></View>
                </HStackBetween>
                <Gap $height={30} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <VStack>
                        <Image source={iconAccount} />
                    </VStack>
                    {label.map((item, index) => {
                        return (
                            <ChangeInputProfile key={index}>
                                <Text16 $color={colors.gray}>{item.title}</Text16>
                                <Gap $height={10} />
                                <TextInput
                                    style={styles.textInput}
                                    placeholder={item.place}
                                    placeholderTextColor={colors.gray2} />
                            </ChangeInputProfile>
                        )
                    })}
                    <ButtonProfile>
                        <Text14Medium $color={colors.white}>Lưu thông tin</Text14Medium>
                    </ButtonProfile>
                </ScrollView>
        </Container>
    );
};
export default ChangeProflieScreen;
const styles = StyleSheet.create({
    textInput: {
        borderRadius: 24,
        borderWidth: 1,
        borderColor: colors.gray1,
        paddingHorizontal: 15,
        paddingVertical: 7,
        fontFamily: fonts.primaryMedium,
        color: colors.black,
        fontSize: fontsizes.big,
        width: '100%'
    }
})