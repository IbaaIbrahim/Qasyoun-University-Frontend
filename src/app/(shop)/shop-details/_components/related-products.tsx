import ShopItem from "@/components/shop/shop-item";
import bookData from "@/data/book-shop-data";


export default function RelatedProducts() {
    return (
        <section className="tp-product-related-area pt-80 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-product-related-heading text-center mb-30">
                            <h4 className="tp-product-related-title">Related Products</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {bookData.slice(0, 4).map((item) => (
                        <div key={item.id} className="col-lg-3 col-sm-6">
                            <ShopItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
