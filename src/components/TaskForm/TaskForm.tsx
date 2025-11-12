import { useState } from "react";
import type { TaskFormData, TaskFormProps } from "../../types";
import { validateTaskData } from "../../utils/taskUtils";

const emptyForm: TaskFormData = {
  title: "",
  description: "",
  priority: "medium",
  dueDate: "",
};

export default function TaskForm({
  initialValues,
  onSubmit,
  onCancel,
}: TaskFormProps) {
  // store form data in local state
  const [formData, setFormData] = useState<TaskFormData>(
    initialValues ?? emptyForm
  );

  // state var that keep track of error messages
  const [errors, setErrors] = useState<string[]>([]);

  // handle any input, textarea, or select changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // run validation
    const nextErrors = validateTaskData(formData);
    setErrors(nextErrors);

    // stop if there are validation errors
    if (nextErrors.length > 0) return;

    // submit valid form
    onSubmit(formData);

    // reset form if adding a new one
    if (!initialValues) setFormData(emptyForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col border border-gray-200 rounded-md p-3 mb-3 bg-white shadow-sm"
    >
      {/* render validation messages */}
      {errors.length > 0 && (
        <ul className="mb-3 text-sm text-red-600 list-none pl-5">
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {/* title input */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {initialValues ? "Edit Task" : "Add Task"}
      </h3>

      {/* title */}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="enter task title"
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>

      {/* description textarea */}
      <div className="mb-3">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="enter task description"
          rows={3}
          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
        />
      </div>

      {/* priority select */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>

        {/* due date input */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            due date
          </label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
          />
        </div>
      </div>

      {/* action buttons */}
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="text-sm bg-violet-400 text-white rounded px-5 py-1 hover:bg-violet-600"
        >
          save
        </button>

        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="text-sm bg-violet-400 text-white rounded px-5 py-1 hover:bg-violet-600"
          >
            cancel
          </button>
        )}
      </div>
    </form>
  );
}
