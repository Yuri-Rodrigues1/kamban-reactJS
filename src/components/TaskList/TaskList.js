import React from "react";
import "./TaskList.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  taskState,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
      </div>
      <button className="btn" onClick={addTask}>
        Adcionar Tarefa
      </button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
