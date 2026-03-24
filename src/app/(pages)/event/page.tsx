import { Metadata } from "next";
import BreadcrumbOne from "@/components/breadcrumb/breadcrumb-one";
import EventAreaFour from "@/components/event/event-area-four";

export const metadata: Metadata = {
  title: "Event - Acadia",
};

export default function EventPage() {
  return (
    <main>
      {/* breadcrumb area start */}
      <BreadcrumbOne
        title="Upcoming Events"
        subtitle="Upcoming Events"
        color="color"
        pages={true}
      />
      {/* breadcrumb area end */}

      {/* event area start */}
      <EventAreaFour/>
      {/* event area end */}
    </main>
  );
}
