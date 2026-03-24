import { Metadata } from "next";
import ShopGridArea from "./_components/shop-grid-area";

export const metadata: Metadata = {
    title: "Shop Grid - Acadia",
};

export default function ShopPage() {
  return (
    <main>
        {/* shop grid area start */}
        <ShopGridArea/>
        {/* shop grid area end */}
    </main>
  )
}
