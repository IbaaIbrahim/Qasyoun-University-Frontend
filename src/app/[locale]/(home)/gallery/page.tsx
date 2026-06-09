import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllAlbums, getAllGalleryPhotos } from "@/lib/services/gallery.service";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import { getBreadcrumbPageContent } from "@/lib/services/breadcrumb-page.service";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  return {
    title: t("galleryTitle") || "Photo Gallery - Qasyoun Private University",
  };
}

export default async function GalleryListPage({ params }: Props) {
  const { locale } = await params;
  const [albums, allPhotos] = await Promise.all([
    getAllAlbums(locale),
    getAllGalleryPhotos(locale),
  ]);

  const t = await getTranslations({ locale, namespace: "Gallery" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  // Map albums to their cover images (first photo in that album)
  const albumsWithCovers = albums.map((album) => {
    const coverPhoto = allPhotos.find((p) => Number(p.albumId) === Number(album.id));
    return {
      ...album,
      coverUrl: coverPhoto ? coverPhoto.imageUrl : null,
    };
  });
  const breadcrumbContent = await getBreadcrumbPageContent(locale);

  return (
    <main>
      <BreadcrumbTwo
        title={t("title")}
        subtitle={tNav("gallery")}
        bgImg={breadcrumbContent?.galleryBreadcrumbImage}
      />

      <section className="tp-gallery-list-area pt-120 pb-120 bg-light">
        <div className="container">
          {albumsWithCovers.length > 0 ? (
            <div className="row">
              {albumsWithCovers.map((album) => (
                <div key={album.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-40">
                  <Link href={`/gallery/${album.id}`}>
                    <div
                      className="tp-gallery-album-card p-relative overflow-hidden cursor-pointer"
                      style={{
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                        background: "#fff",
                        transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                        height: "380px",
                        display: "flex",
                        flexDirection: "column"
                      }}
                    >
                      {/* Cover Image Container */}
                      <div
                        className="tp-gallery-album-img-wrap p-relative overflow-hidden"
                        style={{
                          flex: "1",
                          width: "100%",
                          background: "#e9ecef"
                        }}
                      >
                        {album.coverUrl ? (
                          <Image
                            src={album.coverUrl}
                            alt={album.name}
                            fill
                            style={{
                              objectFit: "cover",
                              transition: "transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
                            }}
                            className="album-card-img"
                            unoptimized
                          />
                        ) : (
                          <div
                            className="w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{ background: "#42023e", opacity: 0.15 }}
                          >
                            <i className="fa-regular fa-image" style={{ fontSize: "40px", color: "#42023e" }}></i>
                          </div>
                        )}
                        <div
                          className="album-hover-overlay"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: "linear-gradient(to top, rgba(66, 2, 62, 0.6), transparent)",
                            opacity: 0,
                            transition: "opacity 0.4s ease"
                          }}
                        />
                      </div>

                      {/* Info Bar */}
                      <div
                        className="tp-gallery-album-info p-25"
                        style={{
                          background: "#f8f9fa",
                          borderTop: "1px solid #f1f3f5",
                          transition: "all 0.4s ease"
                        }}
                      >
                        <h4
                          className="album-card-title m-0 text-truncate-2 text-center"
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#333",
                            lineHeight: "1.4",
                            transition: "color 0.3s ease"
                          }}
                        >
                          {album.name}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <div
                className="d-inline-flex align-items-center justify-content-center mb-20"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(66, 2, 62, 0.08)",
                  color: "#42023e"
                }}
              >
                <i className="fa-regular fa-images" style={{ fontSize: "32px" }}></i>
              </div>
              <p style={{ color: "#6c757d", fontSize: "16px" }}>{t("albumsEmpty")}</p>
            </div>
          )}
        </div>
      </section>

      {/* Styled JSX or CSS style injection for hover effects */}
      <style>{`
        .tp-gallery-album-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(66, 2, 62, 0.15) !important;
        }
        .tp-gallery-album-card:hover .album-card-img {
          transform: scale(1.08);
        }
        .tp-gallery-album-card:hover .album-hover-overlay {
          opacity: 1;
        }
        .tp-gallery-album-card:hover .tp-gallery-album-info {
          background: #42023e !important;
          border-top-color: #42023e !important;
        }
        .tp-gallery-album-card:hover .album-card-title {
          color: #fff !important;
        }
      `}</style>
    </main>
  );
}
