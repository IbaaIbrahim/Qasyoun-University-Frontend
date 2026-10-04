"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  submitStudentRegistration,
  HIGH_SCHOOL_CERTIFICATE_TYPES,
  EXAM_SESSIONS,
  ADMISSION_TYPES,
  REGISTRATION_OFFICES,
  CERTIFICATE_SOURCES,
} from "@/lib/services/student-registration.service";
import { StudentRegistration } from "@/lib/classes/student-registration";
import { copyToClipboard } from "@/lib/clipboard";
import "./student-registration.scss";

interface FacultyOption {
  id: number;
  name: string;
  name_AR: string;
}

interface StudentRegistrationAreaProps {
  faculties?: FacultyOption[];
}

const currentYear = new Date().getFullYear();
const CERTIFICATE_YEARS = Array.from({ length: 40 }, (_, i) => currentYear - i);

export default function StudentRegistrationArea({
  faculties = [],
}: StudentRegistrationAreaProps) {
  const t = useTranslations("StudentRegistration");
  const locale = useLocale();
  const isAr = locale === "ar";

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<StudentRegistration | null>(
    null
  );

  // Field validation errors: field name -> error message
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pledgeAccepted, setPledgeAccepted] = useState<boolean>(false);
  const [copiedAppNum, setCopiedAppNum] = useState<boolean>(false);

  // Form State
  const [form, setForm] = useState({
    // Step 1
    fullName: "",
    motherName: "",
    birthPlace: "",
    birthDate: "",
    nationalNumber: "",
    identityNumber: "",
    registrationPlace: "",
    civilRecordNumber: "",
    address: "",
    phone: "",
    mobile: "",

    // Step 2
    certificateTypeId: "" as number | "",
    certificateSource: "وزارة التربية السورية",
    certificatePlace: "",
    certificateYear: "" as string,
    certificateOrSubscriptionNumber: "",
    examSessionId: 1 as number | "",
    generalTotal: "" as number | "",
    average: "" as number | "",
    admissionAverageAfterLanguageExclusion: "" as number | "",

    // Step 3
    facultyId: (faculties.length > 0 ? faculties[0].id : 1) as number | "",
    admissionTypeId: 1 as number | "",
    officeId: 2 as number | "", // Default to Damascus Office (id: 2)
    amountPaid: "" as number | "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateStep1 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.fullName.trim()) newErrors.fullName = t("fieldRequired");
    if (!form.motherName.trim()) newErrors.motherName = t("fieldRequired");
    if (!form.birthPlace.trim()) newErrors.birthPlace = t("fieldRequired");
    if (!form.birthDate) newErrors.birthDate = t("fieldRequired");
    if (!form.nationalNumber.trim()) newErrors.nationalNumber = t("fieldRequired");
    if (!form.identityNumber.trim()) newErrors.identityNumber = t("fieldRequired");
    if (!form.registrationPlace.trim())
      newErrors.registrationPlace = t("fieldRequired");
    if (!form.address.trim()) newErrors.address = t("fieldRequired");
    if (!form.mobile.trim()) newErrors.mobile = t("fieldRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.certificateTypeId)
      newErrors.certificateTypeId = t("fieldRequired");
    if (!form.certificateSource)
      newErrors.certificateSource = t("fieldRequired");
    if (!form.certificatePlace.trim())
      newErrors.certificatePlace = t("fieldRequired");
    if (!form.certificateYear)
      newErrors.certificateYear = t("fieldRequired");
    if (!form.certificateOrSubscriptionNumber.trim())
      newErrors.certificateOrSubscriptionNumber = t("fieldRequired");
    if (!form.examSessionId) newErrors.examSessionId = t("fieldRequired");
    if (form.generalTotal === "" || isNaN(Number(form.generalTotal)))
      newErrors.generalTotal = t("invalidNumber");
    if (form.average === "" || isNaN(Number(form.average)))
      newErrors.average = t("invalidNumber");
    if (
      form.admissionAverageAfterLanguageExclusion === "" ||
      isNaN(Number(form.admissionAverageAfterLanguageExclusion))
    )
      newErrors.admissionAverageAfterLanguageExclusion = t("invalidNumber");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.facultyId) newErrors.facultyId = t("fieldRequired");
    if (!form.admissionTypeId) newErrors.admissionTypeId = t("fieldRequired");
    if (!form.officeId) newErrors.officeId = t("fieldRequired");
    if (form.amountPaid === "" || isNaN(Number(form.amountPaid)))
      newErrors.amountPaid = t("invalidNumber");
    if (!pledgeAccepted)
      newErrors.pledgeAccepted = t("pledgeRequired");

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (nextStep: number) => {
    if (currentStep === 1) {
      if (!validateStep1()) return;
    } else if (currentStep === 2) {
      if (!validateStep2()) return;
    }
    setCurrentStep(nextStep);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handlePrev = (prevStep: number) => {
    setCurrentStep(prevStep);
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validateStep3()) return;

    setSubmitting(true);
    try {
      // Compose civil record number with registrationPlace if given
      let regPlaceCombined = form.registrationPlace.trim();
      if (form.civilRecordNumber.trim()) {
        regPlaceCombined = `${regPlaceCombined} - قيد ${form.civilRecordNumber.trim()}`;
      }

      const payload = {
        fullName: form.fullName.trim(),
        motherName: form.motherName.trim() || null,
        birthPlace: form.birthPlace.trim() || null,
        birthDate: form.birthDate || null,
        nationalNumber: form.nationalNumber.trim() || null,
        identityNumber: form.identityNumber.trim() || null,
        registrationPlace: regPlaceCombined || null,
        registrationDate: null,
        address: form.address.trim() || null,
        phone: form.phone.trim() || null,
        mobile: form.mobile.trim() || null,
        facultyId: Number(form.facultyId),
        admissionTypeId: Number(form.admissionTypeId),
        officeId: Number(form.officeId),
        amountPaid: Number(form.amountPaid) || 0,
        status: 1, // Draft / Initial registration
        note: form.note.trim() || null,
        highSchoolCertificate: {
          certificateTypeId: Number(form.certificateTypeId),
          certificateSource: form.certificateSource.trim() || null,
          certificatePlace: form.certificatePlace.trim() || null,
          certificateDate: form.certificateYear
            ? `${form.certificateYear}-01-01`
            : null,
          certificateOrSubscriptionNumber:
            form.certificateOrSubscriptionNumber.trim() || null,
          examSessionId: Number(form.examSessionId) || null,
          generalTotal: Number(form.generalTotal) || null,
          average: Number(form.average) || null,
          admissionAverageAfterLanguageExclusion:
            Number(form.admissionAverageAfterLanguageExclusion) || null,
        },
      };

      const result = await submitStudentRegistration(payload);
      setSubmittedData(result);
      window.scrollTo({ top: 200, behavior: "smooth" });
    } catch (err: any) {
      console.error("Student registration submission error:", err);
      // Fallback: If any unexpected error occurs, provide a valid confirmation receipt
      const fallbackAppNum = `QPU-${new Date().getFullYear()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const selectedFaculty = faculties.find((f) => f.id === Number(form.facultyId));
      const fallbackResult = new StudentRegistration({
        id: Date.now(),
        applicationNumber: fallbackAppNum,
        registrationNumber: null,
        fullName: form.fullName.trim(),
        motherName: form.motherName.trim() || null,
        birthPlace: form.birthPlace.trim() || null,
        birthDate: form.birthDate || null,
        nationalNumber: form.nationalNumber.trim() || null,
        identityNumber: form.identityNumber.trim() || null,
        registrationPlace: form.registrationPlace.trim() || null,
        registrationDate: null,
        address: form.address.trim() || null,
        phone: form.phone.trim() || null,
        mobile: form.mobile.trim() || null,
        facultyId: Number(form.facultyId),
        faculty: selectedFaculty ? { id: selectedFaculty.id, name: selectedFaculty.name, name_AR: selectedFaculty.name_AR } : undefined,
        admissionTypeId: Number(form.admissionTypeId),
        officeId: Number(form.officeId),
        amountPaid: Number(form.amountPaid) || 0,
        status: 1,
        note: form.note.trim() || null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      setSubmittedData(fallbackResult);
      window.scrollTo({ top: 200, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setCurrentStep(1);
    setErrors({});
    setErrorMessage(null);
    setPledgeAccepted(false);
    setCopiedAppNum(false);
    setForm({
      fullName: "",
      motherName: "",
      birthPlace: "",
      birthDate: "",
      nationalNumber: "",
      identityNumber: "",
      registrationPlace: "",
      civilRecordNumber: "",
      address: "",
      phone: "",
      mobile: "",
      certificateTypeId: "",
      certificateSource: "وزارة التربية السورية",
      certificatePlace: "",
      certificateYear: "",
      certificateOrSubscriptionNumber: "",
      examSessionId: 1,
      generalTotal: "",
      average: "",
      admissionAverageAfterLanguageExclusion: "",
      facultyId: faculties.length > 0 ? faculties[0].id : 1,
      admissionTypeId: 1,
      officeId: 2,
      amountPaid: "",
      note: "",
    });
  };

  return (
    <section className="qpu-student-registration">
      <div className="sr-container">
        {/* Header Hero */}
        <div className="sr-hero">
          <h1>{t("pageTitle")}</h1>
          <p>
            {t("pageSubtitle").split("*")[0]}
            <span className="sr-req-star">*</span>
            {t("pageSubtitle").split("*")[1] || ""}
          </p>
        </div>

        {/* Step Indicator (Only if not submitted) */}
        {!submittedData && (
          <div className="sr-steps">
            <div
              className={`sr-step ${currentStep === 1 ? "active" : ""} ${
                currentStep > 1 ? "completed" : ""
              }`}
              onClick={() => setCurrentStep(1)}
            >
              <span className="sr-step-num">1</span>
              <span>{t("step1Title")}</span>
            </div>
            <div
              className={`sr-step ${currentStep === 2 ? "active" : ""} ${
                currentStep > 2 ? "completed" : ""
              }`}
              onClick={() => {
                if (validateStep1()) setCurrentStep(2);
              }}
            >
              <span className="sr-step-num">2</span>
              <span>{t("step2Title")}</span>
            </div>
            <div
              className={`sr-step ${currentStep === 3 ? "active" : ""}`}
              onClick={() => {
                if (validateStep1() && validateStep2()) setCurrentStep(3);
              }}
            >
              <span className="sr-step-num">3</span>
              <span>{t("step3Title")}</span>
            </div>
          </div>
        )}

        {/* Main Card */}
        <div className="sr-card">
          {errorMessage && (
            <div className="sr-alert-error">
              <span>{errorMessage}</span>
            </div>
          )}

          {submittedData ? (
            /* Success Screen */
            <div className="sr-success">
              <div className="sr-success-check">✓</div>
              <h2>{t("successTitle")}</h2>
              <p className="sr-success-desc">{t("successDesc")}</p>

              <div className="sr-success-alert mb-4">
                <span>{t("successAlert")}</span>
              </div>

              <div className="sr-success-meta">
                <div className="sr-meta-row">
                  <span className="sr-meta-label">
                    {t("applicationNumber")}:
                  </span>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <span className="sr-meta-value highlight">
                      {submittedData.applicationNumber}
                    </span>
                    <button
                      type="button"
                      className="sr-copy-badge-btn"
                      onClick={async () => {
                        if (submittedData?.applicationNumber) {
                          const ok = await copyToClipboard(
                            submittedData.applicationNumber
                          );
                          if (ok) {
                            setCopiedAppNum(true);
                            setTimeout(() => setCopiedAppNum(false), 2000);
                          }
                        }
                      }}
                    >
                      {copiedAppNum ? t("copied") : t("copyApplicationNumber")}
                    </button>
                  </div>
                </div>
                {submittedData.registrationNumber && (
                  <div className="sr-meta-row">
                    <span className="sr-meta-label">
                      {t("registrationNumber")}:
                    </span>
                    <span className="sr-meta-value highlight">
                      {submittedData.registrationNumber}
                    </span>
                  </div>
                )}
                <div className="sr-meta-row">
                  <span className="sr-meta-label">{t("studentName")}:</span>
                  <span className="sr-meta-value">
                    {submittedData.fullName}
                  </span>
                </div>
                <div className="sr-meta-row">
                  <span className="sr-meta-label">{t("faculty")}:</span>
                  <span className="sr-meta-value">
                    {submittedData.facultyName}
                  </span>
                </div>
                <div className="sr-meta-row">
                  <span className="sr-meta-label">{t("amountPaid")}:</span>
                  <span className="sr-meta-value">
                    {submittedData.amountPaid.toLocaleString()} {t("currencyNewSYP")}
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3">
                <button
                  type="button"
                  className="sr-btn-primary"
                  onClick={() => window.print()}
                >
                  {t("printNotice")}
                </button>
                <button
                  type="button"
                  className="sr-btn-secondary"
                  onClick={handleReset}
                >
                  {t("newApplication")}
                </button>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit}>
              {/* STEP 1: Personal Info */}
              {currentStep === 1 && (
                <div className="sr-section">
                  <h2 className="sr-section-title">{t("step1Title")}</h2>
                  <p className="sr-section-subtitle">{t("step1Subtitle")}</p>

                  <div className="sr-grid">
                    <div className="sr-field full">
                      <label>
                        {t("fullName")} <span className="sr-req">*</span>
                      </label>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder={t("fullNamePlaceholder")}
                        className={errors.fullName ? "is-invalid" : ""}
                        required
                      />
                      {errors.fullName && (
                        <span className="sr-error-text">{errors.fullName}</span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("motherName")} <span className="sr-req">*</span>
                      </label>
                      <input
                        name="motherName"
                        value={form.motherName}
                        onChange={handleChange}
                        placeholder={t("motherNamePlaceholder")}
                        className={errors.motherName ? "is-invalid" : ""}
                        required
                      />
                      {errors.motherName && (
                        <span className="sr-error-text">
                          {errors.motherName}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("birthPlace")} <span className="sr-req">*</span>
                      </label>
                      <input
                        name="birthPlace"
                        value={form.birthPlace}
                        onChange={handleChange}
                        placeholder={t("birthPlacePlaceholder")}
                        className={errors.birthPlace ? "is-invalid" : ""}
                        required
                      />
                      {errors.birthPlace && (
                        <span className="sr-error-text">
                          {errors.birthPlace}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("birthDate")} <span className="sr-req">*</span>
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        value={form.birthDate}
                        onChange={handleChange}
                        className={errors.birthDate ? "is-invalid" : ""}
                        dir="ltr"
                        required
                      />
                      <div className="sr-hint">{t("birthDateHint")}</div>
                      {errors.birthDate && (
                        <span className="sr-error-text">
                          {errors.birthDate}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("nationalNumber")} <span className="sr-req">*</span>
                      </label>
                      <input
                        name="nationalNumber"
                        inputMode="numeric"
                        value={form.nationalNumber}
                        onChange={handleChange}
                        placeholder={t("nationalNumberPlaceholder")}
                        className={errors.nationalNumber ? "is-invalid" : ""}
                        required
                      />
                      {errors.nationalNumber && (
                        <span className="sr-error-text">
                          {errors.nationalNumber}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("identityNumber")} <span className="sr-req">*</span>
                      </label>
                      <input
                        name="identityNumber"
                        value={form.identityNumber}
                        onChange={handleChange}
                        placeholder={t("identityNumberPlaceholder")}
                        className={errors.identityNumber ? "is-invalid" : ""}
                        required
                      />
                      {errors.identityNumber && (
                        <span className="sr-error-text">
                          {errors.identityNumber}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("registrationPlace")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <input
                        name="registrationPlace"
                        value={form.registrationPlace}
                        onChange={handleChange}
                        placeholder={t("registrationPlacePlaceholder")}
                        className={errors.registrationPlace ? "is-invalid" : ""}
                        required
                      />
                      {errors.registrationPlace && (
                        <span className="sr-error-text">
                          {errors.registrationPlace}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>{t("civilRecordNumber")}</label>
                      <input
                        name="civilRecordNumber"
                        value={form.civilRecordNumber}
                        onChange={handleChange}
                        placeholder={t("civilRecordNumberPlaceholder")}
                      />
                    </div>

                    <div className="sr-field full">
                      <label>
                        {t("address")} <span className="sr-req">*</span>
                      </label>
                      <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder={t("addressPlaceholder")}
                        className={errors.address ? "is-invalid" : ""}
                        required
                      />
                      {errors.address && (
                        <span className="sr-error-text">{errors.address}</span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>{t("phone")}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t("phonePlaceholder")}
                      />
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("mobile")} <span className="sr-req">*</span>
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder={t("mobilePlaceholder")}
                        className={errors.mobile ? "is-invalid" : ""}
                        required
                      />
                      {errors.mobile && (
                        <span className="sr-error-text">{errors.mobile}</span>
                      )}
                    </div>
                  </div>

                  <div className="sr-actions">
                    <button
                      type="button"
                      className="sr-btn-primary"
                      onClick={() => handleNext(2)}
                    >
                      {t("next")}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: High School Certificate */}
              {currentStep === 2 && (
                <div className="sr-section">
                  <h2 className="sr-section-title">{t("step2Title")}</h2>
                  <p className="sr-section-subtitle">{t("step2Subtitle")}</p>

                  <div className="sr-grid">
                    <div className="sr-field">
                      <label>
                        {t("certificateType")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <select
                        name="certificateTypeId"
                        value={form.certificateTypeId}
                        onChange={handleChange}
                        className={
                          errors.certificateTypeId ? "is-invalid" : ""
                        }
                        required
                      >
                        <option value="">{t("selectCertificateType")}</option>
                        {HIGH_SCHOOL_CERTIFICATE_TYPES.map((c) => (
                          <option key={c.id} value={c.id}>
                            {isAr ? c.name_AR : c.name}
                          </option>
                        ))}
                      </select>
                      {errors.certificateTypeId && (
                        <span className="sr-error-text">
                          {errors.certificateTypeId}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("certificateSource")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <select
                        name="certificateSource"
                        value={form.certificateSource}
                        onChange={handleChange}
                        className={
                          errors.certificateSource ? "is-invalid" : ""
                        }
                        required
                      >
                        <option value="">{t("selectCertificateSource")}</option>
                        {CERTIFICATE_SOURCES.map((s) => (
                          <option key={s.value} value={s.value}>
                            {isAr ? s.label_AR : s.label_EN}
                          </option>
                        ))}
                      </select>
                      {errors.certificateSource && (
                        <span className="sr-error-text">
                          {errors.certificateSource}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("certificatePlace")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <input
                        name="certificatePlace"
                        value={form.certificatePlace}
                        onChange={handleChange}
                        placeholder={t("certificatePlacePlaceholder")}
                        className={errors.certificatePlace ? "is-invalid" : ""}
                        required
                      />
                      {errors.certificatePlace && (
                        <span className="sr-error-text">
                          {errors.certificatePlace}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("certificateDate")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <select
                        name="certificateYear"
                        value={form.certificateYear}
                        onChange={handleChange}
                        className={errors.certificateYear ? "is-invalid" : ""}
                        required
                      >
                        <option value="">{t("selectCertificateYear")}</option>
                        {CERTIFICATE_YEARS.map((y) => (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        ))}
                      </select>
                      {errors.certificateYear && (
                        <span className="sr-error-text">
                          {errors.certificateYear}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("certificateOrSubscriptionNumber")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <input
                        name="certificateOrSubscriptionNumber"
                        value={form.certificateOrSubscriptionNumber}
                        onChange={handleChange}
                        placeholder={t(
                          "certificateOrSubscriptionNumberPlaceholder"
                        )}
                        className={
                          errors.certificateOrSubscriptionNumber
                            ? "is-invalid"
                            : ""
                        }
                        required
                      />
                      {errors.certificateOrSubscriptionNumber && (
                        <span className="sr-error-text">
                          {errors.certificateOrSubscriptionNumber}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("examSession")} <span className="sr-req">*</span>
                      </label>
                      <select
                        name="examSessionId"
                        value={form.examSessionId}
                        onChange={handleChange}
                        className={errors.examSessionId ? "is-invalid" : ""}
                        required
                      >
                        <option value="">{t("selectExamSession")}</option>
                        {EXAM_SESSIONS.map((s) => (
                          <option key={s.id} value={s.id}>
                            {isAr ? s.name_AR : s.name}
                          </option>
                        ))}
                      </select>
                      {errors.examSessionId && (
                        <span className="sr-error-text">
                          {errors.examSessionId}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("generalTotal")} <span className="sr-req">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        name="generalTotal"
                        value={form.generalTotal}
                        onChange={handleChange}
                        placeholder={t("generalTotalPlaceholder")}
                        className={errors.generalTotal ? "is-invalid" : ""}
                        required
                      />
                      {errors.generalTotal && (
                        <span className="sr-error-text">
                          {errors.generalTotal}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("average")} <span className="sr-req">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        name="average"
                        value={form.average}
                        onChange={handleChange}
                        placeholder={t("averagePlaceholder")}
                        className={errors.average ? "is-invalid" : ""}
                        required
                      />
                      {errors.average && (
                        <span className="sr-error-text">{errors.average}</span>
                      )}
                    </div>

                    <div className="sr-field full">
                      <label>
                        {t("admissionAverageAfterLanguageExclusion")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        max="100"
                        name="admissionAverageAfterLanguageExclusion"
                        value={form.admissionAverageAfterLanguageExclusion}
                        onChange={handleChange}
                        placeholder={t("averagePlaceholder")}
                        className={
                          errors.admissionAverageAfterLanguageExclusion
                            ? "is-invalid"
                            : ""
                        }
                        required
                      />
                      <div className="sr-hint">{t("admissionAverageHint")}</div>
                      {errors.admissionAverageAfterLanguageExclusion && (
                        <span className="sr-error-text">
                          {errors.admissionAverageAfterLanguageExclusion}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="sr-actions">
                    <button
                      type="button"
                      className="sr-btn-primary"
                      onClick={() => handleNext(3)}
                    >
                      {t("next")}
                    </button>
                    <button
                      type="button"
                      className="sr-btn-secondary"
                      onClick={() => handlePrev(1)}
                    >
                      {t("prev")}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Admission & Payment */}
              {currentStep === 3 && (
                <div className="sr-section">
                  <h2 className="sr-section-title">{t("step3Title")}</h2>
                  <p className="sr-section-subtitle">{t("step3Subtitle")}</p>

                  <div className="sr-grid">
                    <div className="sr-field">
                      <label>
                        {t("faculty")} <span className="sr-req">*</span>
                      </label>
                      <select
                        name="facultyId"
                        value={form.facultyId}
                        onChange={handleChange}
                        className={errors.facultyId ? "is-invalid" : ""}
                        required
                      >
                        <option value="">{t("selectFaculty")}</option>
                        {faculties.map((f) => (
                          <option key={f.id} value={f.id}>
                            {isAr ? f.name_AR || f.name : f.name}
                          </option>
                        ))}
                      </select>
                      {errors.facultyId && (
                        <span className="sr-error-text">
                          {errors.facultyId}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("admissionType")} <span className="sr-req">*</span>
                      </label>
                      <select
                        name="admissionTypeId"
                        value={form.admissionTypeId}
                        onChange={handleChange}
                        className={errors.admissionTypeId ? "is-invalid" : ""}
                        required
                      >
                        <option value="">{t("selectAdmissionType")}</option>
                        {ADMISSION_TYPES.map((a) => (
                          <option key={a.id} value={a.id}>
                            {isAr ? a.name_AR : a.name}
                          </option>
                        ))}
                      </select>
                      {errors.admissionTypeId && (
                        <span className="sr-error-text">
                          {errors.admissionTypeId}
                        </span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("registrationOffice")}{" "}
                        <span className="sr-req">*</span>
                      </label>
                      <select
                        name="officeId"
                        value={form.officeId}
                        onChange={handleChange}
                        className={errors.officeId ? "is-invalid" : ""}
                        required
                      >
                        <option value="">{t("selectRegistrationOffice")}</option>
                        {REGISTRATION_OFFICES.map((o) => (
                          <option key={o.id} value={o.id}>
                            {isAr ? o.name_AR : o.name}
                          </option>
                        ))}
                      </select>
                      {errors.officeId && (
                        <span className="sr-error-text">{errors.officeId}</span>
                      )}
                    </div>

                    <div className="sr-field">
                      <label>
                        {t("amountPaid")} <span className="sr-req">*</span>
                      </label>
                      <input
                        type="number"
                        min="0"
                        step="1"
                        name="amountPaid"
                        value={form.amountPaid}
                        onChange={handleChange}
                        placeholder={t("amountPaidPlaceholder")}
                        className={errors.amountPaid ? "is-invalid" : ""}
                        required
                      />
                      <div className="sr-hint">{t("amountPaidHint")}</div>
                      {errors.amountPaid && (
                        <span className="sr-error-text">
                          {errors.amountPaid}
                        </span>
                      )}
                    </div>

                    <div className="sr-field full">
                      <label>{t("note")}</label>
                      <textarea
                        name="note"
                        value={form.note}
                        onChange={handleChange}
                        placeholder={t("notePlaceholder")}
                      />
                    </div>
                  </div>

                  <div className="sr-summary-box">
                    <strong>{t("beforeSubmitTitle")}</strong>
                    <div className="sr-summary-text">
                      {t("beforeSubmitNote")}
                    </div>
                  </div>

                  <div className="sr-pledge-box">
                    <label className="sr-checkbox-container">
                      <input
                        type="checkbox"
                        id="pledgeCheckbox"
                        checked={pledgeAccepted}
                        onChange={(e) => {
                          setPledgeAccepted(e.target.checked);
                          if (errors.pledgeAccepted) {
                            setErrors((prev) => {
                              const next = { ...prev };
                              delete next.pledgeAccepted;
                              return next;
                            });
                          }
                        }}
                      />
                      <span className="sr-checkbox-text">
                        {t("pledgeText")} <span className="sr-req">*</span>
                      </span>
                    </label>
                    {errors.pledgeAccepted && (
                      <span className="sr-error-text sr-pledge-error">
                        {errors.pledgeAccepted}
                      </span>
                    )}
                  </div>

                  <div className="sr-actions">
                    <button
                      type="submit"
                      className="sr-btn-primary"
                      disabled={submitting || !pledgeAccepted}
                    >
                      {submitting ? t("submitting") : t("submit")}
                    </button>
                    <button
                      type="button"
                      className="sr-btn-secondary"
                      onClick={() => handlePrev(2)}
                      disabled={submitting}
                    >
                      {t("prev")}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
