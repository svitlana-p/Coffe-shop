import './nav.css'


function Navigation({logo}) {
    return (
        <nav>
            <ul>
                <li><a href="/home" className='logo'><img src={logo} alt='coffe'></img>Coffe House</a></li>
                <li><a href="/home">Our coffee</a></li>
                <li><a href="/home">For your pleasure</a></li>          
            </ul>
          
        </nav>
    );
}

export default Navigation;