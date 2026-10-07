import { StudentRegistrationCreatedDto } from "@/lib/api/student-registration.api";

export class StudentRegistration {
  readonly id: number;
  readonly applicationNumber: string;
  readonly fullName: string;
  readonly motherName: string;
  readonly birthPlace: string;
  readonly birthDate: string;
  readonly nationalNumber: string;
  readonly identityNumber: string;
  readonly registrationPlace: string;
  readonly registrationNumber: string;
  readonly address: string;
  readonly phone: string;
  readonly mobile: string;
  readonly facultyId: number;
  readonly facultyName: string;
  readonly admissionTypeId: number;
  readonly admissionTypeName: string;
  readonly officeId: number;
  readonly officeName: string;
  readonly amountPaid: number;
  readonly status: number;
  readonly note: string;
  readonly createdAt: string;
  readonly highSchoolCertificate: {
    id?: number;
    studentRegistrationId?: number;
    certificateTypeId: number;
    certificateTypeName?: string;
    certificateSource?: string | null;
    certificatePlace?: string | null;
    certificateDate?: number | null;
    certificateOrSubscriptionNumber?: string | null;
    examSessionId?: number | null;
    examSessionName?: string | null;
    generalTotal?: number | null;
    average?: number | null;
    admissionAverageAfterLanguageExclusion?: number | null;
  } | null;

  constructor(dto: StudentRegistrationCreatedDto) {
    this.id = dto.id;
    this.applicationNumber = dto.applicationNumber ?? "";
    this.fullName = dto.fullName ?? "";
    this.motherName = dto.motherName ?? "";
    this.birthPlace = dto.birthPlace ?? "";
    this.birthDate = dto.birthDate ?? "";
    this.nationalNumber = dto.nationalNumber ?? "";
    this.identityNumber = dto.identityNumber ?? "";
    this.registrationPlace = dto.registrationPlace ?? "";
    this.registrationNumber = dto.registrationNumber ?? "";
    this.address = dto.address ?? "";
    this.phone = dto.phone ?? "";
    this.mobile = dto.mobile ?? "";
    this.facultyId = dto.facultyId;
    this.facultyName = dto.faculty?.name_AR || dto.faculty?.name || "";
    this.admissionTypeId = dto.admissionTypeId;
    this.admissionTypeName =
      dto.admissionType?.name_AR || dto.admissionType?.name || "";
    this.officeId = dto.officeId;
    this.officeName = dto.office?.name_AR || dto.office?.name || "";
    this.amountPaid = dto.amountPaid ?? 0;
    this.status = dto.status;
    this.note = dto.note ?? "";
    this.createdAt = dto.createdAt ?? "";

    if (dto.highSchoolCertificate) {
      const cert = dto.highSchoolCertificate;
      this.highSchoolCertificate = {
        id: cert.id,
        studentRegistrationId: cert.studentRegistrationId,
        certificateTypeId: cert.certificateTypeId,
        certificateTypeName:
          cert.certificateType?.name_AR || cert.certificateType?.name || "",
        certificateSource: cert.certificateSource,
        certificatePlace: cert.certificatePlace,
        certificateDate:
          cert.certificateDate !== null && cert.certificateDate !== undefined
            ? Number(cert.certificateDate)
            : null,
        certificateOrSubscriptionNumber: cert.certificateOrSubscriptionNumber,
        examSessionId: cert.examSessionId,
        examSessionName:
          cert.examSession?.name_AR || cert.examSession?.name || "",
        generalTotal: cert.generalTotal,
        average: cert.average,
        admissionAverageAfterLanguageExclusion:
          cert.admissionAverageAfterLanguageExclusion,
      };
    } else {
      this.highSchoolCertificate = null;
    }
  }

  static fromDto(dto: StudentRegistrationCreatedDto): StudentRegistration {
    return new StudentRegistration(dto);
  }

  toPlain() {
    return {
      id: this.id,
      applicationNumber: this.applicationNumber,
      fullName: this.fullName,
      motherName: this.motherName,
      birthPlace: this.birthPlace,
      birthDate: this.birthDate,
      nationalNumber: this.nationalNumber,
      identityNumber: this.identityNumber,
      registrationPlace: this.registrationPlace,
      registrationNumber: this.registrationNumber,
      address: this.address,
      phone: this.phone,
      mobile: this.mobile,
      facultyId: this.facultyId,
      facultyName: this.facultyName,
      admissionTypeId: this.admissionTypeId,
      admissionTypeName: this.admissionTypeName,
      officeId: this.officeId,
      officeName: this.officeName,
      amountPaid: this.amountPaid,
      status: this.status,
      note: this.note,
      createdAt: this.createdAt,
      highSchoolCertificate: this.highSchoolCertificate,
    };
  }
}
