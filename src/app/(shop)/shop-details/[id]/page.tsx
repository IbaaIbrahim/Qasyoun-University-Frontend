import bookData from "@/data/book-shop-data";
import ShopDetailsArea from "../_components/shop-details-area";
import RelatedProducts from "../_components/related-products";
import { PageParamsProps } from "@/types/custom-d-t";

export async function generateMetadata(props: PageParamsProps) {
   const resolvedParams = await props.params;
   const { id } = resolvedParams;
   const bookItem = bookData.find((item) => item.id == id);
   return {
      title: bookItem?.title ? `${bookItem.title} - Acadia` : "Shop Details - Acadia",
   };
}

export default async function ShopDetailsPage(props: PageParamsProps) {
   const resolvedParams = await props.params;
   const { id } = resolvedParams;
   const bookItem = bookData.find((item) => item.id == id);
   
   return (
      <main>
         {bookItem ? (
            <>
               {/* shop details area start */}
               <ShopDetailsArea product={bookItem} />
               {/* shop details area end */}

               {/* related products */}
               <RelatedProducts />
               {/* related products */}
            </>
         ) : (
            <div className="text-center mt-100 mb-80">
               No Book found with id: {id}
            </div>
         )}
      </main>
   );
}
