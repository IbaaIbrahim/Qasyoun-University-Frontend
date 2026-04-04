/** Mirrors OpenAPI `DataSourceRequest` (v1.json) for grid/read endpoints. */
export type DataSourceRequest = {
  page?: number | string;
  pageSize?: number | string;
  skip?: number | string;
  take?: number | string;
  sorts?: unknown[] | null;
  filters?: unknown[] | null;
  groups?: unknown[] | null;
  aggregates?: unknown[] | null;
  groupPaging?: boolean;
  includeSubGroupCount?: boolean;
  caseSensitiveFilter?: boolean;
  isExcelExportRequest?: boolean;
};

/** Typical shape returned by resource Read endpoints (Kendo-style). */
export type DataSourceResult<T> = {
  data: T[];
  total: number;
  aggregateResults?: unknown;
  errors?: unknown;
};
