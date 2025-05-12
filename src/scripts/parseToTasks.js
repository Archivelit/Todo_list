import { Task } from "../classes/Task";

export function parseToTasks(array){
    return array.map(obj => {
        const task = new Task(obj.title, obj.desc);
        task.isComplete = obj.isComplete;
        return task;
    })
}