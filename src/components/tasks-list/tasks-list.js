import TasksListItem from "../tasks-list-item/tasks-list-item";
import './tasks-list.css';

const TasksList = ({data, onDelete, onToggleProp}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item

        return (
            <TasksListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => {onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}}/>
        )
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TasksList;