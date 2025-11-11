export type TaskStatus = 'pending' | 'in-progress' | 'completed';
export type TaskPriority = 'low' | 'medium' | 'high';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}

export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

export interface TaskItemProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: TaskPriority;
    }) => void;
}

export interface TaskFormData {
    title: string;
    description: string;
    priority: TaskPriority;
    dueDate: string;
}

export interface TaskFormProps {
    initialValues?: TaskFormData;
    onSubmit: (data: TaskFormData) => void;
    onCancel?: () => void;
}