import { Component } from "react";
import Navigation from '../nav/nav';
import MainHeader from "../main-header/main-header";
import MainAboutUs from "../main-about-us/main-about-us";

import './main-page.css';
import MainaboutUsCards from "../main-about-us-cards/main-about-us-cards";
const logo = require('../main-about-us/Beans logo.png')

const logoBeansW = require('./img/Group-8.png');
const logoBeansB = require('./img/Group.png');


const cardImage1 = require('./img/card1.png');
const cardImage2 = require('./img/card2.png');
const cardImage3 = require('./img/card3.png');
  

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {url: cardImage1, header: 'Solimo Coffee Beans 2 kg', prise: '10.73$'},
                {url: cardImage2, header: 'Presto Coffee Beans 1 kg', prise: '15.99$'},
                {url: cardImage3, header: 'AROMISTICO Coffee 1 kg', prise: '6.99$'}
            ]
        }
    
    }
    render () {
        return (
            <>
            <header>
                <Navigation logo={logoBeansW}/>
                <MainHeader />
            </header>
            <main>
                <MainAboutUs />
                <div className="main-about-us-cards">
                    <MainaboutUsCards data={this.state.data}/>
                </div>
            </main>
            <footer>
                <Navigation logo = {logoBeansB}/>
                <img  src={logo} alt='logo'></img>
            </footer >
            
            </>
            
        )
    }

}

export default MainPage;