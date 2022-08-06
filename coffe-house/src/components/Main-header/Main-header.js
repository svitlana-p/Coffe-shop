import Button from 'react-bootstrap/Button';
import './main-header.css';

import logo from'./Beans logo-1.png';

const MainHeader = ({onPageSelect}) => {
    const onLocalPageSelect = () => {
        return (
          onPageSelect('coffe')
        ) 
    }
    return (
        <div className='main-header'>
            <h1>Everything You Love About Coffee</h1>
            <img src={logo} alt='logo'></img>
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <Button variant="outline-light" className='btn' onClick={onLocalPageSelect}>More</Button>
        </div>
    )
}

export default MainHeader;