"use client";

import useHoverReveal from "@/hooks/use-hover-reveal";
import { Link } from "@/i18n/navigation";

type IProps = {
  title: string;
  img: string;
  href?: string;
};

export default function HoverImgItem({ img, title, href = "/events" }: IProps) {
  const { handleMouseMove } = useHoverReveal();

  return (
    <>
      <Link
        className="tp-img-reveal tp-img-reveal-item"
        href={href}
        data-img={img || "/assets/img/event/event-thumb-1.jpg"}
        data-fx="1"
        onMouseMove={handleMouseMove}
      >
        {title}

        <div
          className="tp-hover-reveal-bg"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </Link>
    </>
  );
}
