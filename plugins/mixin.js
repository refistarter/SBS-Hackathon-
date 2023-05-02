// Global mixin
import axios from "axios";

export default function () {
  const $getRequest = () => {
    const res = axios.get("/api/project.json");
    return res.data;
  };

  return {
    $getRequest,
  };
}
