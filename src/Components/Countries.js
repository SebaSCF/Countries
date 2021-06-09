import React from 'react'
import '../Styles/Countries.css'


const Countries = ({changeHandler}) => {
    return (
        <div className="container-fluid">
        <div className="Searching p-2 pt-4 ">
            <div className="searchBox ">
                <input type="text" className="form-control" onChange={changeHandler} placeholder="Search for a Country or Region" />
            </div>
                </div>
        </div>
    )
}

export default Countries
