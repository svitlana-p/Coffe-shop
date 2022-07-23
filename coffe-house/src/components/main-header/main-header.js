import Button from 'react-bootstrap/Button';
import './main-header.css';
const logo = require('./Beans logo-1.png')

function MainHeader () {
    return (
        <div className='main-header'>
            <h1>Everything You Love About Coffee</h1>
            <img src={logo} alt='logo'></img>
            <p>We makes every day full of energy and taste</p>
            <p>Want to try our beans?</p>
            <Button variant="outline-light" className='btn'>More</Button>
        </div>
    )
}

export default MainHeader;