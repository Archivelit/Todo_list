import { useState, useEffect } from "react";

import { StorageWrapper as LocalStorage} from "../models/LocalStorage";
import { Task } from "../models/Task";

import { parseToTasks } from "../utils/parseToTasks";

export function useTasks() {
    const key = 'tasks';
    const storage = new LocalStorage();

    const [tasks, setTasks] = useState(() => {
            const savedTasks = storage.get(key);
            return savedTasks ? parseToTasks(savedTasks) : [];
        })
    
    useEffect(() => storage.set(key, tasks), [tasks])
    
    return {
        tasks,
        addTask(title, description) {
            let newTask = new Task(title.trim(), description.trim());
            setTasks([...tasks, newTask]);
        },

        removeTask(taskIndex) {
            const updatedTasks = [...tasks];
            updatedTasks.splice(taskIndex, 1);
            setTasks(updatedTasks);
        },

        toggleTask(taskIndex){
            const updatedTasks = [...tasks];
            updatedTasks[taskIndex].toggle();
            setTasks(updatedTasks);
        },

        getTasks() {
            return tasks;
        }
    }
}