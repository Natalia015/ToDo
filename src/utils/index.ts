//sorting task items based on when added or by the completion
export const calculateSortedTasks = (
    sortOption: 'default' | 'checkedFirst',
    taskItems: { text: string; isChecked: boolean }[]
  ) => {
    // Sorted by completion (checkboxes checked)
    if (sortOption === 'checkedFirst') {
      const checkedTasks = taskItems.filter((item) => item && item.isChecked);
      const uncheckedTasks = taskItems.filter((item) => item && !item.isChecked);
      return [...checkedTasks, ...uncheckedTasks];
    }
    // Default sorting
    return taskItems.filter((item) => item !== null);
  };
  