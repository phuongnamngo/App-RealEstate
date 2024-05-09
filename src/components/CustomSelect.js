import { SelectAddress } from '@/Screens/ManageAccount/ChangeAddressAccount/ChangeAddressAccount.view';
import { ChangeInputProfile } from '@/screens/Profile/ChangeProfile/ChangeProflie.style';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import { Text16 } from './Text';
import { colors, fonts, fontsizes } from '@/styled';
import { Gap, HStackStart } from './Layout';
import styled from 'styled-components';

const CustomSelect = ({
  options,
  onSelect,
  selectedValue,
  title,
  placeholder
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const idx = options.findIndex(i => i.label === selectedValue);
  const handleSelect = value => {
    onSelect(value);
    setModalVisible(false);
  };
  const onClose = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>

      <ChangeInputProfile>
        <Text16 $color={colors.gray}>{title}</Text16>
        <Gap $height={10} />
        <Pressable onPress={() => setModalVisible(true)}>
          <InputContainer>
            <Text style={[styles.textInput, { color: selectedValue ? colors.dark : colors.gray }]}>{selectedValue ? selectedValue : placeholder}</Text>
          </InputContainer>
        </Pressable>
      </ChangeInputProfile>

      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <Pressable onPress={() => onClose()} style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {options.map(option => (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => handleSelect(option.value)}
                  style={styles.option}>
                  <Text style={styles.textLabel}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectButton: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
    width: '100%',
  },
  selectButtonText: {
    color: 'black',
  },
  placeholderText: {
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    elevation: 5,
    width: '80%',
    height: '50%',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  textLabel: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  textInput: {
    paddingHorizontal: 15,
    paddingVertical: 11,
    fontFamily: fonts.primaryMedium,
    fontSize: fontsizes.big,
    color: colors.dark,
    width: '100%'
  },
});
const InputContainer = styled(HStackStart)`
  border-radius: 24px;
  border: 1px solid ${colors.gray1};
  width: 100%;
`;
export default CustomSelect;
