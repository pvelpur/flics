import React from 'react'


function Mylist(){
    return (
        <div className='container'>
            <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Silicon Valley
                <span className="badge badge-primary badge-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Suits
                <span className="badge badge-primary badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                White Collar
                <span className="badge badge-primary badge-pill">1</span>
            </li>
            </ul>
        </div>
    )
}
export default Mylist;