import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Answer = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>Question: {item.question}</Text>
      <Text style={styles.answerText}>Answer: {item.answer}</Text>
      <Button title="Back to Questions" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F7F9', // Soft blueish-gray background
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2E3B4E', // Dark blue text color
  },
  answerText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#555', // Dark gray text color
  },
});


export default Answer;