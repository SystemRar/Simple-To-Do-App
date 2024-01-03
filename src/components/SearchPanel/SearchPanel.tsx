import React, { ChangeEventHandler, useState } from 'react';
import './SearchPanel.css';

interface SearchPanelProps {
  onUpdateSearch: (term: string) => void;
}

function SearchPanel({ onUpdateSearch }: SearchPanelProps) {
  const [term, setTerm] = useState<string>('');

  const handleUpdateSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newTerm = e.target.value;
    setTerm(newTerm);
    onUpdateSearch(newTerm);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find a task"
      value={term}
      onChange={handleUpdateSearch}
    />
  );
}

export default SearchPanel;
