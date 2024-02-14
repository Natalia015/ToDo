import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  UIManager,
  LayoutAnimation,
  FlatList,
} from 'react-native';
import {ConnectedProps, connect} from 'react-redux';
import {
  addTask,
  deleteTask,
  editTask,
  toggleCheckboxTask,
} from '../../redux/taskReducers/taskReducers';
import TaskItem from '../../components/TaskItem/TaskItem';
import styles from './IntroScreen.styles';
import {RootState} from '../../redux/reducers/reducers';
import AddTaskInput from '../../components/AddTaskItem/AddTaskInput';
import {calculateSortedTasks} from '../../utils';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faXmark} from '@fortawesome/free-solid-svg-icons';
import en from '../../assets/constants/en';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const mapStateToProps = (state: RootState) => ({
  taskItems: state.tasks.taskItems,
});

const mapDispatchToProps = {
  addTask,
  deleteTask,
  editTask,
  toggleCheckboxTask,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const IntroScreen: React.FC<PropsFromRedux> = ({
  taskItems,
  addTask,
  toggleCheckboxTask,
}) => {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [sortOption, setSortOption] = useState<'default' | 'checkedFirst'>(
    'default',
  );

  //set visibility of the input for adding new task
  const handleInputVisibility = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleSortOptionChange = (option: 'default' | 'checkedFirst') => {
    setSortOption(option);
  };

  // Get the sorted tasks
  const sortedTasks = calculateSortedTasks(sortOption, taskItems);

  const handleCheckboxToggle = (index: number) => {
    // The sortedTasks array is used to get the correct index for toggling
    const originalIndex = taskItems.findIndex(
      task => task === sortedTasks[index],
    );
    toggleCheckboxTask({index: originalIndex});
  };

  const handleDeleteTask = (index: number) => {
    // Animation for deletion of a task
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    deleteTask(index);
  };

  //tasks
  const renderItem = ({
    item,
    index,
  }: {
    item: {text: string; isChecked: boolean};
    index: number;
  }) => (
    <TaskItem
      key={index}
      text={item.text}
      index={index}
      isChecked={item.isChecked}
      toggleCheckbox={handleCheckboxToggle}
      onDelete={() => handleDeleteTask(index)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{en.title}</Text>
      </View>

      <View style={styles.sortOptionContainer}>
        <Text style={styles.sortOptionLabel}>Sort by:</Text>
        <TouchableOpacity onPress={() => handleSortOptionChange('default')}>
          <Text
            style={[
              styles.sortOption,
              sortOption === 'default' && styles.activeSortOption,
            ]}>
            {en.sorting_default}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSortOptionChange('checkedFirst')}>
          <Text
            style={[
              styles.sortOption,
              sortOption === 'checkedFirst' && styles.activeSortOption,
            ]}>
            {en.sorting_completed}
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={sortedTasks}
        renderItem={renderItem}
        keyExtractor={index => index.toString()}
        style={styles.itemContainer}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskContainer}>
        {isInputVisible ? (
          <AddTaskInput
            onAddTask={addTask}
            onHideInput={handleInputVisibility}
          />
        ) : null}
        <TouchableOpacity onPress={() => handleInputVisibility()}>
          <View style={styles.addButtonContainer}>
            <FontAwesomeIcon
              icon={isInputVisible ? faXmark : faPlus}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default connector(IntroScreen);
