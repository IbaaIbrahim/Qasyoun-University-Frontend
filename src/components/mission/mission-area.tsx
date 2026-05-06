import Image from "next/image";
import mission_main_img from '@/assets/img/our-mission/thumb-1.png';
import mission_thumb_1 from "@/assets/img/our-mission/mission-item-1.jpg";
import mission_thumb_2 from "@/assets/img/our-mission/mission-item-2.jpg";
import mission_thumb_3 from "@/assets/img/our-mission/mission-item-3.jpg";
import { RightArrowTwo } from "../svg";
import type { LabDto } from "@/lib/classes/lab";
import { Link } from "@/i18n/navigation";

/** HTML void / self-closing elements (no closing tag on stack). */
const VOID_HTML_TAGS = new Set([
  "area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
  "param", "source", "track", "wbr",
]);

/**
 * Keeps first `maxTextChars` of visible text; copies tags verbatim.
 * On truncate, closes still-open tags in stack order and appends "...".
 * HTML entities count as one character each.
 */
function truncateHtmlPreserveTags(html: string, maxTextChars: number): string {
  let i = 0;
  let textCount = 0;
  let out = "";
  const stack: string[] = [];
  let hitLimit = false;

  const closeOpenTags = () => {
    while (stack.length > 0) {
      out += `</${stack.pop()}>`;
    }
  };

  while (i < html.length) {
    if (textCount >= maxTextChars) {
      hitLimit = i < html.length;
      break;
    }

    const ch = html[i];
    if (ch !== "<") {
      if (ch === "&") {
        const semi = html.indexOf(";", i);
        if (semi !== -1 && semi - i <= 24) {
          out += html.slice(i, semi + 1);
          textCount += 1;
          i = semi + 1;
          continue;
        }
      }
      out += ch;
      textCount += 1;
      i += 1;
      continue;
    }

    if (html.startsWith("<!--", i)) {
      const cEnd = html.indexOf("-->", i + 4);
      if (cEnd === -1) break;
      out += html.slice(i, cEnd + 3);
      i = cEnd + 3;
      continue;
    }

    const end = html.indexOf(">", i);
    if (end === -1) break;
    const raw = html.slice(i, end + 1);
    i = end + 1;

    if (raw.startsWith("<!") || raw.startsWith("<?")) {
      out += raw;
      continue;
    }

    const openMatch = raw.match(/^<\s*(\/?)\s*([a-zA-Z][\w:-]*)/);
    if (!openMatch) {
      out += raw;
      continue;
    }

    const isClose = openMatch[1] === "/";
    const tagName = openMatch[2].toLowerCase();
    const trimmedEnd = raw.trimEnd();
    const selfClosing =
      trimmedEnd.endsWith("/>") || VOID_HTML_TAGS.has(tagName);

    if (isClose) {
      while (stack.length > 0 && stack[stack.length - 1] !== tagName) {
        out += `</${stack.pop()}>`;
      }
      if (stack.length > 0 && stack[stack.length - 1] === tagName) {
        stack.pop();
      }
      out += raw;
      continue;
    }

    out += raw;
    if (!selfClosing) {
      stack.push(tagName);
    }
  }

  closeOpenTags();
  if (hitLimit) {
    out += "...";
  }
  return out;
}

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
                  className={`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${i !== missionData.length - 1 ? "mb-20" : ""
                    }`}
                >
                  <div className="tp-our-mission-item-content" style={{ paddingTop: 10, paddingBottom: 10 }}>
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
