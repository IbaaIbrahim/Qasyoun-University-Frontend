import { ReferenceTypes } from "@/lib/constants";
import { readContentAsJsonByFilter } from "./content.service";
import Album from "../classes/album";
import Photo from "../classes/photo";

/**
 * Fetches all active albums.
 */
export async function getAllAlbums(locale: string): Promise<Album[]> {
  const albumItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.albums.value,
      section: ReferenceTypes.albums.sections.album.value,
    },
    locale
  );

  return albumItems
    .filter((item) => item.isActive)
    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder))
    .map((item) => item.toAlbum())
    .filter((album): album is Album => album !== null);
}

/**
 * Fetches all active photos for a given album ID.
 */
export async function getPhotosByAlbumId(albumId: number, locale: string): Promise<Photo[]> {
  const photoItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.photos_gallery.value,
      referenceId: String(albumId),
      section: ReferenceTypes.photos_gallery.sections.images.value,
    },
    locale
  );

  return photoItems
    .filter((item) => item.isActive)
    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder))
    .map((item) => item.toPhoto())
    .filter((photo): photo is Photo => photo !== null);
}

/**
 * Fetches all active photos across all albums.
 */
export async function getAllGalleryPhotos(locale: string): Promise<Photo[]> {
  const photoItems = await readContentAsJsonByFilter(
    {
      referenceType: ReferenceTypes.photos_gallery.value,
      section: ReferenceTypes.photos_gallery.sections.images.value,
    },
    locale
  );

  return photoItems
    .filter((item) => item.isActive)
    .sort((a, b) => Number(a.displayOrder) - Number(b.displayOrder))
    .map((item) => item.toPhoto())
    .filter((photo): photo is Photo => photo !== null);
}
