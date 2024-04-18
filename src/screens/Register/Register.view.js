import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import { ButtonLogin, ForgotPass, ImagebackgroundLogin, LoginContainer } from "./Register.style";
import imgLogin from '../../../assets/images/img-login.png';
import LinearGradient from 'react-native-linear-gradient';
import { Gap, HStack, HStackEnd, VStack, VStackStart } from "../../components/Layout";
import { Text14Bold, Text14Medium, Text15Medium, Text16Bold, TextBold } from "../../components/Text";
import { colors } from "../../styled";
import useRegister from "./Register.hook";

const RegisterScreen = () => {
    const { goLogin } = useRegister();
    return (
        <LoginContainer>
            <ImagebackgroundLogin source={imgLogin} resizeMode="cover">

                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,1)']}
                    style={styles.gradient}
                >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Gap $height={80} />
                        <VStack>
                            <TextBold $fontSize={'40px'} $color={colors.white}>Đăng Ký</TextBold>
                        </VStack>
                        <Gap $height={40} />
                        <VStackStart>
                            <Text15Medium $color={colors.white}>Họ tên người dùng</Text15Medium>
                            <Gap $height={10} />
                            <TextInput
                                placeholder="Nhập tên người dùng"
                                placeholderTextColor={colors.gray}
                                style={styles.textInput} />
                            <Gap $height={15} />
                            <Text15Medium $color={colors.white}>Số điện thoại</Text15Medium>
                            <Gap $height={10} />
                            <TextInput
                                placeholder="Nhập số điện thoại"
                                placeholderTextColor={colors.gray}
                                style={styles.textInput} />
                            <Gap $height={15} />
                            <Text15Medium $color={colors.white}>Mật khẩu</Text15Medium>
                            <Gap $height={10} />
                            <TextInput
                                placeholder="Nhập mật khẩu"
                                secureTextEntry={true}
                                placeholderTextColor={colors.gray}
                                style={styles.textInput} />
                            <Gap $height={15} />
                            <Text15Medium $color={colors.white}>Nhập lại mật khẩu</Text15Medium>
                            <Gap $height={10} />
                            <TextInput
                                placeholder="Nhập lại mật khẩu"
                                secureTextEntry={true}
                                placeholderTextColor={colors.gray}
                                style={styles.textInput} />
                        </VStackStart>
                        <ButtonLogin>
                            <Text14Medium $color={colors.white}>Đăng ký</Text14Medium>
                        </ButtonLogin>
                        <Gap $height={20} />
                        <HStack>
                            <Text14Medium $color={colors.gray2}>Bạn đã có tài khoản{" "}</Text14Medium>
                            <TouchableOpacity onPress={() => goLogin()}>
                                <Text14Bold $color={colors.gray1}>Đăng Nhập</Text14Bold>
                            </TouchableOpacity>
                        </HStack>
                    </ScrollView>
                </LinearGradient>
            </ImagebackgroundLogin>
        </LoginContainer>
    );
};
export default RegisterScreen;
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