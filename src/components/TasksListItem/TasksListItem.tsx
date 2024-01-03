import React, { MouseEventHandler } from 'react';
import './TasksListItem.css';

interface TasksListItemProps {
  name: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onToggleProp: MouseEventHandler<HTMLSpanElement>;
  important: boolean;
  urgent: boolean;
}

function TasksListItem({
  name, onDelete, onToggleProp, important, urgent,
}: TasksListItemProps) {
  let classNames = 'list-group-item d-flex justify-content-between';

  if (urgent) {
    classNames += ' increase';
  }
  if (important) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="urgent"
      >
        {name}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleProp}
          data-toggle="important"
        >
          <i className="fas fa-cookie" />
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={onDelete}
        >
          <i className="fas fa-trash" />
        </button>
        <i className="fas fa-star" />
      </div>
    </li>
  );
}

export default TasksListItem;
