import Image from "next/image";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { resolveUploadSrc } from "@/lib/api/client";
import type { ContentMetaJson } from "@/lib/classes/content";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

type PageNavKey = "universityDirectorates" | "higherEducationDecisions";

type Props = {
  locale: string;
  cmsTitle: string | null;
  meta: ContentMetaJson | undefined;
  pageNavKey: PageNavKey;
};

/**
 * Fixed URL pages under `site_pages` (e.g. /directorates, /decisions) with footer-aligned labels.
 */
export default async function CmsSiteSectionPage({
  locale,
  cmsTitle,
  meta,
  pageNavKey,
}: Props) {
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const tFooter = await getTranslations({ locale, namespace: "Footer" });
  const tStatic = await getTranslations({ locale, namespace: "StaticPage" });

  const pageLabel =
    cmsTitle?.trim() || tNav(pageNavKey as never) || tStatic("untitled");
  const breadcrumbTrail = tFooter("quickLinks");

  const body =
    typeof meta?.body === "string" && meta.body.trim().length > 0
      ? meta.body
      : "";
  const heroRaw =
    typeof meta?.hero_image === "string" && meta.hero_image.length > 0
      ? meta.hero_image
      : "";
  const heroSrc = resolveUploadSrc(heroRaw, "");
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo title={pageLabel} subtitle={breadcrumbTrail} bgImg={breadcrumbContent?.universityDirectoratesBreadcrumbImage} />

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

              <div className="tp-postbox-wrapper mb-80 wow fadeInUp">
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
                  ) : (
                    <p className="text-muted mb-0">{tStatic("empty")}</p>
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
