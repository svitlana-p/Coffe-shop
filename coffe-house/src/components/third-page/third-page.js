import { Component } from "react";
import AboutBeans from "../about-beans/about-beans";

const imgCoffe = require('./img/coffee.png');
const headerText = 'About our goods';


class ThirdPage extends Component {


    render () {
        return (
            <div>
                < AboutBeans image = {imgCoffe}
                 headerText = {headerText} 
                />
            </div>
        )
    }
}

export default ThirdPage;