import PropTypes from "prop-types";
import "./taskList.scss";

const TaskList = (props) => {
    const { tasks, setTasks } = props;

    const handleOnClickDeleteTask = (id) => {
        const index = tasks.findIndex((task) => task.id === id);
        const currentTasks = tasks.toSpliced(index, 1);
        setTasks(currentTasks);
    };

    return (
        <div>
            <h3>Tareas agregadas</h3>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <textarea
                            type="text"
                            value={task.text}
                            readOnly />
                        <button onClick={() => handleOnClickDeleteTask(task.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
};

export default TaskList;
