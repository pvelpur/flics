import React, { useState, useEffect } from "react"
import { loadMedia } from '../reducers/myListReducer';
import {useSelector, useDispatch} from 'react-redux'


function Mylist(){
    const favorites = useSelector(state => state.favorites)

    const items = favorites.map((item, index) =>
        <li key={index} className="list-group-item justify-content-between">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p>{item.description}</p>
            </div>
        </li>
    )

    const [loading, setIsLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(()=>{    
        const getMedia = async () => {
            setIsLoading(true)
            await dispatch(loadMedia())
            setIsLoading(false)
        };
        getMedia()
    }, [dispatch])

    if(loading) {
        return (<div>Loading...</div>)
    }

    return (
        <div className='container'>
            <div className="card" style={{marginBottom: "50px"}}>
                <ul className="list-group">
                    {items}  
                </ul>
            </div>
        </div>
    )
}



export default Mylist;