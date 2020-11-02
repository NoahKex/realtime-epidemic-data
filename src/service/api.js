import axios from 'axios'

axios.defaults.baseURL = '/api/';

export const myRequest = options => {
  return new Promise((reslove,reject)=>{
    let {url,method,data,headers} = options;
    let trReq = [
      function (data) {
         let ret = '';
         for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
         }
         ret = ret.substring(0, ret.lastIndexOf('&'));
         return ret;
      }
    ]
    let type;
    if(method=='get'){
      type='params';
    }else{
      type='data';
    }
    let axiosObj = {
      method: method || 'get',
      // url: BASE_URL + url,
      url: url,
      [type]: data || {},
      headers: headers || {'Content-Type': 'application/json','Accept': 'application/json'}
    }
    if(headers){//form-data
      axiosObj = {...axiosObj,transformRequest:trReq};
    }
    axios(axiosObj)
    .then( res => {
      reslove(res);
    })
    .catch( err =>{
      reject(err);
    })
  })
}
