import React, { useState } from 'react';
import './tasks-add-form.css';

function TasksAddForm({ onAdd }) {
    const [name, setName] = useState('');

    const onValueChange = (e) => {
        const value = e.target.value;
        setName(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3) return;
        onAdd(name);
        setName('');
    }

    return (
        <div className="app-add-form">
            <h3>Add a new task</h3>
            <form className="add-form d-flex" onSubmit={onSubmit}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder="Describe the task"
                    value={name}
                    onChange={onValueChange}
                />

                <button type="submit" className="btn btn-outline-light">
                    Add
                </button>
            </form>
        </div>
    );
}

export default TasksAddForm;