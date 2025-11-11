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
    <div>
      <div>
        <label>
          Status:
          <select onChange={handleStatusFilterChange} defaultValue="all">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Priority:
          <select onChange={handlePriorityFilterChange} defaultValue="all">
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
