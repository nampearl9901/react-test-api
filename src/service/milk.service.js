//cách 1 :
//import BASE_URL from "./url.service";
//import axios from "axios";
import {  https } from "./url.service";

export const milkService ={
    getMilks: () => {
        //cách 1 khi không sử dung url.servie
        // return axios({
        //   url: `${BASE_URL}/Products`,
        //   method: "GET",
        // });
        // cách 2:
        return https.get("/Products");
      },
      getcatory: () => {
        //cách 1 khi không sử dung url.servie
        // return axios({
        //   url: `${BASE_URL}/Products`,
        //   method: "GET",
        // });
        // cách 2:
        return https.get("/Categorys");
      },
    
}

export default milkService;