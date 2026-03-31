import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Faculty } from "@/lib/classes/faculty";

type Props = {
  faculty: Faculty;
};

export default async function FacultyCard({ faculty }: Props) {
  const t = await getTranslations("FacultyCard");

  return (
    <div className="tp-program-item grey-bg mb-30 h-100 d-flex flex-column">
      <div className="tp-program-thumb fix">
        <Link href={faculty.detailPath}>
          <Image
            src="/assets/img/program/program-thumb-1.jpg"
            alt={faculty.name}
            width={350}
            height={198}
            style={{ height: "auto" }}
          />
        </Link>
      </div>
      <div className="tp-program-content flex-grow-1">
        <h3 className="tp-program-title">
          <Link href={faculty.detailPath}>{faculty.name}</Link>
        </h3>
      </div>
      <div className="tp-program-btn">
        <Link href={faculty.detailPath}>{t("learnMore")}</Link>
      </div>
    </div>
  );
}
