import { Component } from 'react';
import './nav.css'


class Navigation extends Component {
   
    mainPage = () => {       
        return (
            this.props.onPageSelect('main')
        )
    }
    secondPage = () => {
        return (
            this.props.onPageSelect('coffe')
        )
    }
    thirdPage = () => {
        return (
            this.props.onPageSelect('pleasure')
        )
    }
    render() {
        return (
        <nav>
            <ul>
                <li className='logo' onClick={this.mainPage }><img src={this.props.logo} alt='coffe'></img>Coffe House</li>
                <li onClick={ this.secondPage }>Our coffee</li>
                <li onClick={this.thirdPage}>For your pleasure</li>          
            </ul>
          
        </nav>
    );
    }
    
}

export default Navigation;