import { useState, useEffect } from 'react';

import { filterTasks } from '../utils/filterTasks'

function useFilteredTasks(tasks, enabledFilters){
    const [filteredTasks, setFilteredTasks] = useState(filterTasks(tasks, enabledFilters));
    
    useEffect(() => {
            setFilteredTasks(filterTasks(tasks, enabledFilters));
    }, [tasks, enabledFilters])

    return filteredTasks
}

export default useFilteredTasks