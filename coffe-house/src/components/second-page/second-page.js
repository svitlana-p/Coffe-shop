import { Component } from "react";
import AboutBeans from "../about-beans/about-beans";
import MainaboutUsCards from "../main-about-us-cards/main-about-us-cards";
import ('./second-page.css');

const imgGirl = require('./img/girl.jpg');
const headerText = 'About our beans';

const cardImage = require('../main-page/img/card3.png');
const classes = 'card-body secondary';
const aligns = 'left'

class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:1},
                {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Kenya', prise: '6.99$', id:2},
                {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Columbia', prise: '6.99$', id:3},
                {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:4},
                {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:5},
                {url: cardImage, header: 'AROMISTICO Coffee 1 kg', country:'Brasil', prise: '6.99$', id:6}
            ]
        }
    }
    render () {
        return (
            <div>
                < AboutBeans image = {imgGirl} 
                headerText = {headerText}
                />
                <div>
                <MainaboutUsCards data={this.state.data}
                classes={classes}
                aligns={aligns}/>
                </div>
            </div>
        )
    }
}

export default SecondPage;