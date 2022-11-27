import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    // console.log(props.id);
    return (
        <article>
            <h2>{props.title}</h2>
            <img src={props.thumbnail} alt={props.title} />
            <Link to={`detail/${props.id}`} state={props.products}>Detail</Link>
        </article>
    )
}

export default ProductCard

