import axios from "axios";

export interface IAxiosConfig {
  method: string;
  maxBodyLength: number;
  url: string;
  headers: {
    accept: string;
    authkey: string;
    "content-type": string;
    Cookie: string;
  };
}

export function makeRequest(config: IAxiosConfig) {
  return axios.request(config);
}
