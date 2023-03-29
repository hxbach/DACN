import axios from "axios";
import uri from "./uri";
const ApiManager = axios.create({
  baseURL: uri,// quan trọng: thay bằng ip local của máy tính trong mạng đang sử dụng
  responseType: "json",
  withCredentials: true,
});

export default ApiManager;
