import Image from "next/image";
import Link from "next/link";
import type { Faculty } from "@/lib/classes/faculty";

type Props = {
  faculty: Faculty;
};

export default function FacultyCard({ faculty }: Props) {
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
        <Link href={faculty.detailPath}>Learn more</Link>
      </div>
    </div>
  );
}
