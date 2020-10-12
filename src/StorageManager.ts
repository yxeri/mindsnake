import { Task } from "./interfaces";

export function getTasks(): Map<string, Task> {
    const tasks = localStorage.getItem('tasks');

    return tasks
        ? new Map(JSON.parse(tasks))
        : new Map();
}

export function setTasks(tasks: Map<string, Task>) {
    localStorage.setItem('tasks', JSON.stringify(Array.from(tasks)));
}

export function addTask(task: Task): Map<string, Task> {
    const tasks = getTasks();

    tasks.set(task.id, task);

    setTasks(tasks);

    return tasks;
}

export function removeTask(id: string): Map<string, Task> {
    const tasks = getTasks();

    tasks.delete(id);

    setTasks(tasks);

    return tasks;
}

export function taskDone(id: string, done: boolean): Map<string, Task> {
    const tasks = getTasks();
    const task = tasks.get(id);

    if (task) {
        task.done = done;

        tasks.set(id, task);
    }

    setTasks(tasks);

    return tasks;
}
