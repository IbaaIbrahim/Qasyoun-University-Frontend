'use client';
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ErrMsg from "../err-msg";
import { siteRequestService } from "@/lib/services/site-request.service";

export type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  allowFollowUp?: boolean;
};

type ContactFormProps = {
  id?: string;
  className?: string;
  submitButtonClassName?: string;
  showPhone?: boolean;
  showConsent?: boolean;
  recipientEmail?: string;
  onSubmitted?: (data: ContactFormValues) => void;
};

export default function ContactForm({
  id = "contact-form",
  className,
  submitButtonClassName = "tp-btn-inner",
  showPhone = true,
  showConsent = true,
  onSubmitted,
}: ContactFormProps) {
  const t = useTranslations("ContactForm");
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      allowFollowUp: true,
    },
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      if (onSubmitted) {
        onSubmitted(data);
      } else {
        await siteRequestService.submitContactRequest({
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        });
      }
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      setError(t("error") || "Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form id={id} className={className} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="tp-contact-input-form">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label htmlFor={`${id}-name`}>{t("name")}</label>
              <input
                id={`${id}-name`}
                type="text"
                autoComplete="name"
                {...register("name", { required: t("nameRequired") })}
              />
              {errors.name?.message && <ErrMsg msg={errors.name.message} />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label htmlFor={`${id}-email`}>{t("email")}</label>
              <input
                id={`${id}-email`}
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: t("emailRequired"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("emailInvalid"),
                  },
                })}
              />
              {errors.email?.message && <ErrMsg msg={errors.email.message} />}
            </div>
          </div>

          {showPhone ? (
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contact-input p-relative">
                <label htmlFor={`${id}-phone`}>{t("phone")}</label>
                <input
                  id={`${id}-phone`}
                  type="tel"
                  autoComplete="tel"
                  {...register("phone")}
                />
              </div>
            </div>
          ) : null}

          <div className={showPhone ? "col-xl-6 col-lg-6" : "col-xl-12 col-lg-12"}>
            <div className="tp-contact-input p-relative">
              <label htmlFor={`${id}-subject`}>{t("subject")}</label>
              <input
                id={`${id}-subject`}
                type="text"
                {...register("subject", { required: t("subjectRequired") })}
              />
              {errors.subject?.message && <ErrMsg msg={errors.subject.message} />}
            </div>
          </div>

          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label htmlFor={`${id}-message`}>{t("message")}</label>
              <textarea
                id={`${id}-message`}
                rows={6}
                {...register("message", { required: t("messageRequired") })}
              />
              {errors.message?.message && <ErrMsg msg={errors.message.message} />}
            </div>
          </div>

          {showConsent ? (
            <div className="col-xl-12">
              <div className="tp-contact-input-remeber">
                <input
                  id={`${id}-allow-follow-up`}
                  type="checkbox"
                  {...register("allowFollowUp")}
                />
                <label htmlFor={`${id}-allow-follow-up`}>{t("consent")}</label>
              </div>
            </div>
          ) : null}

          {error && (
            <div className="col-xl-12 mb-20">
              <p className="text-danger">{error}</p>
            </div>
          )}

          {submitted && (
            <div className="col-xl-12 mb-20">
              <p className="tp-contact-form-status success-message" style={{ color: '#42023e', fontWeight: 'bold' }}>
                {t("success")}
              </p>
            </div>
          )}

          <div className="tp-contact-btn">
            <button type="submit" className={submitButtonClassName} disabled={isLoading}>
              {isLoading ? "..." : t("submit")}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
