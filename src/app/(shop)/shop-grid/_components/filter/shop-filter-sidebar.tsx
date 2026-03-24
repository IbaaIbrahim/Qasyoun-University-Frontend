import React from 'react'
import PriceFilter from './price-filter'
import ProductStatus from './product-status'
import FilterCategory from './filter-category'
import FilterAges from './filter-ages'
import FilterAuthor from './filter-author'
import FilterLanguage from './filter-language'

export default function ShopFilterSidebar() {
   return (
      <div className="tp-shop-grid-sidebar mr-10">
         {/* price filter */}
         <div className="tp-shop-widget mb-35">
            <h3 className="tp-shop-widget-title no-border">Price Filter</h3>
            <PriceFilter />
         </div>
         {/* status */}
         <div className="tp-shop-widget mb-50">
            <h3 className="tp-shop-widget-title">Product Status</h3>

            <ProductStatus />
         </div>
         {/* categories */}
         <div className="tp-shop-widget mb-50">
            <h3 className="tp-shop-widget-title">Categories</h3>
            <FilterCategory />
         </div>
         {/* age */}
         <div className="tp-shop-widget mb-50">
            <h3 className="tp-shop-widget-title">Ages</h3>
            <FilterAges />
         </div>
         {/* author */}
         <div className="tp-shop-widget mb-50">
            <h3 className="tp-shop-widget-title">Featured Authors</h3>

            <FilterAuthor />
         </div>
         {/* Language */}
         <div className="tp-shop-widget mb-50">
            <h3 className="tp-shop-widget-title">Language</h3>

            <FilterLanguage />
         </div>
      </div>
   )
}
