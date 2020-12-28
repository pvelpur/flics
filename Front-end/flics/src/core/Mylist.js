import React, { useState, useEffect } from "react"
import { loadMedia } from '../reducers/myListReducer';
import {useSelector, useDispatch} from 'react-redux'


function Mylist(){
    const favorites = useSelector(state => state.favorites)

    const items = favorites.map((item, index) =>
        <li key={index} className="list-group-item justify-content-between">
            {item}
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
            <ul className="list-group">
            {items}
            </ul>
        </div>
    )
}



export default Mylist;