import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  ButtonLogin,
  ForgotPass,
  ImagebackgroundLogin,
  LoginContainer,
} from './Login.style';
import imgLogin from '../../../assets/images/img-login.png';
import LinearGradient from 'react-native-linear-gradient';
import {
  Gap,
  HStack,
  HStackEnd,
  VStack,
  VStackStart,
} from '../../components/Layout';
import {
  Text14Bold,
  Text14Medium,
  Text15Medium,
  Text16Bold,
  TextBold,
} from '../../components/Text';
import {colors} from '../../styled';
import useLogin from './Login.hook';
import icGoBack from '../../../assets/icons/ic-goback.png';

const LoginScreen = props => {
  const {goPage, onSubmit, changePhone, changePass} = useLogin();
  return (
    <LoginContainer>
      <ImagebackgroundLogin source={imgLogin} resizeMode="cover">
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1)']}
          style={styles.gradient}>
          <Gap $height={80} />
          <VStack>
            <TextBold $fontSize={'40px'} $color={colors.white}>
              Đăng Nhập
            </TextBold>
          </VStack>
          <Gap $height={40} />
          <VStackStart>
            <Text15Medium $color={colors.white}>Số điện thoại</Text15Medium>
            <Gap $height={10} />
            <TextInput
              onChangeText={e => changePhone(e)}
              placeholder="Nhập số điện thoại"
              placeholderTextColor={colors.gray}
              style={styles.textInput}
            />
            <Gap $height={15} />
            <Text15Medium $color={colors.white}>Mật khẩu</Text15Medium>
            <Gap $height={10} />
            <TextInput
              onChangeText={e => changePass(e)}
              placeholder="Nhập mật khẩu"
              secureTextEntry={true}
              placeholderTextColor={colors.gray}
              style={styles.textInput}
            />
          </VStackStart>
          <ForgotPass onPress={() => goPage('ForgotPassword')}>
            <Text14Bold $color={colors.gray1}>Quên mật khẩu?</Text14Bold>
          </ForgotPass>
          <ButtonLogin onPress={() => onSubmit()}>
            <Text14Medium $color={colors.white}>Đăng nhập</Text14Medium>
          </ButtonLogin>
          <Gap $height={20} />
          <HStack>
            <Text14Medium $color={colors.gray2}>
              Bạn chưa có tài khoản{' '}
            </Text14Medium>
            <TouchableOpacity onPress={() => goPage('Register')}>
              <Text14Bold $color={colors.gray1}>Đăng Ký</Text14Bold>
            </TouchableOpacity>
          </HStack>
        </LinearGradient>
      </ImagebackgroundLogin>
    </LoginContainer>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 12,
    color: colors.dark,
  },
});
