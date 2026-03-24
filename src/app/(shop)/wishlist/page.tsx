import { Metadata } from "next";
import WishlistArea from "./_components/wishlist-area";


export const metadata: Metadata = {
    title: "Wishlist - Acadia",
}

export default function WishlistPage() {
    return (
        <main>
            {/* wishlist area start */}
            <WishlistArea/>
            {/* wishlist area end */}
        </main>
    )
}
