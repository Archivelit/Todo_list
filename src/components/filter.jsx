import { Children } from "react"

function Filter({ title, id, clickHandler }) {
    return(
        <div className="flex items-center mt-0.5 filter">
            <input type="checkbox" className="filter" id={id} onChange={clickHandler}/>
            <p className="ml-2" onClick={(e) => {
                const container = e.currentTarget.closest('.filter')
                const child = container.querySelector('input')
                child.checked = !child.checked
            }}>
                {title}
            </p>
        </div>
    )
}

export default Filter