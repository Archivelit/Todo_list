import { FiltersContext } from "../context/FiltersContext"

import { useContext } from "react"

function Filter({ title, ind }) {
    const { filters, updateFilterStatus} = useContext(FiltersContext);

    return(
        <div 
            className="flex items-center mt-0.5 filter cursor-pointer" 
            onClick={() => updateFilterStatus(ind)}
        >
            <input 
            type="checkbox" 
            className="filter" 
            onChange={() => {}}
            checked={filters[ind].isEnabled}
            />
            <p className="ml-2">
                {title}
            </p>
        </div>
    )
}

export default Filter