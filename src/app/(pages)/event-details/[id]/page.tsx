import { all_events } from "@/data/event-data";
import EventBreadcrumb from "../_components/event-breadcrumb";
import EventDetailsArea from "../_components/event-details-area";
import { PageParamsProps } from "@/types/custom-d-t";

export async function generateMetadata(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;
  const event = all_events.find((item) => item.id == id);
  return {
    title: event?.title
  };
}

export default async function EventDetailsPage(props: PageParamsProps) {
  const resolvedParams = await props.params;
  const { id } = resolvedParams;
  const event = all_events.find((item) => item.id == id);
  return (
    <main>
      {event ? (
        <>
          {/* breadcrumb area start */}
          <EventBreadcrumb event={event} />
          {/* breadcrumb area end */}

          {/* event details area start */}
          <EventDetailsArea event={event} />
          {/* event details area end */}
        </>
      ) : (
        <div className="text-center mt-100 mb-80">
          No Event found with id: {id}
        </div>
      )}
    </main>
  );
}
