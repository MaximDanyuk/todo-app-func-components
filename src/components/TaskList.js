/* eslint-disable react/jsx-props-no-spreading */
import Task from './Task';
import PropTypes from 'prop-types';

export default function TaskList({
  tasksData,
  handleTaskDelete,
  handleTaskDone,
}) {
  TaskList.defaultProps = {
    tasksData: [],
    handleTaskDelete: {},
    handleTaskDone: {},
  };

  TaskList.propTypes = {
    tasksData: PropTypes.arrayOf(PropTypes.shape),
    handleTaskDelete: PropTypes.func,
    handleTaskDone: PropTypes.func,
  };
  /// draw the toDos array in the list container
  return (
    <ul className="todo-list">
      {tasksData.map((task) => (
        <Task
          key={task._id}
          {...task}
          handleTaskDelete={handleTaskDelete}
          handleTaskDone={handleTaskDone}
        />
      ))}
    </ul>
  );
}
