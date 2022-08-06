import { useState } from 'react';

import './search.css';


const SearchPanel = props => {
    
    const [term, setTerm] = useState('');        

    const onUpdateSearchLocal = e => {
        const term = e.target.value;
        setTerm(term);
        props.onUpdateSearch(term);
    }
   
    return (
        <div className='search-panel'>
            <label htmlFor="search">Looking for</label>
            <input
                type='text'
                name='search'
                className='search-input'
                placeholder='start typing here' 
                value={term}
                onChange={onUpdateSearchLocal}/>
        </div>
    )
   
}


export default SearchPanel;