import type { TaskFormData } from "../types";

export function validateTaskData(data: TaskFormData): string[] {
    const errors: string[] = [];

    // yells at you is theres no title
    if (!data.title.trim()) {
        errors.push("Title is required.");
    }


    // yells at you if description textarea empty
    if (!data.description.trim()) {
        errors.push("Description is required.");
    }

    // yells at you set the due date in the past
    if (data.dueDate) {
        const due = new Date(data.dueDate);
        const now = new Date();

        if (due < now) {
            errors.push("Due date cannot be in the past.");
        }
    }


    return errors;
}
