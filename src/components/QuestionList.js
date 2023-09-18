import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import dummyData from './dummyData';

const QuestionList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {dummyData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.questionContainer}
          onPress={() => navigation.navigate('Answer', { item })}
        >
          <Text style={styles.questionText}>{item.question}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F7F9', // Soft blueish-gray background
  },
  questionContainer: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: '#E0EBF5', // Light blue color for the question containers
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  questionText: {
    fontSize: 16,
    color: '#2E3B4E', // Dark blue text color for the questions
  },
});




export default QuestionList;
