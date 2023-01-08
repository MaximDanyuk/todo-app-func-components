import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';

export default function App() {
  const [tasksData, setTasksData] = useState([]);
  const [filtered, setFiltered] = useState(tasksData);
  function handleTaskDelete({ _id }) {
    setTasksData(tasksData.filter((el) => el._id !== _id));
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
        elem.isDone = !elem.isDone;
      }
      return elem;
    });
    setTasksData(newToDo);

    /// Find the passed element and change its isDane to the opposite
    /// And add it in state
  }

  function toDoFilter(status) {
    if (status === 'all') {
      setFiltered(tasksData);
    } else {
      const newTasksData = [...tasksData].filter(
        (el) => !!el.isDone === status,
      );
      setFiltered(newTasksData);
    }
    /// If the status is all, then add everything to the filtered
    /// Or we add to the filtered ones depending on the status
  }

  useEffect(() => {
    setFiltered(tasksData);
    /// When changing the state (adding new ones)
    /// filter again
  }, [tasksData]);

  function clearCompletedToDo() {
    const newTasksData = [...tasksData].filter(
      (el) => el.isDone !== true,
    );
    /// Filter state from Completed
    setTasksData(newTasksData);
  }

  return (
    <div className="page">
      <Header handleAddCard={(data) => handleAddCard(data)} />
      <Main
        tasksData={filtered}
        handleTaskDelete={({ _id }) => handleTaskDelete({ _id })}
        handleTaskDone={({ _id }) => handleTaskDone({ _id })}
      />
      <Footer
        toDoFilter={(status) => toDoFilter(status)}
        clearCompletedToDo={() => clearCompletedToDo()}
      />
    </div>
  );
}
