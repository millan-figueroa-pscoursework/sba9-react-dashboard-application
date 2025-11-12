import { useState } from "react";
import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  if (tasks.length === 0) {
    return <div>No tasks yet.</div>;
  }

  //adds local state for sorting
  const [sortOrder, setSortOrder] = useState<
    "low" | "medium" | "high" | "none"
  >("none");

  // create temp array to sort using spread op to populate with elements from original tasks array
  const sortedTasks = [...tasks];

  // sorting logic
  if (sortOrder !== "none") {
    // defines sorting order
    const priorities =
      sortOrder === "low"
        ? ["low", "medium", "high"]
        : ["high", "medium", "low"];
    // use indexOf to find the rank of each task's priority and compare them
    sortedTasks.sort((a, b) => {
      return priorities.indexOf(a.priority) - priorities.indexOf(b.priority);
    });
  }

  return (
    <>
      {/* task sorting by priority*/}
      <div className="flex justify-end mb-2">
        <label className="text-sm text-gray-700 mr-2">Sort by Priority:</label>
        <select
          value={sortOrder}
          onChange={(e) =>
            setSortOrder(e.target.value as "low" | "high" | "none")
          }
          className="border border-gray-300 rounded px-2 py-1 text-sm"
        >
          <option value="none">None</option>
          <option value="low">Low - High</option>
          <option value="high">High - Low</option>
        </select>
      </div>

      {/* re-render sorted tasks */}
      <ul>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
}
