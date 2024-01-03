import React, { MouseEventHandler, useState } from 'react';
import AppInfo from './components/AppInfo/AppInfo';
import SearchPanel from './components/SearchPanel/SearchPanel';
import AppFilter from './components/AppFilter/AppFilter';
import TasksList from './components/TasksList/TasksList';
import TasksAddForm from './components/TasksAddForm/TasksAddForm';
import './App.css';

type ToDoItem = {
  name: string;
  important: boolean;
  urgent: boolean;
  id: number;
  [key: string]: any;
};

interface Task {
  id: number;
  name: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onToggleProp: MouseEventHandler<HTMLSpanElement>;
  important: boolean;
  urgent: boolean;
}

type FilterType = 'all' | 'important' | 'urgent';

function App() {
  const [toDoArray, setToDoArray] = useState<ToDoItem[]>([]);
  const [term, setTerm] = useState<string>('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [maxId, setMaxId] = useState<number>(4);

  const deleteItem = (id: number): void => {
    setToDoArray((prevData) => prevData.filter((item) => item.id !== id));
  };

  const addItem = (name: string): void => {
    const newItem: ToDoItem = {
      name,
      important: false,
      urgent: false,
      id: maxId,
    };
    setMaxId((prevMaxId) => prevMaxId + 1);
    setToDoArray((prevData) => [...prevData, newItem]);
  };

  const onToggleProp = (id: number, prop: string): void => {
    setToDoArray((prevData) => prevData.map((item) => {
      if (item.id === id) {
        return { ...item, [prop]: !item[prop] };
      }
      return item;
    }));
  };

  const searchToDo = (items: ToDoItem[], term: string): ToDoItem[] => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  const onUpdateSearch = (term: string): void => {
    setTerm(term);
  };

  const filterPost = (items: ToDoItem[], filter: FilterType): ToDoItem[] => {
    switch (filter) {
      case 'important':
        return items.filter((item) => item.important);
      case 'urgent':
        return items.filter((item) => item.urgent);
      default:
        return items;
    }
  };

  const onFilterSelect = (filter: string): void => {
    setFilter(filter as FilterType);
  };

  const tasks = toDoArray.length;
  const urgent = toDoArray.filter((item) => item.urgent).length;
  const visibleData = filterPost(searchToDo(toDoArray, term), filter) as Task[];

  return (
    <div className="app">
      <AppInfo employees={tasks} increased={urgent} />

      <div className="search-panel">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>

      <TasksList data={visibleData} onDelete={deleteItem} onToggleProp={onToggleProp} />
      <TasksAddForm onAdd={addItem} />
    </div>
  );
}

export default App;
