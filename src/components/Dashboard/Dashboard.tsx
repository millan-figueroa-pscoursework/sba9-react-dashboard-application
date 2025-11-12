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

  // filters state stores currently selected status and priority
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

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
  const handleFilterChange = (filtersUpdate: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    // merge new filters with existing ones so user can select both status and priority
    setFilters((prev) => ({
      ...prev,
      ...filtersUpdate,
    }));
    // shows whats happening when filters r changed
    console.log("filters received in dashboard:", {
      ...filters,
      ...filtersUpdate,
    });
  };

  // apply filters before rendering the task list
  // 1. if a filer value only include tasks that match it
  // 2. if no filter set show all tasks for it
  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true; // include task if passes all filters
  });

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* app header */}
      <header className="mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
      </header>

      {/* filters */}
      <section className="border border-gray-200 rounded-md p-3 mb-4 bg-white shadow-sm">
        <TaskFilter onFilterChange={handleFilterChange} />
      </section>

      {/* task form */}
      <section className="mb-4">
        <TaskForm onSubmit={handleAddTask} />
      </section>

      {/* task list */}
      <section className="border border-gray-200 rounded-md p-3 bg-white shadow-sm">
        <h2 className="text-sm font-semibold text-gray-700 mb-2">tasks</h2>
        <TaskList
          tasks={filteredTasks}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      </section>
    </div>
  );
}
