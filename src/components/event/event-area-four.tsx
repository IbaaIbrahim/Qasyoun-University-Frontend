"use client";
import Image from "next/image";
import { event_data } from "@/data/event-data";
import {LocationTwo, RightArrowSeven } from "../svg";
import usePagination from "@/hooks/use-pagination";
import Pagination from "../ui/pagination";
import user_img from "@/assets/img/event/event/event-user.png";
import Link from "next/link";

export default function EventAreaFour() {
  const { currentItems, handlePageClick, pageCount } = usePagination(
    event_data,
    6
  );
  return (
    <section className="tp-event-inner-area tp-event-inner-p pt-100 pb-100">
      <div className="container">
        <div className="row">
          {currentItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="tp-event-inner-item mb-30">
                <div className="tp-event-inner-thumb">
                  <Link href={`/event-details/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={384}
                      height={240}
                      style={{ height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="tp-event-inner-content">
                  <span className="tp-event-inner-date">
                    {item.date.day} {item.date.month}, {item.date.year}
                  </span>
                  <h4 className="tp-event-inner-title">
                    <Link href={`/event-details/${item.id}`}>{item.title}</Link>
                  </h4>
                  <span className="tp-event-inner-location">
                    <LocationTwo /> United States
                  </span>
                  <div className="tp-event-inner-btn-box d-flex align-items-center justify-content-between">
                    <div className="tp-event-inner-user">
                      <Image src={user_img} alt="user-img" />
                    </div>
                    <div className="tp-event-inner-btn">
                      <Link href={`/event-details/${item.id}`}>
                        Get Ticket{" "}
                        <span>
                          <RightArrowSeven />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-event-inner-pagination">
              <div className="tp-dashboard-pagination pt-20">
                <div className="tp-pagination">
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
  );
}
