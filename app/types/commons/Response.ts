/* eslint-disable */
export interface ApiResponse {
  success: boolean;
  data: any;
  error: ApiError | null;
  meta: MetaData | null;
}

export interface ApiError {
  code: string;
  message: string;
}

export interface MetaData {
  page?: number;
  pageSize?: number;
  total?: number;
  totalPages?: number;
  path?: string;
  requestId?: string;
  timestamp?: string;

}
