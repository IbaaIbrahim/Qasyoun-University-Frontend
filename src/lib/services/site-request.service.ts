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
    formData.append("Category", "2");

    return await siteRequestApi.submitEmployment(formData);
  },

  async submitContactRequest(data: GeneralRequestData) {
    // We'll use the same endpoint but with Category 1
    // The backend might require all fields, so we'll provide defaults
    const formData = new FormData();
    formData.append("Category", "1");
    formData.append("FirstName", data.name);
    formData.append("LastName", ".");
    formData.append("Email", data.email);
    formData.append("PhoneNumber", data.phone || "");
    formData.append("Message", data.message);
    
    // Default values for other required fields if any
    formData.append("DateOfBirth", new Date().toISOString());
    formData.append("PlaceOfBirth", ".");
    formData.append("Gender", "1");
    formData.append("Nationality", ".");
    formData.append("MaritalStatus", "1");

    return await siteRequestApi.submitEmployment(formData);
  },
};
