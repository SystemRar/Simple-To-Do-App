import './tasks-list-item.css';

const TasksListItem = (props) => {
    const {name, onDelete, onToggleProp, important, urgent} = props;

    let classNames = "list-group-item d-flex justify-content-between";

    if (urgent) {
        classNames += ' increase';
    }
    if (important) {
        classNames += ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle='urgent'>{name}</span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle='important'>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default TasksListItem;