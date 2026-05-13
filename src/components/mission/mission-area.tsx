import Image from "next/image";
import mission_main_img from '@/assets/img/our-mission/thumb-1.png';
import mission_thumb_1 from "@/assets/img/our-mission/mission-item-1.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/mission-item-2.jpg";
import mission_thumb_3 from "@/assets/img/our-mission/mission-item-3.jpg";
import { RightArrowTwo } from "../svg";
import type { LabDto } from "@/lib/classes/lab";
import { Link } from "@/i18n/navigation";
import { truncateHtmlPreserveTags } from "@/utils";

const fallbackMissionData = [
  {
    id: 1,
    title: "Creativity",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_1,
  },
  {
    id: 2,
    title: "Scholarship",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_2,
  },
  {
    id: 3,
    title: "Community",
    description:
      "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
    imgSrc: mission_thumb_3,
  },
];

type Translations = {
  labsTitle: string;
  labsDescription: string;
  labsLearnMore: string;
  missionTitle: string;
  missionDescription: string;
  missionLearnMore: string;
};

type IProps = {
  top_cls?: string;
  labs?: LabDto[];
  locale?: string;
  translations?: Translations;
  facultySlug?: string;
}

const defaultTranslations: Translations = {
  labsTitle: "Laboratories",
  labsDescription: "The faculty has modern laboratories equipped with the latest technologies.",
  labsLearnMore: "Learn More",
  missionTitle: "Mission and values",
  missionDescription: "We prepare you to launch your career by providing a supportive, creative, and professional. Our mission is to prepare students to understand, contribute to, and succeed in a rapidly changing society,",
  missionLearnMore: "Learn More",
};

export default function MissionArea({
  top_cls = 'grey-bg pt-30',
  labs = [],
  locale = 'en',
  translations = defaultTranslations,
  facultySlug
}: IProps) {
  const hasLabs = labs.length > 0;
  const missionData = hasLabs
    ? labs.map((lab) => ({
      id: lab.id,
      title: locale === "ar" && lab.name_AR ? lab.name_AR : lab.name,
      description: locale === "ar" && lab.content_AR ? lab.content_AR : lab.content ?? "",
      imgSrc: lab.picture?.url ? (lab.picture.url.toLowerCase().startsWith("http") ? lab.picture.url : `https://api.v2202503187605326384.powersrv.de${lab.picture.url}`) : mission_thumb_1,
    }))
    : fallbackMissionData;

  const title = hasLabs ? translations.labsTitle : translations.missionTitle;
  const description = hasLabs ? translations.labsDescription : translations.missionDescription;

  return (
    <section id="labs" className={`tp-our-mission-area ${top_cls}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="tp-our-mission-thumb wow fadeInUp"
              data-wow-delay=".3s"
            >
              <Image src={mission_main_img} alt="mission-img" style={{ height: 'auto' }} />
            </div>
          </div>
          <div className="col-lg-8">
            <div
              className="tp-our-mission-wrapper wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="tp-our-mission-heading">
                <h3 className="tp-our-mission-title">{title}</h3>
                <p>{description}</p>
              </div>

              {missionData.map((item, i) => (
                <div
                  key={item.id}
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between gap-3 ${i !== missionData.length - 1 ? "mb-20" : ""
                    }`}
                >
                  <div className="tp-our-mission-item-content" style={{ paddingBlock: 10 }}>
                    <h4 className="tp-our-mission-item-title">{item.title}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: truncateHtmlPreserveTags(item.description, 150),
                      }}
                    />
                    <div className="tp-our-mission-item-btn">
                      <Link className="tp-btn-3" href={`/faculties/${facultySlug}/laboratory/${item.id}`}>
                        {hasLabs ? translations.labsLearnMore : translations.missionLearnMore}{" "}
                        <i>
                          <RightArrowTwo clr="white" />
                        </i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-our-mission-item-thumb">
                    <div className={`tp-our-mission-item-thumb-${item.id}`}>
                      <Image
                        src={item.imgSrc}
                        alt={item.title}
                        style={{ height: "auto" }}
                        width={300}
                        height={200}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
