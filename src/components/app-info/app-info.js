import "./app-info.css";

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Task manager</h1>
            <h2>Total number of tasks: {employees}</h2>
            <h2>Urgent tasks: {increased}</h2>
        </div>
    )
}

export default AppInfo;