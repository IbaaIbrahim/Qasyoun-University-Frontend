import { apiClient } from "@/lib/api/client";

export type SearchGroup<T> = {
  source: string;
  count: number;
  items: T[];
};

export type SearchResponseDto = {
  query: string;
  totalCount: number;
  faculties?: SearchGroup<any>;
  labs?: SearchGroup<any>;
  teachers?: SearchGroup<any>;
  courses?: SearchGroup<any>;
  scientificResearches?: SearchGroup<any>;
  graduatedStudents?: SearchGroup<any>;
  contents?: SearchGroup<any>;
  vacancies?: SearchGroup<any>;
};

export const searchApi = {
  async search(query: string): Promise<SearchResponseDto> {
    const { data } = await apiClient.get<SearchResponseDto>("/api/Search", {
      params: { q: query },
    });
    return data;
  },
};
