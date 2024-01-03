import React, { MouseEventHandler } from 'react';
import TasksListItem from '../TasksListItem/TasksListItem';
import './TasksList.css';

interface Task {
  id: number;
  name: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onToggleProp: MouseEventHandler<HTMLSpanElement>;
  important: boolean;
  urgent: boolean;
}

interface TasksListProps {
  data: Task[];
  onDelete: (id: number) => void;
  onToggleProp: (id: number, prop: string) => void;
}

function TasksList({ data, onDelete, onToggleProp }: TasksListProps) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(event) => {
          onToggleProp(id, event.currentTarget.getAttribute('data-toggle') || '');
        }}
      />
    );
  });

  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  );
}

export default TasksList;
