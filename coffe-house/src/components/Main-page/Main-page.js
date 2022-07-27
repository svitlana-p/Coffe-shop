import { Component } from "react";

import MainAboutUs from "../Main-about-us/Main-about-us";
import MainaboutUsCards from "../Card-container/Card-container";

import './main-page.css';

import cardImage1 from './img/card1.png';
import cardImage2 from './img/card2.png';
import cardImage3 from './img/card3.png';  

const classes = 'card-body';

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
                        <div>
                        <h3>Our best</h3>
                        </div>
                        <MainaboutUsCards data={this.state.data}
                        classes={classes}
                        onPageSelect={this.props.onPageSelect}/>
                    </div>
                </main>           
            </>            
        )
    }

}

export default MainPage;