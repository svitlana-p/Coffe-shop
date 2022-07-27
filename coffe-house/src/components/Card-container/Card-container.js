
import CardItem from '../Card-item/Card-item';

import './card-container.css';


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