import Image from "next/image";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { resolveUploadSrc } from "@/lib/api/client";
import type { StaticPageFolder } from "@/lib/static-pages/config";
import {
  getNavKeyForSection,
  getParentNavKey,
  getSectionConfig,
} from "@/lib/static-pages/config";
import { ReferenceTypes } from "@/lib/constants";
import StaticPage from "@/lib/classes/static-page";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

type Props = {
  folder: StaticPageFolder;
  slug: string;
  locale: string;
  cmsTitle: string | null;
  pageData: StaticPage | undefined;
};

export default async function CmsStaticPage({
  folder,
  slug,
  locale,
  cmsTitle,
  pageData,
}: Props) {
  const cfg = getSectionConfig(folder, slug);
  const sectionValue = cfg?.sectionValue ?? "";
  const navKey = sectionValue
    ? getNavKeyForSection(folder, sectionValue)
    : undefined;
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const tStatic = await getTranslations({ locale, namespace: "StaticPage" });
  const tQpu = await getTranslations({ locale, namespace: "qpu" });

  const pageLabel =
    cmsTitle?.trim() ||
    (navKey ? tNav(navKey as never) : "") ||
    tStatic("untitled");

  const parentKey = getParentNavKey(folder);
  const subtitle = tNav(parentKey);

  const body = pageData?.body || "";
  const heroRaw = pageData?.heroImage || "";
  const heroSrc = resolveUploadSrc(heroRaw, "");

  // --- Dynamic Table Logic (Pre-processed) ---
  const tableData = pageData?.table || [];

  // Resolve column configuration from ReferenceTypes
  const referenceKey = cfg?.referenceKey;
  const sectionConfig =
    referenceKey && sectionValue
      ? (ReferenceTypes[referenceKey].sections as Record<string, unknown>)?.[
      sectionValue
      ] as { keys?: { table?: { columns?: Record<string, { name: string }> } } }
      : null;
  const tableColumns = sectionConfig?.keys?.table?.columns || {};
  const columnKeys = Object.keys(tableColumns);

  // --- PDF File Logic (Pre-processed) ---
  const pdfHref = pageData?.file ? resolveUploadSrc(pageData.file, "") : "";

  const breadcrumbContent = await getBreadcrumbPageContent(locale);
  let bgImg: string | undefined = undefined;
  if (folder === "about") {
    bgImg = breadcrumbContent?.aboutBreadcrumbImage;
  } else if (folder === "admission") {
    bgImg = breadcrumbContent?.admissionBreadcrumbImage;
  } else if (folder === "student-life") {
    bgImg = breadcrumbContent?.studentLifeBreadcrumbImage;
  }

  return (
    <main>
      <BreadcrumbTwo title={pageLabel} subtitle={subtitle} bgImg={bgImg} />

      <section className="tp-blog-details-p p-relative pt-60 pb-120 bg-light-soft">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="tp-blog-details-wrap mb-40 wow fadeInUp">
                <h3
                  className="tp-blog-details-title"
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 800,
                    color: "#1c2b36",
                    letterSpacing: "-0.5px",
                    marginBottom: "20px",
                  }}
                >
                  {pageLabel}
                </h3>
                <div
                  className="title-line"
                  style={{
                    width: "80px",
                    height: "4px",
                    backgroundColor: "#42023e",
                    borderRadius: "2px",
                  }}
                />
              </div>

              <div className="tp-postbox-wrapper mb-40 wow fadeInUp">
                <div
                  className="tp-postbox-details-text shadow-sm bg-white p-4 p-md-5"
                  style={{
                    borderRadius: "20px",
                    fontSize: "1.15rem",
                    lineHeight: "1.9",
                    color: "#444",
                    border: "1px solid rgba(0,0,0,0.03)",
                  }}
                >
                  {body ? (
                    <div
                      className="cms-static-page-body"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  ) : !tableData.length && !pdfHref ? (
                    <p className="text-muted mb-0">{tStatic("empty")}</p>
                  ) : null}

                  {/* Render Table if exists */}
                  {tableData.length > 0 && columnKeys.length > 0 && (
                    <div className="mt-40">
                      <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                          <thead
                            style={{
                              backgroundColor: "#42023e",
                              color: "#fff",
                            }}
                          >
                            <tr>
                              <th
                                scope="col"
                                style={{
                                  width: "60px",
                                  backgroundColor: "inherit",
                                  color: "inherit",
                                }}
                              >
                                #
                              </th>
                              {columnKeys.map((key) => {
                                const colCfg = tableColumns[key];
                                // The colCfg.name is a full key like "qpu.dynamicContent.name"
                                // next-intl handles nested keys if passed correctly.
                                // If the key starts with "qpu.", we can try to translate it from the root or slice it.
                                let label = key;
                                try {
                                  const translateKey = colCfg.name.replace(
                                    "qpu.",
                                    "",
                                  );
                                  label = tQpu(translateKey as never);
                                } catch {
                                  label = colCfg.name;
                                }

                                return (
                                  <th
                                    key={key}
                                    scope="col"
                                    style={{
                                      backgroundColor: "inherit",
                                      color: "inherit",
                                    }}
                                  >
                                    {label}
                                  </th>
                                );
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((row, idx) => (
                              <tr key={idx}>
                                <td className="text-muted fw-bold">
                                  {idx + 1}
                                </td>
                                {columnKeys.map((key) => (
                                  <td key={key}>{row[key] || "—"}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* PDF Download Button */}
                  {pdfHref && (
                    <div className="mt-40 text-center text-md-start">
                      <a
                        href={pdfHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tp-btn"
                        style={{
                          backgroundColor: "#42023e",
                          color: "#fff",
                          padding: "12px 25px",
                          borderRadius: "10px",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "1rem",
                        }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        {tStatic("downloadPdf")}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {heroSrc ? (
                <div className="tp-blog-details-thumb mb-50 text-center wow fadeInUp">
                  <Image
                    src={heroSrc}
                    alt=""
                    width={1200}
                    height={600}
                    className="img-fluid"
                    style={{
                      height: "auto",
                      borderRadius: "16px",
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                    priority
                    unoptimized
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
