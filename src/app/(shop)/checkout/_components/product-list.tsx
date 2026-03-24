
type Props = {
    products: { name: string; quantity: number; price: number }[]
}
export default function ProductList({ products }: Props) {
    return (
        <>
            <li className="tp-order-info-list-header">
                <h4>Product</h4>
                <h4>Total</h4>
            </li>
            {products.map((product, index) => (
                <li key={index} className="tp-order-info-list-desc">
                    <p>{product.name} <span> x {product.quantity}</span></p>
                    <span>${(product.price * product.quantity).toFixed(2)}</span>
                </li>
            ))}
        </>

    );
}

