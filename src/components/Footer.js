import TasksFilter from './TasksFilter';
import PropTypes from 'prop-types';

export default function Footer({
  toDoFilter,
  clearCompletedToDo,
  tasksData,
  isSelected,
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
        {tasksData.filter((el) => el.status).length} items left
      </span>
      <TasksFilter
        toDoFilter={toDoFilter}
        clearCompletedToDo={clearCompletedToDo}
        isSelected={isSelected}
      />
    </footer>
  );
}
