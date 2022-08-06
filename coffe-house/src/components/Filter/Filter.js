import Button from 'react-bootstrap/esm/Button';
import './filter.css';


const AppFilter = ({ onFilterSelect}) => {
    const buttonsData = [
        {name: 'brasil', label: 'Brasil'},
        {name: 'kenya', label: 'Kenya'},
        {name: 'columbia', label: 'Columbia'}
    ];

    const buttons = buttonsData.map(({name,label}) => {
        return (
            <Button 
                variant='btn btn-light search-btn'
                type="button"
                key={name}
                onClick={()=>onFilterSelect(name)}>
                   {label}
            </Button>
        )
    })
    
    return (
        <div className="buttons-cont">
            <p>Or filter</p>
            {buttons}           
        </div>
    );
}


export default AppFilter;