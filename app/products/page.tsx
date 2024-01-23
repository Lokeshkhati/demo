'use client'
import { useFetchProductsQuery } from "@/redux/services/productApi";

type Props = {}
const Products = (props: Props) => {
    const { isLoading, isFetching, data, error } = useFetchProductsQuery(null);
    console.log(data)
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                gap: 20,
            }}
        >
            {data?.products?.map((product) => (
                <div
                    key={product.id}
                    style={{ border: "1px solid #ccc", textAlign: "center", cursor: 'pointer' }}
                >
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ height: 180, width: 180 }}
                    />
                    <h3>{product.title}</h3>
                </div>
            ))}
        </div>
    )
}
export default Products