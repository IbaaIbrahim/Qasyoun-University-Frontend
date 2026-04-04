"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import errorImg from "@/assets/img/error/bug_fix.jpg";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="tp-error-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-error-wrapper text-center">
              <div className="tp-error-thumb mb-50">
                <Image
                  width={500}
                  height={500}
                  src={errorImg}
                  alt=""
                />
              </div>
              <h1 className="title">{t("title")}</h1>
              <p className="text">{error?.message}</p>
              <div className="tp-error-content">
                <button className="tp-btn-inner" type="button" onClick={() => reset()}>
                  {t("tryAgain")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
