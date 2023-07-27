import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All tasks'},
        {name: 'important', label: 'Important'},
        {name: 'urgent', label: 'Urgent'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;