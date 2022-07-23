import { Component } from "react";
import Navigation from '../nav/nav';
import MainHeader from "../main-header/main-header";
import MainAboutUs from "../main-about-us/main-about-us";

import './main-page.css';
const logo = require('../main-about-us/Beans logo.png')

  

class MainPage extends Component {
    render () {
        return (
            <>
            <header>
                <Navigation />
                <MainHeader />
            </header>
            <main>
                <MainAboutUs />
            </main>
            <footer>
                
            </footer>
            <Navigation />
            <img  src={logo} alt='logo'></img>
            </>
            
        )
    }

}

export default MainPage;