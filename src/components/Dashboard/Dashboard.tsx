// src/components/Dashboard/Dashboard.tsx
import { useState } from "react";
import type { Task, TaskStatus, TaskFormData } from "../../types";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskForm from "../TaskForm/TaskForm";

export default function Dashboard() {
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

  // add new task
  const handleAddTask = (data: TaskFormData) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: data.title,
      description: data.description,
      priority: data.priority,
      dueDate: data.dueDate,
      status: "pending",
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  // change task status
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // delete task
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // handle filter change
  const handleFilterChange = (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    console.log("filter in dashboard:", filters);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">dashboard</h1>

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
