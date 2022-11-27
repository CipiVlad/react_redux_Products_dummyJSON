import { useState, useEffect } from 'react'
import './App.css'

function ReducerVersuch() {

    const [item, setItem] = useState('')
    const List = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

    const listReducer = (state = List, action) => {
        switch (action.type) {
            case 'onList': return [...state, action.item];
            default: return state;
        }
    };

    const addToList = (item) => {
        return {
            type: 'onList',
            item: item
        }
    }






    return (
        <div className="App">
            <h1>Shopping List</h1>
            {
                List.map((e) => (
                    <li key={e}>{e}</li>
                ))
            }

            <input type="text" value={item} onChange={(e) => { setItem(e.target.value) }} />
            <button onClick={doIt}>Focus the text input</button>
        </div>
    )
}


export default ReducerVersuch
