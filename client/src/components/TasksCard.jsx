import React from "react";
import { useTasks } from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

export const TasksCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTasks();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-zinc-700 text-white rounded-md p-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <span>{task.done == 1 ? "✅" : "❌"}</span>
      </header>
      <p className="text-xs">{task.description}</p>
      <span>{task.createAt}</span>

      <div className="flex gap-x-1 ">
        <button
          className="bg-red-500 py-1 px-2 text-white"
          onClick={() => deleteTask(task.id)}
        >
          delete
        </button>
        <button
          className="bg-green-500 py-1 px-2 text-white"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          edit
        </button>
        <button
          className="bg-blue-500 py-1 px-2 text-white"
          onClick={() => handleDone(task.done)}
        >
          Toggle task
        </button>
      </div>
    </div>
  );
};
