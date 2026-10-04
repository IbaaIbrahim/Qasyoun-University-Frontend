import { apiClient } from "@/lib/api/client";

export interface CreateStudentHighSchoolCertificatePayload {
  certificateTypeId: number;
  certificateSource?: string | null;
  certificatePlace?: string | null;
  certificateDate?: string | null;
  certificateOrSubscriptionNumber?: string | null;
  examSessionId?: number | null;
  generalTotal?: number | null;
  average?: number | null;
  admissionAverageAfterLanguageExclusion?: number | null;
}

export interface CreateStudentRegistrationPayload {
  fullName: string;
  motherName?: string | null;
  birthPlace?: string | null;
  birthDate?: string | null;
  nationalNumber?: string | null;
  identityNumber?: string | null;
  registrationPlace?: string | null;
  registrationDate?: string | null;
  address?: string | null;
  phone?: string | null;
  mobile?: string | null;
  facultyId: number;
  admissionTypeId: number;
  officeId: number;
  amountPaid: number;
  status?: number;
  note?: string | null;
  highSchoolCertificate?: CreateStudentHighSchoolCertificatePayload | null;
}

export interface StudentRegistrationCreatedDto {
  id: number;
  applicationNumber: string;
  fullName: string;
  motherName?: string | null;
  birthPlace?: string | null;
  birthDate?: string | null;
  nationalNumber?: string | null;
  identityNumber?: string | null;
  registrationPlace?: string | null;
  registrationDate?: string | null;
  registrationNumber?: string | null;
  address?: string | null;
  phone?: string | null;
  mobile?: string | null;
  facultyId: number;
  faculty?: {
    id: number;
    slug?: string;
    name: string;
    name_AR?: string | null;
    prefixNumber?: string | null;
  } | null;
  admissionTypeId: number;
  admissionType?: {
    id: number;
    name: string;
    name_AR?: string | null;
  } | null;
  officeId: number;
  office?: {
    id: number;
    name: string;
    name_AR?: string | null;
  } | null;
  amountPaid: number;
  status: number;
  note?: string | null;
  highSchoolCertificate?: {
    id: number;
    studentRegistrationId: number;
    certificateTypeId: number;
    certificateType?: {
      id: number;
      name: string;
      name_AR?: string | null;
    } | null;
    certificateSource?: string | null;
    certificatePlace?: string | null;
    certificateDate?: string | null;
    certificateOrSubscriptionNumber?: string | null;
    examSessionId?: number | null;
    examSession?: {
      id: number;
      name: string;
      name_AR?: string | null;
    } | null;
    generalTotal?: number | null;
    average?: number | null;
    admissionAverageAfterLanguageExclusion?: number | null;
  } | null;
  createdAt: string;
  updatedAt?: string | null;
}

export interface CreateStudentRegistrationResponse {
  data: StudentRegistrationCreatedDto[];
  total: number;
  errors?: any;
}

export const studentRegistrationApi = {
  /**
   * Submits a student registration request to the backend.
   */
  async create(
    payload: CreateStudentRegistrationPayload
  ): Promise<CreateStudentRegistrationResponse> {
    const response = await apiClient.post<CreateStudentRegistrationResponse>(
      "/api/StudentRegistration/Create",
      payload
    );
    return response.data;
  },
};
