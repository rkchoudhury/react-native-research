import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface IProps {
  label: string;
  route: string;
}

export const NavButton = ({ label, route }: IProps) => {
  const navigation = useNavigation<any>();
  return (
    <Text style={styles.label} onPress={() => navigation.navigate(route)}>
      {label}
    </Text>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    padding: 15,
  },
});
