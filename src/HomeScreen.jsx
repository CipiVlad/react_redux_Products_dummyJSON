import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './components/ProductCard'
import { listProducts } from './store/StateSlice/productsSlice'
import store from '../src/store/store'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const { loading, error, productLists } = products;
    // console.log(productLists.products);

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            {
                loading ? (
                    <p>Loading</p>
                ) : error ? (
                    <p>Message: {error}</p>
                ) : (
                    <>
                        <h2>Products</h2>
                        {productLists.products.map((e) =>

                            <ProductCard
                                key={e.id}
                                id={e.id}
                                title={e.title}
                                price={e.price}
                                thumbnail={e.thumbnail}
                                products={products}
                            />
                        )
                        }

                    </>
                )
            }
        </div>
    )
}

export default HomeScreen