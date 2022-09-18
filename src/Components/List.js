import React from 'react'
import data from "./ListData.json"

function List(props) {
    const filteredData = data.filter((event) => {
        if (props.input === '') {
            return event;
        } else {
            return event.text.toLowerCase().includes(props.input)
        }
    })
    return (
        <ul>
            {filteredData.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}

export default List