import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAllAlbums, getPhotosByAlbumId } from "@/lib/services/gallery.service";
import BreadcrumbTwo from "@/components/breadcrumb/breadcrumb-two";
import AlbumPhotosClient from "./_components/album-photos-client";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, id } = await params;
  const albums = await getAllAlbums(locale);
  const currentAlbum = albums.find((a) => String(a.id) === String(id));
  
  const title = currentAlbum 
    ? `${currentAlbum.name} - Qasyoun Private University` 
    : "Album - Qasyoun Private University";

  return {
    title,
  };
}

export default async function AlbumDetailsPage({ params }: Props) {
  const { locale, id } = await params;
  const albumId = Number(id);

  if (isNaN(albumId)) {
    notFound();
  }

  const [albums, photos] = await Promise.all([
    getAllAlbums(locale),
    getPhotosByAlbumId(albumId, locale),
  ]);

  const currentAlbum = albums.find((a) => Number(a.id) === albumId);

  if (!currentAlbum) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Gallery" });
  const tNav = await getTranslations({ locale, namespace: "Nav" });

  const translations = {
    all: t("all") || "All",
    empty: t("empty") || "No photos in this album.",
    title: t("title") || "Photo Gallery",
    subtitle: tNav("gallery") || "Photo Gallery",
  };

  return (
    <main>
      <BreadcrumbTwo
        title={currentAlbum.name}
        subtitle={tNav("gallery")}
      />

      <section className="tp-gallery-detail-area pt-120 pb-120 bg-light">
        <div className="container">
          <AlbumPhotosClient
            albums={albums}
            currentAlbumId={albumId}
            photos={photos}
            locale={locale}
            translations={translations}
          />
        </div>
      </section>
    </main>
  );
}
