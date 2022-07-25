import ('./main-about-us-card-item.css')

function CardItem(props) {
    const {url, header, country, prise, classes, aligns} = props;
    return (
      <div className={classes}>
        <div className='img-conteiner'>
           <img src={url} alt='coffe'/>  
        </div>       
        <div className='card-text'>
          <p className={aligns}>{header}</p>
          <p className={aligns}>{country}</p>
          <p>{prise}</p>          
        </div>
      </div>
    );
  }
  
  export default CardItem;