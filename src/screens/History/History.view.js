import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  Container,
  Gap,
  HStack,
  HStackBetween,
  HStackEnd,
  HStackStart,
} from '../../components/Layout';
import {Text13, Text14Bold, TextBold} from '../../components/Text';
import {colors} from '../../styled';
import useHistory from './History.hook';
import {HistoryList, HistoryStatus} from './History.style';

const HistoryScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataHistory, statusHistory, goHistoryDetail} = useHistory();

  return (
    <Container>
      {dataHistory.map(item => (
        <HistoryList
          style={{marginTop: dataHistory.length === 0 ? 0 : 15}}
          key={item.id}
          onPress={() => goHistoryDetail(item)}>
          <HStackStart>
            <Image style={{opacity: 0.7}} source={item.image} />
            <Gap $width={10} />
            <View>
              <Text13 $color={colors.gray3}>{item.time}</Text13>
              <Gap $height={5} />
              <Text14Bold $color={colors.dark}>{item.content}</Text14Bold>
              <Gap $height={5} />
              <Text13 $color={colors.gray3}>Tới: {item.to}</Text13>
            </View>
          </HStackStart>
          <HStackEnd>
            <HistoryStatus
              $bgColor={item.status === 1 ? colors.green1 : colors.red1}>
              <Text13 $color={colors.gray3}>
                {statusHistory(item.status)}
              </Text13>
            </HistoryStatus>
          </HStackEnd>
        </HistoryList>
      ))}
    </Container>
  );
};
export default HistoryScreen;
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
