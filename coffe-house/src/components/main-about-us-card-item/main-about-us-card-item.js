import ('./main-about-us-card-item.css')

function CardItem(props) {
    const {url, header, prise} = props;
    return (
      <div className="card-body">
        <div className='img-conteiner'>
           <img src={url} alt='coffe'/>  
        </div>       
        <div className='card-text'>
          <p>{header}</p>
          <p>{prise}</p>          
        </div>
      </div>
    );
  }
  
  export default CardItem;