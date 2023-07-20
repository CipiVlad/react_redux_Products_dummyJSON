import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    // console.log(props.id);
    return (
        <article
            style={{
                margin: '20vh'
            }}
        >
            <h2>{props.title}</h2>
            <img src={props.thumbnail} alt={props.title} className='img-thumbnail' />
            <Link
                to={`detail/${props.id}`}
                state={props.products}
                style={
                    {
                        display: 'block',
                        textDecoration: 'none',
                        color: "#242424",
                        marginTop: '2vh'
                    }
                }
            >
                Detail
            </Link>
        </article >
    )
}

export default ProductCard

