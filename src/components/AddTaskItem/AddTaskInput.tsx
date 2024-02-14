import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './AddTaskInput.styles';

interface AddTaskInputProps {
  onAddTask: (task: string) => void;
  onHideInput: () => void; 
}

const AddTaskInput: React.FC<AddTaskInputProps> = ({ onAddTask, onHideInput }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  //adding new task, removing error if displayed, hiding input
  const handleAddTask = () => {
    if (task.length > 0) {
      onAddTask(task);
      setTask('');
      setError('');
      onHideInput();
    } else {
      setError('Empty text input');
    }
  };

  return (
    <View style={styles.inputRow}>
      <View>
        <TextInput
          value={task}
          style={error ? styles.errorInput : styles.input}
          placeholder={'Add a new task'}
          onChangeText={(text) => {
            setTask(text);
            setError('');
          }}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addButtonContainer}>
          <FontAwesomeIcon icon={faCheck} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskInput;
