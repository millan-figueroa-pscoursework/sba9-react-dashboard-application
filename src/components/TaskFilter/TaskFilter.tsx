import type { TaskFilterProps } from "../../types";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // handler for status filter dropdown
  const handleStatusFilterChange = (e: any) => {
    const value = e.target.value;
    console.log("status changed:", value);
    onFilterChange({
      // if the user selects 'all', it sends undefined (aka no filter)
      status: value === "all" ? undefined : value,
    });
  };

  // handler for priority filter dropdown
  const handlePriorityFilterChange = (e: any) => {
    const value = e.target.value;
    console.log("Priority filter changed:", value);
    onFilterChange({
      priority: value === "all" ? undefined : value,
    });
  };

  return (
    // render filter dropdown menus
    <div className="flex flex-row justify-center items-end gap-4 flex-wrap">
      <div>
        <label className="text-sm font-medium text-gray-700">
          Status:
          <select
            onChange={handleStatusFilterChange}
            defaultValue="all"
            className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">
          Priority:
          <select
            onChange={handlePriorityFilterChange}
            defaultValue="all"
            className="ml-2 border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
    </div>
  );
}
