import { useState } from "react";
import { Filter } from "../models/Filter";
import { useEffect } from "react";

export function useFilters() {
    const [filters, setFilters] = useState([
        new Filter('Splněné', task => task.isComplete),
        new Filter('Nesplněné', task => !task.isComplete)
    ])

    function getEnabledFilters() {
        return filters.filter(filter => 
            {if (filter.isEnabled) return filter}
        )
    }
    const [enabledFilters, setEnabledFilters] = useState(getEnabledFilters())
    
    useEffect(() => {
        setEnabledFilters(getEnabledFilters())
    }, [filters])

    function updateFilterStatus(ind) {
        const updatedFilters = [...filters];
        updatedFilters[ind].isEnabled = !updatedFilters[ind].isEnabled;
        setFilters(updatedFilters);
    }

    function clearFilters() {
        const updatedFilters = filters.map(filter => ({ ...filter, isEnabled: false }));
        setFilters(updatedFilters);
    }

    return {
        filters,
        enabledFilters,
        updateFilterStatus,
        clearFilters
    }
}