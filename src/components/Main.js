import TaskList from './TaskList';
import PropTypes from 'prop-types';

export default function Main({
  tasksData,
  handleTaskDelete,
  handleTaskDone,
  handleStop,
  handleStart,
  isSelected,
  handleTaskEdit,
  saveTimerTime,
}) {
  Main.defaultProps = {
    tasksData: [],
    handleTaskDone: {},
    handleTaskDelete: {},
  };

  Main.propTypes = {
    tasksData: PropTypes.arrayOf(PropTypes.shape),
    handleTaskDone: PropTypes.func,
    handleTaskDelete: PropTypes.func,
  };
  return (
    <main className="main">
      <TaskList
        isSelected={isSelected}
        tasksData={tasksData}
        handleTaskDelete={handleTaskDelete}
        handleTaskDone={handleTaskDone}
        handleStop={handleStop}
        handleStart={handleStart}
        handleTaskEdit={handleTaskEdit}
        saveTimerTime={saveTimerTime}
      />
    </main>
  );
}
