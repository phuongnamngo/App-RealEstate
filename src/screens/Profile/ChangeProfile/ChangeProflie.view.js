import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Container,
  Gap,
  HStackBetween,
  VStack,
  VStackStart,
} from '../../../components/Layout';
import {Text14Medium, Text16, TextBold} from '../../../components/Text';
import {colors, fonts, fontsizes} from '../../../styled';
import icGoBack from '../../../../assets/icons/ic-goback.png';
import {useNavigation} from '@react-navigation/native';
import iconAccount from '../../../../assets/images/ic-account.png';
import {
  BirthdayView,
  ButtonCalendar,
  ChangeInputProfile,
} from './ChangeProflie.style';
import {ButtonProfile} from '../Profile.style';
import useChangeProfile from './ChangeProflie.hook';
import {formatDate} from '@/utils/DateUtils';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import icCalendar from '../../../../assets/icons/ic-calendar.png';
import CustomSelect from '@/components/CustomSelect';
const ChangeProflieScreen = props => {
  const {data} = props.route.params;
  const dispatch = useDispatch();
  const {
    onChange,
    profile,
    showBirthday,
    changeShowBirthday,
    actionConfirm,
    UpdateInfo,
    provinces,
    districts,
    wards,
  } = useChangeProfile({data});
  const navigation = useNavigation();
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack>
          <Image source={iconAccount} />
        </VStack>
        <ChangeInputProfile>
          <Text16 $color={colors.gray}>Chủ tài khoản</Text16>
          <Gap $height={10} />
          <TextInput
            style={styles.textInput}
            placeholder={'Nhập tên'}
            value={profile.name}
            onChangeText={value => onChange('name', value)}
            placeholderTextColor={colors.gray2}
          />
        </ChangeInputProfile>
        <ChangeInputProfile>
          <Text16 $color={colors.gray}>Email</Text16>
          <Gap $height={10} />
          <TextInput
            style={styles.textInput}
            value={profile.email}
            onChangeText={value => onChange('email', value)}
            placeholder={'Nhập email'}
            placeholderTextColor={colors.gray2}
          />
        </ChangeInputProfile>
        <ChangeInputProfile>
          <Text16 $color={colors.gray}>Ngày sinh</Text16>
          <Gap $height={10} />
          <DateTimePickerModal
            isVisible={showBirthday}
            date={new Date(profile.birthday)}
            mode={'date'}
            display="default"
            onConfirm={value => onChange('birthday', value)}
            onCancel={UpdateInfo}
          />
          <BirthdayView>
            <TextInput
              style={styles.textInput1}
              value={formatDate(profile.birthday)}
              placeholder={'Nhập ngày sinh'}
              placeholderTextColor={colors.gray2}
            />
            <ButtonCalendar onPress={changeShowBirthday}>
              <Image source={icCalendar} />
            </ButtonCalendar>
          </BirthdayView>
        </ChangeInputProfile>
        <ChangeInputProfile>
          <Text16 $color={colors.gray}>Địa chỉ</Text16>
          <Gap $height={10} />
          <TextInput
            style={styles.textInput}
            value={profile.address}
            onChangeText={value => onChange('address', value)}
            placeholder={'Nhập địa chỉ'}
            placeholderTextColor={colors.gray2}
          />
        </ChangeInputProfile>
        <CustomSelect
          options={provinces}
          onSelect={value => onChange('province_id', value)}
          selectedValue={profile.province}
          placeholder={'Chọn tỉnh thành'}
          title={'Tỉnh/Thành Phố'}
        />
        <CustomSelect
          options={districts}
          onSelect={value => onChange('district_id', value)}
          selectedValue={profile.district}
          placeholder={'Chọn quận/huyện'}
          title={'Quận/Huyện'}
        />
        <CustomSelect
          options={wards}
          onSelect={value => onChange('wards_id', value)}
          selectedValue={profile.ward}
          placeholder={'Chọn phường/xã'}
          title={'Phường/Xã'}
        />
        <ButtonProfile onPress={() => actionConfirm()}>
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
    color: colors.dark,
    fontSize: fontsizes.big,
    width: '100%',
  },
  textInput1: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontFamily: fonts.primaryMedium,
    color: colors.dark,
    fontSize: fontsizes.big,
  },
});
