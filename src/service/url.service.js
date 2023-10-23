import axios from "axios";


// khai báo token
// export const TOKEN = "token";


// khai báo configHeaders token
// export const configHeaders = () => {
//     return {
//       Token: TOKEN,
//     };
//   };
  

// đường link backend
export const BASE_URL = "https://localhost:7175/api";



// tạo http
export const https = axios.create({
    baseURL: BASE_URL,
    //dùng để gọi và khai báo token khi API cần
   // headers: configHeaders(),
  });
  