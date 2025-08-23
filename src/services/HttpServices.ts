import apiCall from "@/services/apiCall";
import Cookies from "js-cookie";

apiCall.interceptors.request.use((config) => {
  const token = Cookies.get("session");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

class HttpServices {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = async <TResponse>() => {
    const { data } = await apiCall.get<TResponse>(this.endPoint);
    return data;
  };

  getById = async <TResponse>(id: string) => {
    const { data } = await apiCall.get<TResponse>(`${this.endPoint}/${id}`);
    return data;
  };

  getBySlug = async <TResponse>(slug: string) => {
    const { data } = await apiCall.get<TResponse>(
      `${this.endPoint}/${slug}`
    );
    return data;
  }

  post = async <TResponse, TBody = unknown>(body: TBody) => {
    console.log(body);
    const { data } = await apiCall.post<TResponse>(this.endPoint, body);
    return data;
  };

  put = async <TResponse, TBody = unknown>(body: TBody, id: string) => {
    console.log({ body, id });
    const { data } = await apiCall.put<TResponse>(
      `${this.endPoint}/${id}`,
      body
    );
    return data;
  };

  patch = async <TResponse, TBody = unknown>(body: TBody, id: string) => {
    const { data } = await apiCall.patch<TResponse>(
      `${this.endPoint}/${id}`,
      body
    );
    return data;
  };

  delete = async <TResponse>(id: string) => {
    const { data } = await apiCall.delete<TResponse>(`${this.endPoint}/${id}`);
    return data;
  };
}

export default HttpServices;
