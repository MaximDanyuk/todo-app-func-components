/* eslint-disable */
import PropTypes from 'prop-types';
import { useState } from 'react';
import Timer from './Timer';

export default function Task({
  taskText,
  created,
  handleTaskDelete,
  _id,
  handleTaskDone,
  status,
  totalTime,
  handleTaskEdit,
  saveTimerTime,
}) {
  const [totalValue, setTotalValue] = useState(taskText);
  const [change, setChange] = useState(null);

  function handleEditCardSubmit(evt) {
    evt.preventDefault();

    handleTaskEdit(_id, totalValue);
    setChange(null);
  }

  function handleOpenEdit(_id) {
    setChange(_id);
  }

  function handleNewValue(evt) {
    setTotalValue(evt.target.value);
  }

  return (
    <li className={!status ? 'completed' : ''}>
      <div className="view">
        {change === _id ? (
          <form onSubmit={handleEditCardSubmit}>
            <input
              onChange={(evt) => handleNewValue(evt)}
              value={totalValue}
            />
            <input type="submit" value="Сохранить" />
          </form>
        ) : (
          <>
            <input
              className="toggle"
              type="checkbox"
              defaultChecked={!status}
              onClick={() => handleTaskDone({ _id, totalTime })}
            />
            <label>
              <span className="description">{totalValue}</span>
              <Timer
                totalTime={totalTime}
                _id={_id}
                status={status}
                saveTimerTime={saveTimerTime}
              />
              <span className="created">created {created} ago</span>
            </label>
            <button
              aria-label="edit toDo"
              type="button"
              className="icon icon-edit"
              onClick={() => handleOpenEdit(_id)}
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

Task.defaultProps = {
  taskText: '',
  created: '',
  handleTaskDelete: {},
  _id: '',
  handleTaskDone: {},
};

Task.propTypes = {
  taskText: PropTypes.string,
  created: PropTypes.string,
  handleTaskDelete: PropTypes.func,
  _id: PropTypes.string,
  handleTaskDone: PropTypes.func,
};
