import React, { useState } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import TasksList from '../tasks-list/tasks-list';
import TasksAddForm from '../tasks-add-form/tasks-add-form';
import './app.css';

const App = () => {
    const [data, setData] = useState([]);
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');
    const [maxId, setMaxId] = useState(4);

    const deleteItem = (id) => {
        setData(prevData => prevData.filter(item => item.id !== id));
    }

    const addItem = (name) => {
        const newItem = {
            name,
            important: false,
            urgent: false,
            id: maxId
        }
        setMaxId(prevMaxId => prevMaxId + 1);
        setData(prevData => [...prevData, newItem]);
    }

    const onToggleProp = (id, prop) => {
        setData(prevData => prevData.map(item => {
            if (item.id === id) {
                return { ...item, [prop]: !item[prop] };
            }
            return item;
        }));
    }

    const searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => item.name.indexOf(term) > -1);
    }

    const onUpdateSearch = (term) => {
        setTerm(term);
    }

    const filterPost = (items, filter) => {
        switch (filter) {
            case 'important':
                return items.filter(item => item.important);
            case 'urgent':
                return items.filter(item => item.urgent);
            default:
                return items;
        }
    }

    const onFilterSelect = (filter) => {
        setFilter(filter);
    }

    const tasks = data.length;
    const urgent = data.filter(item => item.urgent).length;
    const visibleData = filterPost(searchEmp(data, term), filter);

    return (
        <div className="app">
            <AppInfo employees={tasks} increased={urgent} />

            <div className="search-panel">
                <SearchPanel onUpdateSearch={onUpdateSearch} />
                <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
            </div>

            <TasksList
                data={visibleData}
                onDelete={deleteItem}
                onToggleProp={onToggleProp} />
            <TasksAddForm onAdd={addItem} />
        </div>
    );
}

export default App;