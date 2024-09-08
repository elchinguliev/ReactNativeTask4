import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const App = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    console.log({
      taskTitle,
      category,
      date,
      time,
      notes,
    });
    Alert.alert('Task Saved', `Task: ${taskTitle}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Task</Text>

      <Text style={styles.label}>Task Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Task Title"
        value={taskTitle}
        onChangeText={setTaskTitle}
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setCategory('Work')}>
          <Text style={styles.categoryText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setCategory('Personal')}>
          <Text style={styles.categoryText}>Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton} onPress={() => setCategory('Goal')}>
          <Text style={styles.categoryText}>Goal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View style={styles.column}>
          <Text style={styles.label}>Time</Text>
          <TextInput
            style={styles.input}
            placeholder="Time"
            value={time}
            onChangeText={setTime}
          />
        </View>
      </View>

      <Text style={styles.label}>Notes</Text>
      <TextInput
        style={styles.notesInput}
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
        multiline
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F4F8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  categoryButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 10,
  },
  categoryText: {
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    marginRight: 10,
  },
  notesInput: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: '#6A1B9A',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
