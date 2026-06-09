'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import ErrMsg from "../err-msg";
import { vacancyService } from "@/lib/services/vacancy.service";
import { siteRequestService, EmploymentRequestData } from "@/lib/services/site-request.service";
import { Vacancy } from "@/lib/classes/vacancy";

export default function JobRequestForm() {
  const t = useTranslations("EmploymentForm");
  const locale = useLocale();
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>();

  useEffect(() => {
    vacancyService.listPublicVacancies().then(setVacancies);
  }, []);

  const onSubmit: SubmitHandler<any> = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const payload: EmploymentRequestData = {
        vacancyId: parseInt(data.vacancyId),
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob,
        pob: data.pob,
        gender: parseInt(data.gender),
        nationality: data.nationality,
        phone: data.phone,
        email: data.email,
        maritalStatus: parseInt(data.maritalStatus),
        cvFile: data.cvFile[0],
      };

      await siteRequestService.submitJobApplication(payload);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      setError(t("error"));
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="tp-contact-form-status success-message p-5 text-center">
        <div className="icon mb-3">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="60" rx="30" fill="#42023e" fillOpacity="0.1" />
            <path d="M42 20L24.5 37.5L18 31" stroke="#42023e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h4 className="mb-2">{t("success")}</h4>
        <button className="tp-btn-inner" onClick={() => setSubmitted(false)}>
          Apply for another position
        </button>
      </div>
    );
  }

  return (
    <form className="tp-contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="tp-contact-input-form">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>{t("vacancy")}</label>
              <select {...register("vacancyId", { required: true })} className="form-select">
                <option value="">{locale === 'ar' ? 'تحديد' : 'Select position'}</option>
                {vacancies.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.getLocalizedTitle(locale)}
                  </option>
                ))}
              </select>
              {errors.vacancyId && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("firstName")} *</label>
              <input type="text" {...register("firstName", { required: true })} />
              {errors.firstName && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("lastName")} *</label>
              <input type="text" {...register("lastName", { required: true })} />
              {errors.lastName && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("dob")}</label>
              <input className="form-control" type="date" {...register("dob", { required: true })} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("pob")}</label>
              <input type="text" {...register("pob")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("gender")}</label>
              <select {...register("gender")} className="form-select">
                <option value="1">{t("male")}</option>
                <option value="2">{t("female")}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("nationality")}</label>
              <input type="text" {...register("nationality")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("phone")}</label>
              <input type="tel" {...register("phone", { required: true })} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("email")}</label>
              <input type="email" {...register("email", { required: true })} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("maritalStatus")}</label>
              <select {...register("maritalStatus")} className="form-select">
                <option value="1">{t("single")}</option>
                <option value="2">{t("married")}</option>
                <option value="3">{t("divorced")}</option>
                <option value="4">{t("widowed")}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("cv")}</label>
              <input type="file" {...register("cvFile", { required: true })} accept=".pdf" />
            </div>
          </div>

          {error && (
            <div className="col-xl-12">
              <p className="text-danger">{error}</p>
            </div>
          )}

          <div className="tp-contact-btn mt-20">
            <button type="submit" className="tp-btn-inner" disabled={isLoading}>
              {isLoading ? '...' : t("submit")}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
