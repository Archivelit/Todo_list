import { TasksContext } from '../../context/TasksContext';
import { FiltersContext } from '../../context/FiltersContext';

import { useTasks } from "../../hooks/useTasks";
import { useFilters } from "../../hooks/useFilters";

function TodoProviders({ children }) {
    const taskStore = useTasks();
    const filtersStore = useFilters();

    return(
        <TasksContext.Provider value={taskStore}>
            <FiltersContext.Provider value={filtersStore}>
                {children}
            </FiltersContext.Provider>
        </TasksContext.Provider>
    )
}
export default TodoProviders