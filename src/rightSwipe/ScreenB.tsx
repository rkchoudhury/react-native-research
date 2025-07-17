import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const ScreenB = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Screen B</Text>
      <FlatList
        data={Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`)}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontWeight: 'bold', color: '#333' }}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
