import Image from "next/image";
import { getTranslations } from "next-intl/server";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { resolveUploadSrc } from "@/lib/api/client";
import type { ContentMetaJson } from "@/lib/classes/content";
import type { StaticPageFolder } from "@/lib/static-pages/config";
import {
  getNavKeyForSection,
  getParentNavKey,
  getSectionConfig,
} from "@/lib/static-pages/config";

type Props = {
  folder: StaticPageFolder;
  slug: string;
  locale: string;
  cmsTitle: string | null;
  meta: ContentMetaJson | undefined;
};

export default async function CmsStaticPage({
  folder,
  slug,
  locale,
  cmsTitle,
  meta,
}: Props) {
  const cfg = getSectionConfig(folder, slug);
  const sectionValue = cfg?.sectionValue ?? "";
  const navKey = sectionValue
    ? getNavKeyForSection(folder, sectionValue)
    : undefined;
  const tNav = await getTranslations({ locale, namespace: "Nav" });
  const tStatic = await getTranslations({ locale, namespace: "StaticPage" });

  const pageLabel =
    cmsTitle?.trim() ||
    (navKey ? tNav(navKey as never) : "") ||
    tStatic("untitled");

  const parentKey = getParentNavKey(folder);
  const subtitle = tNav(parentKey);

  const body =
    typeof meta?.body === "string" && meta.body.trim().length > 0
      ? meta.body
      : "";
  const heroRaw =
    typeof meta?.hero_image === "string" && meta.hero_image.length > 0
      ? meta.hero_image
      : "";
  const heroSrc = resolveUploadSrc(heroRaw, "");

  return (
    <main>
      <BreadcrumbTwo title={pageLabel} subtitle={subtitle} />

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
