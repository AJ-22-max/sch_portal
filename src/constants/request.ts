import axios from "axios";

const linuxMode: boolean = false;
export const backendBaseUrl = linuxMode
  ? "http://23.227.167.182:8001/V1"
  : import.meta.env.VITE_API_BASE_URL || "https://schoolportal-server.onrender.com/V1";;


export const apiReq = axios.create({ baseURL: backendBaseUrl });
