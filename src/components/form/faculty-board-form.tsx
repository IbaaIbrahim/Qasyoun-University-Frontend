'use client';

import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import ErrMsg from "../err-msg";
import { siteRequestService, FacultyBoardRequestData } from "@/lib/services/site-request.service";
import { listFacultiesForPublic } from "@/lib/services/faculty.service";
import { Faculty } from "@/lib/classes/faculty";

export default function FacultyBoardForm() {
  const t = useTranslations("FacultyBoardForm");
  const ef = useTranslations("EmploymentForm");
  const locale = useLocale();
  const [faculties, setFaculties] = useState<Faculty[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  type FormFields = {
    firstName: string;
    lastName: string;
    dob: string;
    pob: string;
    gender: string;
    nationality: string;
    phone: string;
    email: string;
    maritalStatus: string;
    contractFacultyId: string;
    contractScientificDegree: string;
    contractSpecialist: string;
    contractJob: string;
    hasContractScientificDegreeApproved: string;
    hasContractExperience: string;
    contractExperiences: string;
    contractLanguages: string;
    contractCurrentPlace: string;
    contractFulltimeJob: string;
    hasContractAnotherJob: string;
    cvFile: FileList;
    degreeFile: FileList;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFields>();

  useEffect(() => {
    listFacultiesForPublic().then(setFaculties);
  }, []);

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const payload: FacultyBoardRequestData = {
        firstName: data.firstName,
        lastName: data.lastName,
        dob: data.dob || "",
        pob: data.pob || "",
        gender: parseInt(data.gender),
        nationality: data.nationality || "",
        phone: data.phone,
        email: data.email,
        maritalStatus: parseInt(data.maritalStatus),
        contractFacultyId: parseInt(data.contractFacultyId),
        contractScientificDegree: data.contractScientificDegree || "",
        contractSpecialist: data.contractSpecialist || "",
        contractJob: data.contractJob || "",
        hasContractScientificDegreeApproved: data.hasContractScientificDegreeApproved === 'true',
        hasContractExperience: data.hasContractExperience === 'true',
        contractExperiences: data.contractExperiences || "",
        contractLanguages: data.contractLanguages || "",
        contractCurrentPlace: data.contractCurrentPlace || "",
        contractFulltimeJob: data.contractFulltimeJob === 'true',
        hasContractAnotherJob: data.hasContractAnotherJob === 'true',
        cvFile: data.cvFile?.[0] ?? undefined,
        degreeFile: data.degreeFile?.[0] ?? undefined,
      };

      await siteRequestService.submitFacultyBoardApplication(payload);
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      setError(ef("error"));
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
        <h4 className="mb-2">{ef("success")}</h4>
        <button className="tp-btn-inner" onClick={() => setSubmitted(false)}>
          {t("applyAgain")}
        </button>
      </div>
    );
  }

  return (
    <form className="tp-contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="tp-contact-input-form">
        <div className="row">

          {/* ── Section: Personal Info ── */}
          <div className="col-12 mb-20">
            <h5 className="faculty-board-section-title">{t("sectionPersonal")}</h5>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("firstName")} *</label>
              <input type="text" {...register("firstName", { required: true })} />
              {errors.firstName && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("lastName")} *</label>
              <input type="text" {...register("lastName", { required: true })} />
              {errors.lastName && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("dob")}</label>
              <input className="form-control" type="date" {...register("dob")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("pob")}</label>
              <input type="text" {...register("pob")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("gender")}</label>
              <select {...register("gender")} className="form-select">
                <option value="1">{ef("male")}</option>
                <option value="2">{ef("female")}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("nationality")}</label>
              <input type="text" {...register("nationality")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("phone")} *</label>
              <input type="tel" {...register("phone", { required: true })} />
              {errors.phone && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("email")} *</label>
              <input type="email" {...register("email", { required: true })} />
              {errors.email && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("maritalStatus")}</label>
              <select {...register("maritalStatus")} className="form-select">
                <option value="1">{ef("single")}</option>
                <option value="2">{ef("married")}</option>
                <option value="3">{ef("divorced")}</option>
                <option value="4">{ef("widowed")}</option>
              </select>
            </div>
          </div>

          {/* ── Section: Faculty & Contract ── */}
          <div className="col-12 mb-20 mt-20">
            <h5 className="faculty-board-section-title">{t("sectionContract")}</h5>
          </div>

          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>{t("faculty")} *</label>
              <select {...register("contractFacultyId", { required: true })} className="form-select">
                <option value="">{locale === 'ar' ? 'اختر الكلية' : 'Select Faculty'}</option>
                {faculties.map((f) => (
                  <option key={f.id} value={f.id}>
                    {f.getName(locale)}
                  </option>
                ))}
              </select>
              {errors.contractFacultyId && <ErrMsg msg="Required" />}
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("scientificDegree")}</label>
              <input type="text" {...register("contractScientificDegree")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("specialist")}</label>
              <input type="text" {...register("contractSpecialist")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("contractJob")}</label>
              <input type="text" {...register("contractJob")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("currentPlace")}</label>
              <input type="text" {...register("contractCurrentPlace")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("languages")}</label>
              <input type="text" {...register("contractLanguages")} placeholder={t("languagesPlaceholder")} />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("degreeApproved")}</label>
              <select {...register("hasContractScientificDegreeApproved")} className="form-select">
                <option value="false">{locale === 'ar' ? 'لا' : 'No'}</option>
                <option value="true">{locale === 'ar' ? 'نعم' : 'Yes'}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("fulltimeJob")}</label>
              <select {...register("contractFulltimeJob")} className="form-select">
                <option value="false">{locale === 'ar' ? 'دوام جزئي' : 'Part-time'}</option>
                <option value="true">{locale === 'ar' ? 'دوام كامل' : 'Full-time'}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("hasAnotherJob")}</label>
              <select {...register("hasContractAnotherJob")} className="form-select">
                <option value="false">{locale === 'ar' ? 'لا' : 'No'}</option>
                <option value="true">{locale === 'ar' ? 'نعم' : 'Yes'}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("hasExperience")}</label>
              <select {...register("hasContractExperience")} className="form-select">
                <option value="false">{locale === 'ar' ? 'لا' : 'No'}</option>
                <option value="true">{locale === 'ar' ? 'نعم' : 'Yes'}</option>
              </select>
            </div>
          </div>

          <div className="col-xl-12">
            <div className="tp-contact-input p-relative">
              <label>{t("experiences")}</label>
              <textarea rows={3} {...register("contractExperiences")} placeholder={t("experiencesPlaceholder")} />
            </div>
          </div>

          {/* ── Section: Files ── */}
          <div className="col-12 mb-20 mt-20">
            <h5 className="faculty-board-section-title">{t("sectionFiles")}</h5>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{ef("cv")}</label>
              <input type="file" {...register("cvFile")} accept=".pdf" />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="tp-contact-input p-relative">
              <label>{t("degreeFile")}</label>
              <input type="file" {...register("degreeFile")} accept=".pdf,.jpg,.jpeg,.png" />
            </div>
          </div>

          {error && (
            <div className="col-xl-12">
              <p className="text-danger">{error}</p>
            </div>
          )}

          <div className="tp-contact-btn mt-20">
            <button type="submit" className="tp-btn-inner" disabled={isLoading}>
              {isLoading ? '...' : ef("submit")}
            </button>
          </div>

        </div>
      </div>

      <style jsx>{`
        .faculty-board-section-title {
          font-size: 16px;
          font-weight: 700;
          color: #42023e;
          padding-bottom: 10px;
          border-bottom: 2px solid #42023e22;
          margin-bottom: 20px;
        }
      `}</style>
    </form>
  );
}
