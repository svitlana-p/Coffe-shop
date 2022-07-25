import { Component } from "react";


import MainAboutUs from "../main-about-us/main-about-us";
import MainaboutUsCards from "../main-about-us-cards/main-about-us-cards";

import './main-page.css';

const cardImage1 = require('./img/card1.png');
const cardImage2 = require('./img/card2.png');
const cardImage3 = require('./img/card3.png');  

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {url: cardImage1, header: 'Solimo Coffee Beans 2 kg', prise: '10.73$', id:1},
                {url: cardImage2, header: 'Presto Coffee Beans 1 kg', prise: '15.99$', id:2},
                {url: cardImage3, header: 'AROMISTICO Coffee 1 kg', prise: '6.99$', id:3}
            ]
        }
    
    }
    render () {
        return (
            <>                     
                <main>
                    <MainAboutUs />
                    <div className="main-about-us-cards">
                        <MainaboutUsCards data={this.state.data}/>
                    </div>
                </main>           
            </>            
        )
    }

}

export default MainPage;