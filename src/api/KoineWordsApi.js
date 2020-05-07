import { create } from "apisauce";

export const api = create({
  baseUrl: "https://localhost:44361",
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getWordData() {
  return await api.get("api/KoineWords").then((res) => {
    debugger;
    const apiResponse = res;
    if (apiResponse.ok) {
      debugger;
      return apiResponse.data;
    } else {
      return "";
    }
  });
}
