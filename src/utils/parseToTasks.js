import { Task } from "../models/Task";

export function parseToTasks(array){
    return array.map(obj => {
        const task = new Task(obj.title, obj.description);
        task.isComplete = obj.isComplete;
        return task;
    })
}