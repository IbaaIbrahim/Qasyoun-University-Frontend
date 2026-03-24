'use client';
import { GridSvg, ListSvg } from "@/components/svg";
import ShopFilterSidebar from "./filter/shop-filter-sidebar";
import usePagination from "@/hooks/use-pagination";
import bookData from "@/data/book-shop-data";
import Pagination from "@/components/ui/pagination";
import ShopItem from "@/components/shop/shop-item";
import ShopListItem from "@/components/shop/shop-list-item";
import NiceSelect from "@/components/ui/nice-select";


export default function ShopGridArea() {
   const { currentItems, handlePageClick, pageCount } = usePagination([...bookData], 9);
   function handleSortBy(item: { value: string; label: string }) {
      console.log(item);
    }
   return (
      <section className="tp-shop-grid-area pt-100">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 order-2 order-lg-0">
                  {/* filter sidebar area start */}
                  <ShopFilterSidebar />
                  {/* filter sidebar area end */}
               </div>
               <div className="col-lg-9 order-1 order-lg-1">
                  <div className="row">
                     <div className="col-lg-8">
                        <div className="tp-shop-grid-sidebar-left d-flex align-items-center mb-20">
                           <div className="tp-course-grid-sidebar-tab tp-tab">
                              <ul className="nav nav-tabs" id="filterTab" role="tablist">
                                 <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" tabIndex={0}>
                                       <GridSvg />
                                    </button>
                                 </li>
                                 <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" tabIndex={-1}>
                                       <ListSvg />
                                    </button>
                                 </li>
                              </ul>
                           </div>
                           <div className="tp-course-filter-top-result">
                              <p>Showing 1–{currentItems.length} of {bookData.length} results</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-4">
                        <div className="tp-shop-grid-sidebar-right d-flex justify-content-start justify-content-lg-end mb-20">
                           <div className="tp-course-grid-select tp-course-grid-sidebar-select">
                              <NiceSelect
                                 cls="wide"
                                 options={[
                                    { value: "", label: "Short by" },
                                    { value: "low", label: "Price Low to High" },
                                    { value: "high", label: "Price High to Low" },
                                    { value: "latest", label: "Short by:  Latest" },
                                 ]}
                                 defaultCurrent={0}
                                 onChange={(item) => handleSortBy(item)}
                                 name="ShortBy"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="tab-content" id="myTabContent">
                     <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row">

                           {currentItems.map((book) => (
                              <div key={book.id} className="col-lg-4 col-sm-6">
                                 <ShopItem item={book} />
                              </div>
                           ))}

                        </div>
                     </div>
                     <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row">
                           <div className="col-lg-12">

                              {currentItems.map((book) => (
                                 <ShopListItem key={book.id} item={book} />
                              ))}

                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
            <div className="row">
               <div className="col-lg-12">
                  <div className="tp-event-inner-pagination pb-120">
                     <div className="tp-dashboard-pagination pt-20">
                        <div className="tp-pagination shop">
                           <Pagination
                              handlePageClick={handlePageClick}
                              pageCount={pageCount}
                              isCenter={true}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
