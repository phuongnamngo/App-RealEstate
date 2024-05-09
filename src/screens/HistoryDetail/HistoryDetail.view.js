import React from 'react';
import {Image, ScrollView, TouchableOpacity} from 'react-native';
import {
  Container,
  Gap,
  HStackBetween,
  VStack,
  VStackStart,
  View,
} from '../../components/Layout';
import {colors} from '../../styled';
import icGoBack from '../../../assets/icons/ic-goback.png';
import {
  Text13,
  Text14Bold,
  Text14Medium,
  Text16Bold,
  TextBold,
  TextMedium,
} from '../../components/Text';
import {useNavigation} from '@react-navigation/native';
import {Border} from './HistoryDetail.style';
import useHistoryDetail from './HistoryDetail.hook';

const HistoryDetailScreen = props => {
  const navigation = useNavigation();
  const {statusHistory} = useHistoryDetail();
  const {item} = props.route.params;
  return (
    <Container style={{backgroundColor: colors.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStackStart>
          <Text13 $color={colors.dark}>Thời gian giao dịch: {item.time}</Text13>
          <Gap $height={7} />
          <TextMedium $fontSize={'15px'} $color={colors.dark}>
            Người gửi: {item.to}
          </TextMedium>
          <Border />
          <TextMedium $fontSize={'15px'} $color={colors.dark}>
            Số tiền giao dịch: {item.price}
          </TextMedium>
          <Gap $height={7} />
          <Text13 $color={colors.dark}>{item.content}</Text13>
          <Gap $height={7} />
          <Text13 $color={colors.dark}>{statusHistory(item.status)}</Text13>
        </VStackStart>
      </ScrollView>
    </Container>
  );
};
export default HistoryDetailScreen;
