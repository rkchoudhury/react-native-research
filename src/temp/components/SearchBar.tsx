import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface IProps {
  onChangeValue?: (value: string) => void;
}

export const SearchBar = ({ onChangeValue }: IProps) => {
  const [textInput, setTextInput] = useState('');

  return (
    <TextInput
      value={textInput}
      onChangeText={value => {
        setTextInput(value);
        onChangeValue?.(value);
      }}
      multiline={false}
      placeholder={'Search some intreasting movie here...'}
      placeholderTextColor={'grey'}
      style={styles.textInputContainer}
    />
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    borderRadius: 5,
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 10,
  },
});
