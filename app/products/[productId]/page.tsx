const SingleProduct = ({ params }: { params: { productId: string } }) => {


    return (
        <div>SingleProduct : {params.productId}</div>
    )
}
export default SingleProduct
