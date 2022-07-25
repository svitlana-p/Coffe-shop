import { Component } from 'react';

import Navigation from '../nav/nav';
import OurCoffeHeader from '../header-our-coffe/header-our-coffe';
import MainHeader from "../main-header/main-header";
import YourPleasure from '../your-pleasure/your-pleasure';
import MainPage from '../main-page/main-page';
import SecondPage from '../second-page/second-page';
import ThirdPage from '../third-page/third-page';


import './app.css';


const logo = require('../main-about-us/Beans logo.png');
const logoBeansW = require('./img/Group-8.png');
const logoBeansB = require('./img/Group.png');

 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
           renderHeader : 'main'

        }
    }
    onPageSelect = (renderHeader) => {
        this.setState({renderHeader});        
    }
    
    

    render () {
        if (this.state.renderHeader === 'main') {
            return (
                <div className='App'>
                    <header className='main-page'>
                        <Navigation logo={logoBeansW}
                        onPageSelect = {this.onPageSelect}
                        /> 
                        <MainHeader />                                    
                    </header>                 
                    <MainPage />
                    <footer>
                        <Navigation logo = {logoBeansB}
                        />
                    <img  src={logo} alt='logo'></img>
                </footer >
                </div>
            )
        } else if (this.state.renderHeader === 'coffe') {
            return (
                <div className='App'>
                    <header className='other-page'>
                        <Navigation logo={logoBeansW}
                        onPageSelect = {this.onPageSelect} /> 
                        <OurCoffeHeader />                                       
                    </header>                 
                    <SecondPage />
                    <footer>
                        <Navigation logo = {logoBeansB}
                        />
                    <img  src={logo} alt='logo'></img>
                </footer >
                </div>
            )
        } else if (this.state.renderHeader === 'pleasure') {
            return (
                <div className='App'>
                    <header className='other-page'>
                        <Navigation logo={logoBeansW}
                        onPageSelect = {this.onPageSelect} /> 
                        <YourPleasure />                                       
                    </header>                 
                    <ThirdPage />
                    <footer>
                        <Navigation logo = {logoBeansB}
                        />
                    <img  src={logo} alt='logo'></img>
                </footer >
                </div>
            )
        }
        
    }
}

export default App;