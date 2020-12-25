import React from 'react'


function Mylist(){
    return (
        <div className='container'>
            <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Silicon Valley
                <span class="badge badge-primary badge-pill">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Suits
                <span class="badge badge-primary badge-pill">2</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                White Collar
                <span class="badge badge-primary badge-pill">1</span>
            </li>
            </ul>
        </div>
    )
}
export default Mylist;