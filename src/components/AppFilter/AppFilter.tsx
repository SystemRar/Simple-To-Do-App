import React from 'react';
import './AppFilter.css';

interface AppFilterProps {
  filter: string;
  onFilterSelect: (filter: string) => void;
}

function AppFilter({ filter, onFilterSelect }: AppFilterProps) {
  const buttonsData = [
    { name: 'all', label: 'All tasks' },
    { name: 'important', label: 'Important' },
    { name: 'urgent', label: 'Urgent' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';
    return (
      <button
        type="button"
        className={`btn ${clazz}`}
        key={name}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
}

export default AppFilter;
