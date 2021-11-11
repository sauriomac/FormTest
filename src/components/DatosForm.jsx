import React from 'react'

const DatosForm = ({text, number, select, date}) => {
    return (
        <div className="data">
            <h3>Text: {text} </h3>
            <h3>Number:  {number}</h3>
            <h3>Select: {select} </h3>
            <h3>Date: {date} </h3>
        </div>
    )
}

export default DatosForm
