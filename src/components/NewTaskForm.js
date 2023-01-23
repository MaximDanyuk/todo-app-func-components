import { useState } from 'react';
import nextId from 'react-id-generator';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import PropTypes from 'prop-types';

export default function NewTaskForm({ handleAddCard }) {
  NewTaskForm.defaultProps = {
    handleAddCard: {},
  };

  NewTaskForm.propTypes = {
    handleAddCard: PropTypes.func,
  };

  const [cardText, setCardText] = useState('');
  const [timeSec, setTimeSec] = useState('');
  const [timeMin, setTimeMin] = useState('');

  function handleCardText(evt) {
    setCardText(evt.target.value);
    /// current input value
  }

  function handleCardSec(evt) {
    setTimeSec(+evt.target.value);
  }

  function handleCardMin(evt) {
    setTimeMin(+evt.target.value);
  }

  function handleAddCardSubmit(evt) {
    /// Sending data to the card creation function on submit
    evt.preventDefault();
    if (!cardText.trim().length || +timeSec === 0 || +timeMin === 0) {
      return;
    }
    handleAddCard({
      taskText: cardText,
      _id: nextId(),
      created: `${formatDistanceToNow(new Date())}`,
      /// formatDistanceToNow when created
      status: true,
      totalTime: timeMin * 60 + timeSec,
    });
    setCardText('');
    setTimeSec('');
    setTimeMin('');
  }

  return (
    <form onSubmit={handleAddCardSubmit} className="new-todo-form">
      <input type="submit" hidden />
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        onChange={handleCardText}
        value={cardText}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Min"
        onChange={handleCardMin}
        value={timeMin}
        type="number"
        max={60}
        min={0}
      />
      <input
        className="new-todo-form__timer"
        placeholder="Sec"
        onChange={handleCardSec}
        value={timeSec}
        max={60}
        min={0}
        type="number"
      />
    </form>
  );
}
