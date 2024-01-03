import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import './TasksAddForm.css';

interface TasksAddFormProps {
  onAdd: (name: string) => void;
}

function TasksAddForm({ onAdd }: TasksAddFormProps) {
  const [name, setName] = useState<string>('');

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (name.length < 3) return;
    onAdd(name);
    setName('');
  };

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
