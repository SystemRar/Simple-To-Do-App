import {Component} from "react";
import './tasks-add-form.css';

class TasksAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
      })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3) return;
        this.props.onAdd(this.state.name);
        this.setState({
          name: ''
      })
    }


    render() {
        const {name} = this.state;

        return (
            <div className="app-add-form"
                onSubmit={this.onSubmit}>
                <h3>Add a new task</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Describe the task"
                           name='name'
                           value={name}
                           onChange={this.onValueChange}/>

                    <button type="submit"
                            className="btn btn-outline-light">Add</button>
                </form>
            </div>
        )
    }
}

export default TasksAddForm;