import { useLocation, useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
    const { prodId } = useParams()
    const location = useLocation()
    let data = location.state;

    let detail = data.productLists.products.filter((elt) => {
        // prodId comes as a String, therefore convert to Number
        return elt.id == Number(prodId)
    })

    console.log(detail);

    return (
        <article>
            <h1>A Closer Look</h1>
            <h2>{detail[0].title}</h2>
            <p>{detail[0].description}</p>
            <img src={detail[0].thumbnail} alt={detail[0].title} />
            <img src={detail[0].images[0]} alt={detail[0].title} />
            <img src={detail[0].images[1]} alt={detail[0].title} />
            <img src={detail[0].images[2]} alt={detail[0].title} />
            <img src={detail[0].images[3]} alt={detail[0].title} />
            <img src={detail[0].images[4]} alt={detail[0].title} />
            <p>$ {detail[0].price}</p>
            <Link to="/">back to all Products</Link>
        </article>
    )
}

export default ProductDetail

