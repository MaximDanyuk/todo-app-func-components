import TasksFilter from './TasksFilter';
import PropTypes from 'prop-types';

export default function Footer({
  toDoFilter,
  clearCompletedToDo,
  tasksData,
}) {
  Footer.defaultProps = {
    toDoFilter: {},
    clearCompletedToDo: {},
  };

  Footer.propTypes = {
    toDoFilter: PropTypes.func,
    clearCompletedToDo: PropTypes.func,
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        {tasksData.length} items left
      </span>
      <TasksFilter
        toDoFilter={toDoFilter}
        clearCompletedToDo={clearCompletedToDo}
      />
    </footer>
  );
}
