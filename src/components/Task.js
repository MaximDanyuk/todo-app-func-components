/* eslint-disable no-shadow */
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Task({
  taskText,
  created,
  handleTaskDelete,
  _id,
  handleTaskDone,
  isDone,
}) {
  const [newValue, setNewValue] = useState('');
  const [totalValue, setTotalValue] = useState(taskText);
  const [change, setChange] = useState(null);

  function handleTaskEdit(_id, title) {
    setNewValue(title);
    setChange(_id);
  }

  function handleCardText(evt) {
    setNewValue(evt.target.value);
  }

  function handleAddCardSubmit(evt) {
    evt.preventDefault();

    setTotalValue(newValue);
    setChange(null);
  }
  /// First of all, the user sees the totalValue, which takes the value passed from the form
  /// When editing, the user sees newValue, which becomes equal to totalValue
  /// When editing or simply closing, the user sees the totalValue
  Task.defaultProps = {
    taskText: '',
    created: '',
    handleTaskDelete: {},
    _id: '',
    handleTaskDone: {},
    isDone: false,
  };

  Task.propTypes = {
    taskText: PropTypes.string,
    created: PropTypes.string,
    handleTaskDelete: PropTypes.func,
    _id: PropTypes.string,
    handleTaskDone: PropTypes.func,
    isDone: PropTypes.bool,
  };

  const className = isDone ? 'completed' : '';
  return (
    <li className={className}>
      <div className="view">
        {change === _id ? (
          <form onSubmit={handleAddCardSubmit}>
            <input onChange={handleCardText} value={newValue} />
            <button type="submit">Сохранить</button>
          </form>
        ) : (
          <>
            <input
              className="toggle"
              type="checkbox"
              onClick={() => handleTaskDone({ _id })}
            />
            <label>
              <span className="description">{totalValue}</span>
              <span className="created">{created}</span>
            </label>
            <button
              aria-label="edit toDo"
              type="button"
              className="icon icon-edit"
              onClick={() => handleTaskEdit(_id, totalValue)}
            />
            <button
              type="button"
              aria-label="delete toDo"
              className="icon icon-destroy"
              onClick={() => handleTaskDelete({ _id })}
            />
          </>
        )}
      </div>
    </li>
  );
}
