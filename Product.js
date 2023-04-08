
function Product (props) {
    console.log(props, 'props');
    const {id, name, imgUrl, price, ratings, reviewsCount, 
        availableIn}=props.product;
    return (
        
    <li>
    <section>
    <img src={imgUrl} alt={name} width={'400'} height={'300'} />
    </section>
    <section>
    <h3>{name}</h3>
    <div>RS.{price}</div>
    <p>Available In {availableIn.join(',')}</p>
    <p>Ratings:{ratings}</p>
    <p>Reviews Count: {reviewsCount}</p>
    </section>
    </li>
    );
    }
    export default Product;