"use client";

import useHoverReveal from "@/hooks/use-hover-reveal";
import Link from "next/link";

type IProps = {
  title: string;
  img: string;
};

export default function HoverImgItem({ img, title }: IProps) {
    const { handleMouseMove } = useHoverReveal();
  
    return (
      <>
        <Link
          className="tp-img-reveal tp-img-reveal-item"
          href="/event"
          data-img="/assets/img/event/event-thumb-1.jpg"
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
