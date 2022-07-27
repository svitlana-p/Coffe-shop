import { Component} from 'react';
import ('./about-beans.css');


const logoBeans = require('../main-about-us/Beans logo.png')

class AboutBeans extends Component {
    render () {
        return (
            <>
            <div className='conteiner'>
                <div className='img-cont'>
                    <img src={this.props.image} alt="girl with coffe" />
                </div>
                <div className='text-cont'>
                    <h3>{this.props.headerText}</h3>
                    <img src={logoBeans} alt="logo" />                    
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. </p>
                    <p>As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>                    
                </div>
            </div>
            <hr className='hr'/>
            </>
            
        )
    }
    
}

export default AboutBeans;