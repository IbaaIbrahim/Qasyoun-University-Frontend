
type Props = {
    options: { id: string; label: string; price: number }[];
    selectedOption: string;
    onOptionChange: (option: string) => void;
};

export default function ShippingOptions({ options, selectedOption, onOptionChange }: Props) {

    return (
        <li className="tp-order-info-list-shipping">
            <span>Shipping</span>
            <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                {options.map(option => (
                    <span key={option.id}>
                        <input
                            id={option.id}
                            type="radio"
                            name="shipping"
                            value={option.id}
                            checked={selectedOption === option.id}
                            onChange={() => onOptionChange(option.id)}
                        />
                        <label htmlFor={option.id}>
                            {option.label}: <span>${option.price.toFixed(2)}</span>
                        </label>
                    </span>
                ))}
            </div>
        </li>
    )
}
