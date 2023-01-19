/* eslint-disable */
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function App() {
  const [tasksData, setTasksData] = useState(
    JSON.parse(localStorage.getItem('tasksData')) || [],
  );
  const [isSelected, setIsSelected] = useState('all');
  const [filtered, setFiltered] = useState([]);

  /* useEffect(() => {
    setTasksData(JSON.parse(localStorage.getItem('tasksData')));
    toDoFilter('all');
  }, []); */

  useEffect(() => {
    localStorage.setItem('tasksData', JSON.stringify(tasksData));
    setFiltered(tasksData);
  }, [tasksData]);

  function handleTaskDelete({ _id }) {
    const newTastData = tasksData.filter((el) => el._id !== _id);
    setTasksData(newTastData);
    /// Filter all tasks from remote
    /// add new data in state
  }

  function handleAddCard(data) {
    setTasksData([data, ...tasksData]);
    /// Add the card(data) to the array
  }

  function handleTaskDone({ _id }) {
    const newToDo = tasksData.filter((elem) => {
      if (elem._id === _id) {
        if (elem.status) {
          elem.status = false;
        } else {
          elem.status = true;
        }
      }
      return elem;
    });

    setTasksData(newToDo);
  }

  function clearCompletedToDo() {
    const newTasksData = tasksData.filter((el) => el.status);
    /// Filter state from Completed
    setTasksData(newTasksData);
  }

  function toDoFilter(status) {
    setIsSelected(status);
    if (
      typeof status === 'string' &&
      status.toLowerCase() === 'all'
    ) {
      setFiltered(tasksData);
    } else if (!status) {
      setFiltered(tasksData.filter((elem) => !elem.status));
    } else {
      setFiltered(tasksData.filter((elem) => elem.status));
    }
  }

  return (
    <div className="todoapp">
      <Header handleAddCard={(data) => handleAddCard(data)} />
      <Main
        tasksData={filtered}
        handleTaskDelete={({ _id }) => handleTaskDelete({ _id })}
        handleTaskDone={({ _id }) => handleTaskDone({ _id })}
      />
      <Footer
        toDoFilter={(status) => toDoFilter(status)}
        clearCompletedToDo={() => clearCompletedToDo()}
        tasksData={filtered}
        isSelected={isSelected}
      />
    </div>
  );
}
