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

  function handleCardText(evt) {
    setCardText(evt.target.value);
    /// current input value
  }

  function handleAddCardSubmit(evt) {
    /// Sending data to the card creation function on submit
    evt.preventDefault();
    if (cardText.length === 0) {
      alert('Pls text smth');
      return;
    }

    handleAddCard({
      taskText: cardText,
      _id: nextId(),
      created: `created ${formatDistanceToNow(new Date())} ago`,
      /// formatDistanceToNow when created
      isDone: false,
    });
    setCardText('');
  }

  return (
    <form onSubmit={handleAddCardSubmit}>
      <input
        placeholder="What needs to be done?"
        className="new-todo"
        onChange={handleCardText}
        value={cardText}
      />
    </form>
  );
}
