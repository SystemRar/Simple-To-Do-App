import React, { useState } from 'react';
import './search-panel.css';

const  SearchPanel = ({ onUpdateSearch }) => {
    const [term, setTerm] = useState('');

    const handleUpdateSearch = (e) => {
        const newTerm = e.target.value;
        setTerm(newTerm);
        onUpdateSearch(newTerm);
    }

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