import React from "react";
import InputRange from "@/components/ui/input-range";
import bookData from "@/data/book-shop-data";

const maxPrice = bookData.reduce((max, book) => Math.max(max, book.price), 0);

export default function PriceFilter() {
  const [priceValue, setPriceValue] = React.useState<number[]>([0, maxPrice]);
  function handleChanges(values: number[]) {
    setPriceValue(values);
  }

  //   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //     e.preventDefault();
  //   }

  return (
    <div className="tp-shop-widget-content">
      <div className="tp-shop-widget-filter">
        <div id="slider-range" className="mb-10">
          <InputRange
            STEP={1}
            MIN={0}
            MAX={maxPrice}
            values={priceValue}
            handleChanges={handleChanges}
          />
        </div>
        <div className="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
           <span className="input-range">
              ${priceValue[0]} - ${priceValue[1]}
            </span>
          <button className="tp-shop-widget-filter-btn" type="button">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
