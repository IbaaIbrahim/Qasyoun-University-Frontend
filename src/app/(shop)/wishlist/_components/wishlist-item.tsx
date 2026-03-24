import Link from "next/link";
import Image from "next/image";
import { CloseSvg } from "@/components/svg";
import { formatPrice } from "@/lib/format-price";
import { ICart } from "@/types/cart-type";

type IProps = {
   item: ICart
}

export default function WishlistItem({ item }: IProps) {
   return (
      <tr>
         <td className="tp-cart-img">
            <Link href={`/shop-details/${item.id}`}>
               <Image src={item.img} alt={item.title} width={78} height={100} />
            </Link>
         </td>

         <td className="tp-cart-title">
            <Link href={`/shop-details/${item.id}`}>{item.title}</Link>
         </td>

         <td className="tp-cart-price"><span>{formatPrice(item.price, true)}</span></td>

         <td className="tp-cart-add-to-cart">
            <button type="submit" className="tp-btn">Add To Cart</button>
         </td>

         <td className="tp-cart-action">
            <button className="tp-cart-action-btn">
               <CloseSvg clr="currentColor" />
               <span>{" "}Remove</span>
            </button>
         </td>
      </tr>
   )
}
