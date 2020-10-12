import React, { useState } from "react";
import AddItem from './AddItem';
import List from './List/List';
import {
    getTasks,
    addTask,
    removeTask,
    taskDone,
} from "../StorageManager";
import { Task } from "../interfaces";

import "./Tasks.scss";

export default function Tasks() {
    const [tasks, setTasks] = useState(getTasks());

    function add(task: Task) {
        setTasks(addTask(task));
    }

    function remove(id: string) {
        setTasks(removeTask(id));
    }

    function done(id: string, done: boolean) {
        setTasks(taskDone(id, done));
    }

    return (
        <div className="tasks">
            <h1>Todo List</h1>
            <AddItem onSubmit={add} />
            <hr />
            <List
                items={Array.from(tasks.values())}
                onRemove={remove}
                onDone={done}
            />
        </div>
    );
}
