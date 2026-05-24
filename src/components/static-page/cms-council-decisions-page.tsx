import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { resolveUploadSrc } from "@/lib/api/client";
import type { LoadedSitePageItem } from "@/lib/services/static-page.service";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

type Props = {
  locale: string;
  items: LoadedSitePageItem[];
};

/** Compact PDF document icon for the details column (matches familiar reader styling). */
function PdfDocIcon() {
  return (
    <svg
      width="40"
      height="44"
      viewBox="0 0 48 52"
      aria-hidden="true"
      className="d-block mx-auto"
    >
      <path
        fill="#e5252a"
        d="M8 4h22l12 12v32a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z"
      />
      <path fill="#fff" d="M30 4v12h12L30 4z" opacity=".35" />
      <rect x="12" y="22" width="24" height="3" rx="1" fill="#fff" />
      <rect x="12" y="29" width="18" height="3" rx="1" fill="#fff" opacity=".85" />
      <rect x="12" y="36" width="20" height="3" rx="1" fill="#fff" opacity=".65" />
      <text
        x="24"
        y="46"
        textAnchor="middle"
        fill="#fff"
        fontSize="9"
        fontWeight="700"
        fontFamily="system-ui,sans-serif"
      >
        PDF
      </text>
    </svg>
  );
}

/**
 * Council decisions: legacy-style table (# · decision text · PDF) inside one white card.
 * Each CMS row: optional Content title, optional `body` richtext, `pdf_file` for the document link.
 */
export default async function CmsCouncilDecisionsPage({ locale, items }: Props) {
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const tFooter = await getTranslations({ locale, namespace: "Footer" });
  const tStatic = await getTranslations({ locale, namespace: "StaticPage" });

  const pageLabel = tNav("higherEducationDecisions");
  const breadcrumbTrail = tFooter("quickLinks");

  const cardStyle: React.CSSProperties = {
    borderRadius: "20px",
    fontSize: "1.1rem",
    lineHeight: 1.9,
    color: "#444",
    border: "1px solid rgba(0,0,0,0.03)",
  };

  const theadStyle: React.CSSProperties = {
    backgroundColor: "#42023e",
    color: "#fff",
    verticalAlign: "middle",
  };
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo title={pageLabel} subtitle={breadcrumbTrail} bgImg={breadcrumbContent?.higherEducationDecisionsBreadcrumbImage} />

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

              {items.length === 0 ? (
                <p className="text-muted">{tStatic("empty")}</p>
              ) : (
                <div
                  className="tp-postbox-details-text shadow-sm bg-white p-4 p-md-5"
                  style={cardStyle}
                >
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr>
                          <th
                            scope="col"
                            style={{
                              ...theadStyle,
                              width: "3.5rem",
                              borderBottom: "none",
                            }}
                          >
                            #
                          </th>
                          <th
                            scope="col"
                            style={{ ...theadStyle, borderBottom: "none" }}
                          >
                            {tStatic("decisionsColumnList")}
                          </th>
                          <th
                            scope="col"
                            className="text-center"
                            style={{
                              ...theadStyle,
                              width: "8rem",
                              borderBottom: "none",
                            }}
                          >
                            {tStatic("decisionsColumnDetails")}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => {
                          const body =
                            typeof item.meta?.body === "string" &&
                              item.meta.body.trim().length > 0
                              ? item.meta.body
                              : "";
                          const pdfRaw =
                            typeof item.meta?.pdf_file === "string" &&
                              item.meta.pdf_file.length > 0
                              ? item.meta.pdf_file
                              : "";
                          const pdfHref = resolveUploadSrc(pdfRaw, "");
                          const itemTitle = item.cmsTitle?.trim();
                          const hasBody = Boolean(body);
                          const hasPdf = Boolean(pdfHref);

                          return (
                            <tr key={item.contentId}>
                              <td
                                className="text-muted fw-semibold"
                                style={{ verticalAlign: "top" }}
                              >
                                {index + 1}
                              </td>
                              <td style={{ verticalAlign: "top" }}>
                                {itemTitle ? (
                                  <div
                                    className="fw-bold mb-2"
                                    style={{ color: "#1c2b36" }}
                                  >
                                    {itemTitle}
                                  </div>
                                ) : null}
                                {hasBody ? (
                                  <div
                                    className="cms-static-page-body mb-0"
                                    dangerouslySetInnerHTML={{ __html: body }}
                                  />
                                ) : null}
                                {!itemTitle && !hasBody ? (
                                  <span className="text-muted">
                                    {tStatic("empty")}
                                  </span>
                                ) : null}
                              </td>
                              <td
                                className="text-center"
                                style={{ verticalAlign: "middle" }}
                              >
                                {hasPdf ? (
                                  <a
                                    href={pdfHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-inline-block p-1"
                                    title={tStatic("openPdf")}
                                    aria-label={tStatic("openPdf")}
                                  >
                                    <PdfDocIcon />
                                  </a>
                                ) : (
                                  <span className="text-muted">
                                    {tStatic("decisionsNoPdf")}
                                  </span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
