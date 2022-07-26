
import CardItem from '../main-about-us-card-item/main-about-us-card-item';

import './main-about-us-cards.css';


function MainaboutUsCards ({data, classes, aligns, onPageSelect}) {
    
    const element = data.map(item => {
        const {id, ...itemProps} = item;
          return  <CardItem key={id}
          {...itemProps}
          classes={classes}
          aligns={aligns}
          onPageSelect={onPageSelect}
          />
        })
     
           return (          
            <div className='cards-conteiner'>
                {element}
            </div>
    ) 
        
    
}


export default MainaboutUsCards;