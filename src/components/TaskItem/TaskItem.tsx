import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  UIManager,
  Animated,
  ViewStyle
} from 'react-native';
import {useDispatch} from 'react-redux';
import {editTask, deleteTask} from '../../redux/taskReducers/taskReducers';
import styles from './TaskItem.styles';

import {
  faTrash,
  faCircleCheck,
  faPen,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

interface TaskItemProps {
  text: string;
  index: number;
  isChecked: boolean;
  toggleCheckbox: (oldIndex: number, newIndex: number) => void;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  text,
  index,
  isChecked,
  toggleCheckbox,
  onDelete,
}) => {
  const [isEditing, setEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const dispatch = useDispatch(); 
  

  // Animation values
  const opacity = new Animated.Value(1);
  const translateX = new Animated.Value(0);
  const scale = new Animated.Value(1);

  const handleDeleteTask = () => {
    // Notify parent component to delete the task
    onDelete();

    // Animate the deletion with multiple transformations and fading
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0, // Fade out
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: -100, // Translate off the screen to the left
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.8, // Scale down slightly
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Dispatch the delete action after the animation completes
      dispatch(deleteTask(index));
      setEditing(false);
    });
  };

  const animatedStyles: Animated.WithAnimatedObject<ViewStyle> = {
    opacity,
    transform: [{translateX}, {scale}],
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({index, newText: editedText}));
    }
    setEditing(!isEditing);
  };

  const handleCheckboxToggle = () => {
    toggleCheckbox(index, -1);
  };

  return (
    <Animated.View
      style={[styles.item, animatedStyles]}>
      <View style={styles.itemLeft}>
        <TouchableOpacity
          style={styles.checkBox}
          onPress={handleCheckboxToggle}>
          <FontAwesomeIcon icon={isChecked ? faCircleCheck : faCircle} />
        </TouchableOpacity>
        {isEditing ? (
          <TextInput
            style={styles.editedText}
            value={editedText}
            onChangeText={text => setEditedText(text)}
            onBlur={handleEdit}
            autoFocus
          />
        ) : (
          <Text style={styles.itemText}>{text}</Text>
        )}
      </View>
      <View style={styles.options}>
        <TouchableOpacity onPress={handleEdit}>
          <FontAwesomeIcon icon={isEditing ? faCheck : faPen} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.trash}
          onPress={handleDeleteTask}>
          <FontAwesomeIcon icon={faTrash} />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default TaskItem;