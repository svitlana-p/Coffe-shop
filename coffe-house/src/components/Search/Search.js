import { Component } from 'react';

import './search.css';


class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state= {
            term: ''
        }
    }

    onUpdateSearchLocal = e => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
   render () {
    return (
        <div className='search-panel'>
            <label htmlFor="search">Looking for</label>
            <input
                type='text'
                name='search'
                className='search-input'
                placeholder='start typing here' 
                value={this.state.term}
                onChange={this.onUpdateSearchLocal}/>
        </div>
    )
   }
}


export default SearchPanel;