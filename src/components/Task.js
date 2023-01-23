/* eslint-disable */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Task({
  taskText,
  created,
  handleTaskDelete,
  _id,
  handleTaskDone,
  status,
  totalTime,
  isCounting,
  handleStop,
  handleStart,
}) {
  const [newValue, setNewValue] = useState('');
  const [totalValue, setTotalValue] = useState(taskText);
  const [change, setChange] = useState(null);
  const [fullTime, setFullTime] = useState(totalTime);

  const timerMin = Math.floor(+fullTime / 60);
  const timerSec = Math.floor(+fullTime % 60);

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (isCounting) {
        setFullTime((fullTime) => (fullTime >= 1 ? fullTime - 1 : 0));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isCounting, fullTime]);

  /// First of all, the user sees the totalValue, which takes the value passed from the form
  /// When editing, the user sees newValue, which becomes equal to totalValue
  /// When editing or simply closing, the user sees the totalValue
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

  return (
    <li className={!status ? 'completed' : ''}>
      <div className="view">
        {change === _id ? (
          <form onSubmit={handleAddCardSubmit}>
            <input onChange={handleCardText} value={newValue} />
            <input type="submit" value="Сохранить" />
          </form>
        ) : (
          <>
            <input
              className="toggle"
              type="checkbox"
              defaultChecked={!status}
              onClick={() => handleTaskDone({ _id })}
            />
            <label>
              <span className="description">{totalValue}</span>
              <span className="timer__buttons">
                <button
                  aria-label="button play"
                  className="icon icon-play"
                  type="button"
                  onClick={handleStart}
                />
                <button
                  aria-label="button pause"
                  className="icon icon-pause"
                  type="button"
                  onClick={() => handleStop(_id, fullTime)}
                />
              </span>
              <span className="timer__text">
                {timerMin > 10 ? timerMin : '0' + timerMin}:
                {timerSec > 10 ? timerSec : '0' + timerSec}
              </span>
              <span className="created">created {created} ago</span>
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
