import { useRef } from "react"

function Filter({ title, id, clickHandler }) {
    const checkbox = useRef(null) 
    return(
        <div className="flex items-center mt-0.5 filter">
            <input type="checkbox" className="filter" ref={checkbox}id={id} onChange={clickHandler}/>
            <p className="ml-2" onClick={() => 
                checkbox.current.checked = !checkbox.current.checked
            }>
                {title}
            </p>
        </div>
    )
}

export default Filter