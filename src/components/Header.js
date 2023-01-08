import NewTaskForm from './NewTaskForm';
import PropTypes from 'prop-types';

export default function Header({ handleAddCard }) {
  Header.defaultProps = {
    handleAddCard: {},
  };

  Header.propTypes = {
    handleAddCard: PropTypes.func,
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm handleAddCard={handleAddCard} />
    </header>
  );
}
