import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";

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
    {
      id: "3",
      title: "Task 3",
      description: "Description 3",
      status: "completed",
      priority: "high",
      dueDate: "2024-01-02",
    },
    {
      id: "4",
      title: "Task 4",
      description: "Description 4",
      status: "in-progress",
      priority: "high",
      dueDate: "2024-01-06",
    },
  ]);

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

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
