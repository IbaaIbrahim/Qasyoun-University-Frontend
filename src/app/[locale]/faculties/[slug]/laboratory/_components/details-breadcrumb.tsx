import { Link } from "@/i18n/navigation";
import { HomeSvg } from "@/components/svg";

type IProps = {
  title: string;
  faculty: {
    name: string;
    slug: string;
  };
  translations: {
    laboratories: string;
    faculties: string;
  }
}

export default function DetailsBreadcrumb({ title, faculty, translations }: IProps) {
  return (
    <div className="tp-breadcrumb__area pt-60 pb-60 p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg"
        style={{
          backgroundImage: "url(/assets/img/breadcrumb/breadcrumb-bg.jpg)",
          backgroundColor: "#42023e",
          backgroundBlendMode: "multiply",
          opacity: 0.8
        }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content text-center">
              <h3 className="tp-breadcrumb__title text-white mb-10" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)', letterSpacing: '1px' }}>
                {translations.laboratories}
              </h3>
              <h4 className="text-white-50 mb-30" style={{ fontSize: '1.2rem', fontWeight: 400, opacity: 0.9 }}>
                {faculty.name}
              </h4>
              <div className="tp-breadcrumb__list tp-breadcrumb__list--custom justify-content-center mt-20" style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '10px 25px',
                borderRadius: '50px',
                backdropFilter: 'blur(5px)',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <span>
                  <Link href="/" className="text-white opacity-75 hover-opacity-100">
                    <HomeSvg />
                  </Link>
                </span>
                <span>
                  <Link href="/faculties" className="text-white opacity-75 hover-opacity-100">
                    {translations.faculties}
                  </Link>
                </span>
                <span>
                  <Link href={`/faculties/${faculty.slug}`} className="text-white opacity-75 hover-opacity-100">
                    {faculty.name}
                  </Link>
                </span>
                <span className="text-white">{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
