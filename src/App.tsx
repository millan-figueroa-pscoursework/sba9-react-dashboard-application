import { useState } from "react";
import type { Task, TaskStatus, TaskFormData } from "./types";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "2023-12-31",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description 2",
      status: "in-progress",
      priority: "medium",
      dueDate: "2024-01-01",
    },
  ]);

  // add a new task when form is submitted
  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: crypto.randomUUID(), // generates a unique id
      title: data.title,
      description: data.description,
      priority: data.priority,
      dueDate: data.dueDate,
      status: "pending", // new tasks start as pending
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // update a task's status
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      // map over previous tasks
      prev.map((task) =>
        //if the current task id matches the taskId we’re updating, return a new obj spreads all  old props but overwrites status w new val
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // filters thru array, keeps only tasks whose id does not match passedin taskId
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // receives filters from TaskFilter
  const handleFilterChange = (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    console.log("filter in app:", filters);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
