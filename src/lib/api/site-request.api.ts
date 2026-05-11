import { apiClient } from "@/lib/api/client";

export const siteRequestApi = {
  /**
   * Submits a general contact request.
   * Uses JSON payload.
   */
  async submitContactUs(data: {
    firstName: string;
    email: string;
    phoneNumber: string | null;
    messageTitle: string;
    messageBody: string | null;
  }) {
    const response = await apiClient.post("/api/SiteRequest/ContactUs", data);
    return response.data;
  },

  /**
   * Submits an employment (job application) request.
   * Expects multipart/form-data.
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
};
