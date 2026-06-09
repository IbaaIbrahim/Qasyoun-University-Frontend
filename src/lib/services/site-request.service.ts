import { siteRequestApi } from "@/lib/api/site-request.api";

export interface EmploymentRequestData {
  vacancyId: number;
  firstName: string;
  lastName: string;
  dob: string;
  pob: string;
  gender: number;
  nationality: string;
  phone: string;
  email: string;
  maritalStatus: number;
  cvFile: File;
}

export interface GeneralRequestData {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

export const siteRequestService = {
  async submitJobApplication(data: EmploymentRequestData) {
    const formData = new FormData();
    formData.append("VacancyId", data.vacancyId.toString());
    formData.append("FirstName", data.firstName);
    formData.append("LastName", data.lastName);
    formData.append("DateOfBirth", data.dob);
    formData.append("PlaceOfBirth", data.pob);
    formData.append("Gender", data.gender.toString());
    formData.append("Nationality", data.nationality);
    formData.append("PhoneNumber", data.phone);
    formData.append("Email", data.email);
    formData.append("MaritalStatus", data.maritalStatus.toString());
    formData.append("CvFile", data.cvFile);

    return await siteRequestApi.submitEmployment(formData);
  },

  async submitContactRequest(data: GeneralRequestData) {
    // Uses the dedicated ContactUs endpoint with JSON payload
    return await siteRequestApi.submitContactUs({
      firstName: data.name,
      email: data.email,
      phoneNumber: data.phone || null,
      messageTitle: data.subject || "Website Contact Request",
      messageBody: data.message,
    });
  },
};
