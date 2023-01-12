import PropTypes from 'prop-types';

export default function TasksFilter({
  toDoFilter,
  clearCompletedToDo,
  isSelected,
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
    <>
      <ul className="filters">
        <li>
          <button
            type="button"
            className={isSelected === 'all' ? 'selected' : null}
            onClick={() => toDoFilter('all')}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={isSelected ? null : 'selected'}
            type="button"
            onClick={() => toDoFilter(false)}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={
              isSelected && isSelected !== 'all' ? 'selected' : null
            }
            type="button"
            onClick={() => toDoFilter(true)}
          >
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
    </>
  );
}
