import { useTranslations } from "next-intl";
import CounterItem from "./counter-item";
import HomeStatistics from "@/lib/classes/home/statistics";


const parseCount = (value?: string) => {
  if (!value) return { count: 0, suffix: "", decimals: 0 };
  const num = parseFloat(value.replace(/,/g, ""));
  if (isNaN(num)) return { count: 0, suffix: "", decimals: 0 };

  if (num > 999999) {
    return {
      count: num / 1000000,
      suffix: "m",
      decimals: 3,
    };
  } else if (num > 999) {
    return {
      count: num / 1000,
      suffix: "k",
      decimals: 3,
    };
  }
  return { count: num, suffix: "", decimals: 0 };
};

/** Vector recreation of the counter strip: dark field + two soft organic shapes, all driven by `--tp-theme-primary`. */
function CounterThemedBackdrop() {
  const deep = "color-mix(in srgb, var(--tp-theme-primary) 72%, black)";
  const accent = "color-mix(in srgb, var(--tp-theme-primary) 38%, white)";
  const accentSoft = "color-mix(in srgb, var(--tp-theme-primary) 48%, white)";

  return (
    <svg
      className="tp-counter-bg__art"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 300"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
      focusable="false"
    >
      <defs>
        <filter id="tp-counter-soft" x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
        </filter>
      </defs>
      <rect width="1200" height="300" fill={deep} />
      <g filter="url(#tp-counter-soft)" opacity={0.92}>
        <ellipse cx={225} cy={155} rx={205} ry={235} fill={accent} transform="rotate(-6 225 155)" />
        <path
          fill={accentSoft}
          d="M 820 52 C 960 8 1110 72 1140 155 C 1170 238 1020 285 920 262 C 820 238 740 168 820 52 Z"
        />
        <ellipse cx={920} cy={165} rx={140} ry={195} fill={accent} transform="rotate(12 920 165)" opacity={0.55} />
      </g>
    </svg>
  );
}

export default function CounterOne({ data }: { data?: HomeStatistics }) {
  const t = useTranslations("Counter");

  const students = parseCount(data?.studentsCount);
  const professors = parseCount(data?.professorsCount);
  const programs = parseCount(data?.programsCount);
  const research = parseCount(data?.researchsCount);

  const counterItems = [
    { id: 1, count: students.count, suffix: students.suffix, title: t("students"), decimals: students.decimals },
    { id: 2, count: professors.count, suffix: professors.suffix, title: t("professors"), decimals: professors.decimals },
    { id: 3, count: programs.count, suffix: programs.suffix, title: t("programs"), decimals: programs.decimals },
    { id: 4, count: research.count, suffix: research.suffix, title: t("research"), decimals: research.decimals },
  ];

  return (
    <section className="counter-area tp-counter-wrap mb-90">
      <div className="container">
        <div
          className="tp-counter-bg tp-counter-bg--themed position-relative wow fadeInUp overflow-hidden"
          data-wow-delay=".3s"
        >
          <CounterThemedBackdrop />
          <div className="tp-counter-bg__content position-relative">
            <div className="row">
              {counterItems.map((item) => (
                <div key={item.id} className="col-lg-3 col-md-6">
                  <div className="tp-counter-item text-center">
                    <h3 className="tp-counter-count mb-10">
                      <CounterItem min={0} max={item.count} decimals={item.decimals} />
                      {item.suffix}
                    </h3>
                    <p>{item.title}</p>
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
