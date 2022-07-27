import ('./card-item.css')


function CardItem(props) {
    const {url, header, country, prise, classes, aligns,onPageSelect} = props;

    const onLocalPageSelect = () => {
      return (
        onPageSelect('about')
      ) 
    }
    return (
      <div className={classes} onClick={onLocalPageSelect}>
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