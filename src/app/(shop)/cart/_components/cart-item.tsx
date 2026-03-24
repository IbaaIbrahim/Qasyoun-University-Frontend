'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CloseSvg, MinusTwoSvg, PlusFourSvg } from "@/components/svg";
import { formatPrice } from "@/lib/format-price";
import { ICart } from "@/types/cart-type";

type IProps = {
    item:ICart
}
export default function CartItem({item}:IProps) {
    const [count, setCount] = useState(1);
    function handleCount() {
        if(count > 1) {
        setCount(count - 1);
        } else {
        setCount(1);
        }
    }
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
            <td className="tp-cart-price"><span>{formatPrice(item.price,true)}</span></td>
            <td className="tp-cart-quantity">
                <div className="tp-product-quantity cart mt-10 mb-10">
                    <span onClick={handleCount} className="tp-cart-minus">
                        <MinusTwoSvg />
                    </span>
                    <input className="tp-cart-input" type="text" value={count} readOnly={true} />
                    <span onClick={() => setCount(count + 1)} className="tp-cart-plus">
                        <PlusFourSvg />
                    </span>
                </div>
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
