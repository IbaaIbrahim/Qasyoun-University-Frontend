import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Faculty } from "@/lib/classes/faculty";
import { resolveUploadSrc } from "@/lib/api/client";

type Props = {
  faculty: Faculty;
};

export default async function FacultyCard({ faculty }: Props) {
  const t = await getTranslations("FacultyCard");
  const locale = await getLocale();
  const name = faculty.getName(locale);

  const logoSrc = resolveUploadSrc(
    faculty.logoUrl,
    "/assets/img/program/program-thumb-1.jpg"
  );

  return (
    <div className="tp-program-item grey-bg mb-30 h-100 d-flex flex-column">
      <div className="tp-program-thumb fix">
        <Link href={faculty.detailPath}>
          <Image
            src={logoSrc}
            alt={name}
            width={350}
            height={198}
            style={{ height: "auto" }}
            unoptimized
          />
        </Link>
      </div>
      <div className="tp-program-content flex-grow-1">
        <h3 className="tp-program-title">
          <Link href={faculty.detailPath}>{name}</Link>
        </h3>
      </div>
      <div className="tp-program-btn">
        <Link href={faculty.detailPath}>{t("learnMore")}</Link>
      </div>
    </div>
  );
}
