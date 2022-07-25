import { Component } from "react";
import AboutBeans from "../about-beans/about-beans";
import ('./second-page.css');

const imgGirl = require('./img/girl.jpg');
const headerText = 'About our beans';


class SecondPage extends Component {


    render () {
        return (
            <div>
                < AboutBeans image = {imgGirl} 
                headerText = {headerText}
                />
            </div>
        )
    }
}

export default SecondPage;