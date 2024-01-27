import PropTypes from "prop-types";
import { useState } from "react";
import "./taskForm.scss";

const TaskForm = (props) => {
    const { tasks, setTasks } = props;

    const [inputNewTask, setInputNewTask] = useState("");

    const generateId = () => {
        let maxId = 0;

        tasks.forEach((task) => {
            if (task.id > maxId) {
                maxId = task.id;
            }
        });

        return maxId + 1;
    };

    const handleOnChangeNewTask = (e) => {
        setInputNewTask(e.target.value);
    };

    const handleOnClickAddTask = () => {
        if (inputNewTask.trim().length > 0) {
            const newTask = { id: generateId(), text: inputNewTask };
            setTasks([...tasks, newTask]);
            setInputNewTask("");
        }
    };

    return (
        <div id="list">
            <h3>Nueva tarea</h3>
            <textarea
                id="task"
                value={inputNewTask}
                rows="4" cols="50"
                onChange={(e) => handleOnChangeNewTask(e)}
            />
            <button onClick={handleOnClickAddTask}>Agregar tarea</button>
        </div>
    );
};

TaskForm.propTypes = {
    tasks: PropTypes.array.isRequired,
    setTasks: PropTypes.func.isRequired,
    // inputNewTask: PropTypes.string.isRequired,
    // setInputNewTask: PropTypes.func.isRequired,
};

export default TaskForm;
