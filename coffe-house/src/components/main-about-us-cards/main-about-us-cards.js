
import CardItem from '../main-about-us-card-item/main-about-us-card-item';

import './main-about-us-cards.css';


function MainaboutUsCards ({data}) {
  
    const element = data.map(item => {
          return  <CardItem {...item}/>
        })
     
           return (
        <div className='main-conteiner'>
            <div>
                <h3>Our best</h3>
            </div>
            <div className='cards-conteiner'>
                {element}
            </div>
            
        </div>
    ) 
        
    
}


export default MainaboutUsCards;