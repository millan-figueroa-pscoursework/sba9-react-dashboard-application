import type { TaskStatus, TaskItemProps } from "../../types";

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  return (
    <li
      key={task.id}
      className="flex flex-col sm:flex-row sm:items-center justify-between border border-gray-200 rounded-md p-3 mb-2 bg-white shadow-sm"
    >
      {/* left section: task info */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{task.description}</p>

        <div className="text-xs text-gray-500 space-x-3">
          <span>
            status:{" "}
            <span className="font-medium text-gray-700">{task.status}</span>
          </span>
          <span>
            priority:{" "}
            <span className="font-medium text-gray-700">{task.priority}</span>
          </span>
          <span>
            due:{" "}
            <span className="font-medium text-gray-700">{task.dueDate}</span>
          </span>
        </div>
      </div>

      {/* right section: actions */}
      <div className="flex items-center gap-2 mt-3 sm:mt-0 sm:ml-4">
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="pending">pending</option>
          <option value="in-progress">in progress</option>
          <option value="completed">completed</option>
        </select>

        <button
          onClick={() => onDelete(task.id)}
          className="text-sm bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600"
        >
          delete
        </button>
      </div>
    </li>
  );
}
