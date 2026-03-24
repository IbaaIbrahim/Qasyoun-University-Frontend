import { formatPrice } from "@/lib/format-price";
import { discountPrice } from "@/utils";

type IProps = {
    discount: number;
    price: number;
}

export default function CoursePrice({ discount, price }: IProps) {
    return (
        discount > 0 ? (
            <>
                <del>{formatPrice(price, true)}</del>
                <span>{" "}{formatPrice(discountPrice(price, discount), true)}</span>
            </>
        ) : (
            <span>{formatPrice(price, true)}</span>
        )
    )
}
