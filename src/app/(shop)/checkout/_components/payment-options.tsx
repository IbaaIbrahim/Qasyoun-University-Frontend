
type IProps = {
   options: { id: string; label: string; description: string }[];
   selectedOption: string;
   onOptionChange: (optionId: string) => void;
}
export default function PaymentOptions({ options, selectedOption, onOptionChange }: IProps) {

   return (
      <div className="tp-checkout-payment">
         {options.map(option => (
            <div key={option.id} className="tp-checkout-payment-item">
               <input
                  type="radio"
                  id={option.id}
                  name="payment"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => onOptionChange(option.id)}
               />
               <label htmlFor={option.id}>
                  {option.label}
               </label>
               {selectedOption === option.id && (
                  <div className="tp-checkout-payment-desc">
                     <p>{option.description}</p>
                  </div>
               )}
            </div>
         ))}
      </div>
   );
}
