import './nav.css'
const logo = require('./img/Group-8.png');

function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href="/home" className='logo'><img src={logo} alt='coffe'></img>Coffe House</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>          
            </ul>
          
        </nav>
    );
}

export default Navigation;