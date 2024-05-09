import React from 'react';
import {Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Container,
  Gap,
  HStackBetween,
  VStackStart,
  View,
} from '@/components/Layout';
import {TextBold} from '@/components/Text';
import {colors, fonts, fontsizes} from '@/styled';
import {useNavigation} from '@react-navigation/native';
import icGoBack from '../../../assets/icons/ic-goback.png';
import icKey from '../../../assets/icons/ic-key.png';
import {ChangePasswordInput} from './ChangePassword.style';
import useChangePassword from './ChangePassword.hook';
import Button from '@/components/Button';
const ChangePasswordScreen = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    newPass,
    setNewPass,
    confirmPass,
    setConfirmPass,
    oldPass,
    setOldPass,
    handleSubmit,
  } = useChangePassword();
  return (
    <Container>
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
            onChangeText={text => setOldPass(text)}
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
            onChangeText={text => setNewPass(text)}
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
            onChangeText={text => setConfirmPass(text)}
          />
        </ChangePasswordInput>
      </VStackStart>
      <Gap $height={40} />
      <Button
        onPress={() => handleSubmit()}
        style={{$borderRadius: 50}}
        content={'Xác nhận'}
      />
    </Container>
  );
};
export default ChangePasswordScreen;
const styles = StyleSheet.create({
  input: {
    flex: 1,
    color: colors.dark,
    fontFamily: fonts.primaryRegular,
    fontSize: fontsizes.biggernormal,
  },
});
