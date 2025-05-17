export function filterTasks(tasks, filters) {
    if (filters.length === 0) return tasks;
    
    const filteredTasks = tasks.filter(task => 
        filters.every(filter => filter.predicate(task))
    );
    
    return filteredTasks;
}