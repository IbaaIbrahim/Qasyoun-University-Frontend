"use client";

import NiceSelect from "@/components/ui/nice-select";

export default function LeadershipSearch() {
  function handleSearch(item: { value: string; label: string }) {
    console.log(item);
  }
  return (
    <form action="#" className="tp-leadership-wrapper d-flex align-items-center justify-content-between">
        <div className="tp-leadership-search p-relative">
          <div className="tp-header-2-search">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="tp-leadership-select">
          <NiceSelect
            options={[
              { value: "", label: "All Departments" },
              { value: "assistant", label: "Athletic Assistant" },
              { value: "principal", label: "Principal" },
              { value: "teacher", label: "Assistant Teacher" },
            ]}
            defaultCurrent={0}
            onChange={(item) => handleSearch(item)}
            name="LeaderShip"
          />
        </div>
        <div className="tp-leadership-btn">
          <button className="tp-btn">Search</button>
        </div>
    </form>
  );
}
