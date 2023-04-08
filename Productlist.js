import Product from './Product';

function ProductList() {
    const products = [
        {id: 1, name: 'Apple MacBook Pro', price: 25000, ratings: 4.9, reviewsCount: 79, availableIn: ['Amazon', 'Flipkart', 'Croma'], imgUrl: 'https://m.media-amazon.com/images/I/610pghkO81L._SX522_.jpg'},
        {id: 2, name: 'Samsung UHD 52 Inch TV', price: 18500, ratings: 4.7, reviewsCount: 121, availableIn: ['Croma'], imgUrl: 'https://images.samsung.com/is/image/samsung/in-hd-tv-t4500-ua32t4500akxxl-ua--r----auxxl-227105457?$650_519_PNG$'},
        {id: 3, name: 'Voltas AC 3 Ton', price: 16000, ratings: 4.6, reviewsCount: 70, availableIn: ['Amazon', 'Croma'], imgUrl: 'https://www.arihantelectronics.org/wp-content/uploads/2020/03/183PZY.jpg'},
        {id: 4, name: 'Sony Bluetooth Headset AZ Model', price: 6600, ratings: 4.1, reviewsCount: 100, availableIn: ['Flipkart'], imgUrl: 'https://m.media-amazon.com/images/I/81di9mF9OVL._SX355_.jpg'},
        {id: 5, name: 'MI TV Sensa Touch', price: 9800, ratings: 4.3, reviewsCount: 211, availableIn: ['MI Store', 'Croma'], imgUrl: 'https://m.media-amazon.com/images/I/81tD7OZ0RXL._SL1500_.jpg'}
    ];

    
    return (
        <ul>
            {products.map((product, index) => {
                return (<Product product={product} key={index}/>)
            })}
            
        </ul>
    )
     }

export default ProductList;