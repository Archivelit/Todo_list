export function filterTasks(tasks, filters) {
    if (filters.length === 0) return tasks;
    
    const filteredTasks = tasks.filter(task => 
        filters.some(filter => filter.predicate(task))
    );
    
    return filteredTasks;
}