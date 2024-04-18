import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import { ButtonLogin, ForgotPass, ImagebackgroundLogin, LoginContainer } from "./ForgotPassword.style";
import imgLogin from '../../../assets/images/img-login.png';
import LinearGradient from 'react-native-linear-gradient';
import { Gap, HStack, HStackEnd, HStackStart, VStack, VStackStart } from "../../components/Layout";
import { Text14Bold, Text14Medium, Text15Medium, Text16Bold, TextBold } from "../../components/Text";
import { colors } from "../../styled";
import useForgotPassword from "./ForgotPassword.hook";
import icGoBack from '../../../assets/icons/ic-goback.png';

const ForgotPasswordScreen = () => {
    const { navigation } = useForgotPassword();
    return (
        <LoginContainer>
            <ImagebackgroundLogin source={imgLogin} resizeMode="cover">
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,1)']}
                    style={styles.gradient}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image source={icGoBack} />
                        </TouchableOpacity>
                        <Gap $height={80} />
                        <VStack>
                            <TextBold $fontSize={'40px'} $color={colors.white}>Quên Mật Khẩu</TextBold>
                        </VStack>
                        <Gap $height={40} />
                        <VStackStart>
                            <Text15Medium $color={colors.white}>Số điện thoại</Text15Medium>
                            <Gap $height={10} />
                            <TextInput
                                placeholder="Nhập số điện thoại"
                                placeholderTextColor={colors.gray}
                                style={styles.textInput} />

                        </VStackStart>
                        <ButtonLogin>
                            <Text14Medium $color={colors.white}>Gửi</Text14Medium>
                        </ButtonLogin>
                    </ScrollView>
                </LinearGradient>
            </ImagebackgroundLogin>
        </LoginContainer>
    );
};
export default ForgotPasswordScreen;
const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        padding: 20
    },
    textInput: {
        backgroundColor: colors.white,
        width: "100%",
        paddingHorizontal: 15,
        borderRadius: 12,
        color: colors.dark
    }
});