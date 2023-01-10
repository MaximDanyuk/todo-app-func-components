import TaskList from './TaskList';
import PropTypes from 'prop-types';

export default function Main({
  tasksData,
  handleTaskDelete,
  handleTaskDone,
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
        tasksData={tasksData}
        handleTaskDelete={handleTaskDelete}
        handleTaskDone={handleTaskDone}
      />
    </main>
  );
}
