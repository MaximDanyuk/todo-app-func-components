import PropTypes from 'prop-types';

export default function TasksFilter({
  toDoFilter,
  clearCompletedToDo,
}) {
  TasksFilter.defaultProps = {
    toDoFilter: {},
    clearCompletedToDo: {},
  };

  TasksFilter.propTypes = {
    toDoFilter: PropTypes.func,
    clearCompletedToDo: PropTypes.func,
  };
  /// Call the necessary functions on the necessary buttons
  return (
    <div>
      <ul className="filters">
        <li>
          <button type="button" onClick={() => toDoFilter('all')}>
            All
          </button>
        </li>
        <li>
          <button type="button" onClick={() => toDoFilter(false)}>
            Active
          </button>
        </li>
        <li>
          <button type="button" onClick={() => toDoFilter(true)}>
            Completed
          </button>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => clearCompletedToDo()}
        className="clear-completed"
      >
        Clear completed
      </button>
    </div>
  );
}
