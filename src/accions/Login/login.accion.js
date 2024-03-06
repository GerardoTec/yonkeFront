import axios from "axios"

// export function axiosRequest(params){
//     return new Promise((resolve,reject)=>{
//         axios(params)
//         .then((response)=>{
//             resolve(response);
//         })
//         .catch((err)=>{
//             axios(params).then((response)=>{
//                 resolve(response);
//             }).catch((response)=>{
//                 reject(response)
//             });
//         });
//     });
// }

export async function axiosRequest({ method, url, data }) {
    try {
      const response = await axios({
        method,
        url,
        data
      });
  
      return response; 
    } catch (error) {
      throw error;
    }
  }
