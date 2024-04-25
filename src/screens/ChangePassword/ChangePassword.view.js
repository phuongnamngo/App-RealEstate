import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { Container, Gap, HStackBetween, VStackStart, View } from "../../components/Layout";
import { TextBold } from "../../components/Text";
import { colors, fonts, fontsizes } from "../../styled";
import { useNavigation } from "@react-navigation/native";
import icGoBack from '../../../assets/icons/ic-goback.png';
import icKey from '../../../assets/icons/ic-key.png';
import { ChangePasswordInput } from "./ChangePassword.style";
import useChangePassword from "./ChangePassword.hook";
import Button from "../../components/Button";
const ChangePasswordScreen = (props) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { newPass, setNewPass, confirmPass, setConfirmPass, oldPass, setOldPass } = useChangePassword();
    return (
        <Container>
            <HStackBetween>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icGoBack} />
                </TouchableOpacity>
                <TextBold $fontSize={'24px'} $color={colors.dark}>Đổi mật khẩu</TextBold>
                <View></View>
            </HStackBetween>
            <Gap $height={40} />
            <VStackStart>
                <ChangePasswordInput>
                    <Image source={icKey} />
                    <Gap $width={10} />
                    <TextInput
                        style={styles.input}
                        value={oldPass}
                        placeholder="Nhập mật khẩu cũ"
                        placeholderTextColor={colors.gray2}
                        secureTextEntry={true}
                        onChangeText={(text) => setOldPass(text)}
                    />
                </ChangePasswordInput>
                <Gap $height={20} />
                <ChangePasswordInput>
                    <Image source={icKey} />
                    <Gap $width={10} />
                    <TextInput
                        style={styles.input}
                        value={newPass}
                        placeholder="Nhập mật khẩu mới"
                        placeholderTextColor={colors.gray2}
                        secureTextEntry={true}
                        onChangeText={(text) => setNewPass(text)}
                    />
                </ChangePasswordInput>
                <Gap $height={20} />
                <ChangePasswordInput>
                    <Image source={icKey} />
                    <Gap $width={10} />
                    <TextInput
                        style={styles.input}
                        value={confirmPass}
                        placeholder="Xác nhận mật khẩu mới"
                        placeholderTextColor={colors.gray2}
                        secureTextEntry={true}
                        onChangeText={(text) => setNewPass(setConfirmPass)}
                    />
                </ChangePasswordInput>
            </VStackStart>
            <Gap $height={40} />
            <Button
                style={{ $borderRadius: 50 }}
                content={'Xác nhận'} />
        </Container>
    );
};
export default ChangePasswordScreen;
const styles = StyleSheet.create({
    input: {
        flex: 1,
        color: colors.dark,
        fontFamily: fonts.primaryRegular,
        fontSize: fontsizes.biggernormal
    }
})