import { useState } from "react";
import type { TaskFormData, TaskFormProps } from "../../types";

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
    // call the parent component function
    onSubmit(formData);
    // reset the form if adding a new task
    if (!initialValues) {
      setFormData(emptyForm);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* title input */}
      <div>
        <label htmlFor="title">title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="enter task title"
        />
      </div>

      {/* description textarea */}
      <div>
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="enter task description"
        />
      </div>

      {/* priority select */}
      <div>
        <label htmlFor="priority">priority</label>
        <select
          id="priority"
          name="priority"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </div>

      {/* due date input */}
      <div>
        <label htmlFor="dueDate">due date</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          value={formData.dueDate}
          onChange={handleChange}
        />
      </div>

      {/* action buttons */}
      <div>
        <button type="submit">save task</button>
        {onCancel && (
          <button type="button" onClick={onCancel}>
            cancel
          </button>
        )}
      </div>
    </form>
  );
}
