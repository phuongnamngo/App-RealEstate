import React from 'react';
import {useDispatch} from 'react-redux';
import {
  Container,
  Gap,
  HStackBetween,
  VStack,
  VStackStart,
  View,
} from '@/components/Layout';
import icGoBack from '../../../assets/icons/ic-goback.png';
import {Image, TouchableOpacity} from 'react-native';
import {Text, Text14Medium, Text16, TextBold} from '@/components/Text';
import {colors} from '../../styled';
import {ButtonProfile, InfoView, InputProfile} from './Profile.style';
import iconAccount from '../../../assets/images/ic-account.png';
import useProfile from './Profile.hook';

const ProfileScreen = props => {
  const dispatch = useDispatch();
  const {navigation, data, label, infoUser} = useProfile();
  return (
    <Container>
      <VStack>
        <Image source={iconAccount} />
      </VStack>
      <Gap $height={20} />
      {label.map((item, index) => {
        return (
          <InputProfile
            key={index}
            style={{borderBottomWidth: index === label.length - 1 ? 0 : 2}}>
            <InfoView>
              <Text16 $color={colors.gray}>{item.title}</Text16>
              <Gap $height={5} />
              <Text16 $color={colors.dark}>{data[item.key]}</Text16>
            </InfoView>
            <View>
              <Image source={item.image} />
            </View>
          </InputProfile>
        );
      })}
      <ButtonProfile
        onPress={() => navigation.navigate('ChangeProfle', {data: infoUser})}>
        <Text14Medium $color={colors.white}>Sửa thông tin</Text14Medium>
      </ButtonProfile>
    </Container>
  );
};
export default ProfileScreen;
