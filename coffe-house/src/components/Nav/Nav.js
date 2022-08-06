import './nav.css';

const Navigation = props => {
   
    const mainPage = () => {       
        return (
            props.onPageSelect('main')
        )
    }
    const secondPage = () => {
        return (
            props.onPageSelect('coffe')
        )
    }
    const thirdPage = () => {
        return (
            props.onPageSelect('pleasure')
        )
    }
    return (
        <nav>
            <ul>
                <li className='logo' onClick={mainPage }><img src={props.logo} alt='coffe'></img>Coffe House</li>
                <li onClick={secondPage }>Our coffee</li>
                <li onClick={thirdPage}>For your pleasure</li>          
            </ul>          
        </nav>
    );
    
}

export default Navigation;