import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.92:3333",
});
//json-server ./src/services/server.json --host 192.168.15.92 --port 3333 --delay 700
export default api;
