import { apiClient } from "@/lib/api/client";

export const siteRequestApi = {
  /**
   * Submits an employment (job application) request.
   * Expects multipart/form-data because of the CvFile.
   */
  async submitEmployment(formData: FormData) {
    const { data } = await apiClient.post(
      "/api/SiteRequest/Employment",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  },

  /**
   * Submits a general site request (Contact Us).
   * Usually uses the same or a similar endpoint.
   */
  async submitGeneralRequest(data: any) {
    // For general contact, we can use the same Employment endpoint with Category 1
    // or a dedicated one if it exists. Based on user request, Category 1 is for general.
    const formData = new FormData();
    formData.append("Category", "1");
    formData.append("FirstName", data.name || "");
    formData.append("LastName", "."); // Use a dot or empty if last name is combined
    formData.append("Email", data.email);
    formData.append("PhoneNumber", data.phone || "");
    formData.append("Message", data.message);
    // Add other fields as required by the backend
    
    const response = await apiClient.post(
      "/api/SiteRequest/Employment",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  },
};
