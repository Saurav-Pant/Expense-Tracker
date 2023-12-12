const BASE_URL_CHECK = "https://expense-tracker-l62v.vercel.app";
export const BASE_URL = BASE_URL_CHECK.endsWith("/")
  ? BASE_URL_CHECK.slice(0, -1)
  : BASE_URL_CHECK;
console.log(BASE_URL_CHECK);
console.log(BASE_URL);
