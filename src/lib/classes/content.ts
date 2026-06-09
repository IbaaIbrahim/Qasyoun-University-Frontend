import { ContentMeta, ContentMetaDto } from "./content-meta";
import Slider from "./slider";
import News from "./news";
import Exhibition from "./exhibition";
import SocialMedia from "./social-media";
import About from "./home/about";
import Statistics from "./home/statistics";
import IEvent from "./home/event";
import Review from "./home/review";
import MainText from "./faculty/main-text";
import Gallery from "./faculty/gallery";
import Timeline from "./faculty/timeline";
import StaticPage from "./static-page";
import Album from "./album";
import Photo from "./photo";
import BreadcrumbPage from "./breadcrumb-page";
import TourVideo from "./home/tour";

export type ContentDto = {
  id: number | string;
  referenceId: number | string;
  referenceType: string;
  section: string;
  /** Present on many CMS rows; optional in UI when copy comes only from `ContentMeta`. */
  title?: string | null;
  displayOrder: number | string;
  isActive: boolean;
  contentMetas?: ContentMetaDto[];
  createdAt?: string;
  updatedAt?: string;
};

export class Content {
  constructor(
    public readonly id: number,
    public readonly referenceId: number,
    public readonly referenceType: string,
    public readonly section: string,
    public readonly title: string | null,
    public readonly displayOrder: number,
    public readonly isActive: boolean,
    public readonly contentMetas?: ContentMeta[],
    public readonly createdAt?: string,
    public readonly updatedAt?: string,
  ) { }

  static fromDto(dto: ContentDto): Content {
    return new Content(
      Number(dto.id),
      Number(dto.referenceId),
      dto.referenceType ?? "",
      dto.section ?? "",
      dto.title ?? null,
      Number(dto.displayOrder),
      Boolean(dto.isActive),
      dto.contentMetas?.map((meta) => ContentMeta.fromDto(meta)),
      dto.createdAt,
      dto.updatedAt,
    );
  }

  toPlain(): ContentDto {
    return {
      id: this.id,
      referenceId: this.referenceId,
      referenceType: this.referenceType,
      section: this.section,
      title: this.title,
      displayOrder: this.displayOrder,
      isActive: this.isActive,
      contentMetas: this.contentMetas?.map((meta) => meta.toPlain()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}


export type ContentMetaJson = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}


export class ContentJson extends Content {
  contentMetasJson?: ContentMetaJson
  constructor(content: Content, locale: string) {
    super(content.id, content.referenceId, content.referenceType, content.section, content.title, content.displayOrder, content.isActive, content.contentMetas, content.createdAt, content.updatedAt)
    this.contentMetasJson = content.contentMetas?.reduce((acc, meta) => {
      // console.log(meta);
      if (meta.type === "image" || meta.type === "file" || meta.type === "video") {
        acc[meta.keyName] = locale === "ar" ? (meta.filemanagerAr?.url || meta.filemanager?.url) : (meta.filemanager?.url || meta.filemanagerAr?.url);
      } else {
        acc[meta.keyName] = locale === "ar" ? (meta.valueAr || meta.value) : (meta.value || meta.valueAr);
      }
      acc[`${meta.keyName}--id`] = String(meta.id);
      return acc;
    }, {} as ContentMetaJson);
  }

  toSlider(): Slider {
    if (!this.contentMetasJson) return {};
    const slider = Slider.fromContentJson(this);
    return slider ? slider : {};
  }

  toNews(): News {
    if (!this.contentMetasJson) return {};
    const item = News.fromContentJson(this);
    return item ? item : {};
  }

  toExhibition(): Exhibition {
    if (!this.contentMetasJson) return {};
    const item = Exhibition.fromContentJson(this);
    return item ? item : {};
  }

  toSocialMedia(): SocialMedia {
    if (!this.contentMetasJson) return {};
    const item = SocialMedia.fromContentJson(this);
    return item ? item : {};
  }

  toMainText(): MainText {
    if (!this.contentMetasJson) return {};
    const mainText = MainText.fromContentJson(this);
    return mainText ? mainText : {};
  }

  toAbout(): About {
    if (!this.contentMetasJson) return {};
    const about = About.fromContentJson(this);
    return about ? about : {};
  }

  toStatistics(): Statistics {
    if (!this.contentMetasJson) return {};
    const statistics = Statistics.fromContentJson(this);
    return statistics ? statistics : {};
  }

  toEvent(): IEvent {
    if (!this.contentMetasJson) return {};
    const event = IEvent.fromContentJson(this);
    return event ? event : {};
  }

  toReview(): Review {
    if (!this.contentMetasJson) return {};
    const review = Review.fromContentJson(this);
    return review ? review : {};
  }

  toTourVideo(): TourVideo {
    if (!this.contentMetasJson) return {};
    const tourVideo = TourVideo.fromContentJson(this);
    return tourVideo ? tourVideo : {};
  }

  toGallery(): Gallery {
    if (!this.contentMetasJson) return {};
    const gallery = Gallery.fromContentJson(this);
    return gallery ? gallery : {};
  }

  toTimeline(): Timeline {
    if (!this.contentMetasJson) return {};
    const timeline = Timeline.fromContentJson(this);
    return timeline ? timeline : {};
  }

  toStaticPage(): StaticPage {
    if (!this.contentMetasJson) return {};
    const page = StaticPage.fromContentJson(this);
    return page ? page : {};
  }

  toAlbum(): Album | null {
    if (!this.contentMetasJson) return null;
    return Album.fromContentJson(this);
  }

  toPhoto(): Photo | null {
    if (!this.contentMetasJson) return null;
    return Photo.fromContentJson(this);
  }

  toBreadcrumbPage(): BreadcrumbPage | null {
    if (!this.contentMetasJson) return null;
    return BreadcrumbPage.fromContentJson(this);
  }
}
