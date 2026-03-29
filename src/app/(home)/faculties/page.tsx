import { Metadata } from "next";

export const dynamic = "force-dynamic";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import FacultyCard from "@/components/reusable/faculty-card";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";

export const metadata: Metadata = {
  title: "Faculties - Qasyoun Private University",
};

export default async function FacultiesIndexPage() {
  const faculties = await listFacultiesForPublic();

  return (
    <main>
      <BreadcrumbTwo title="Faculties" subtitle="Faculties" />
      <section className="pt-60 pb-90">
        <div className="container">
          <div className="row g-4">
            {faculties.map((f) => (
              <div key={f.id} className="col-md-6 col-lg-4">
                <FacultyCard faculty={f} />
              </div>
            ))}
          </div>
          {faculties.length === 0 && (
            <p className="text-center text-muted">No faculties to show yet.</p>
          )}
        </div>
      </section>
    </main>
  );
}
