import {myRequest} from '../api'

class dataService {
  /**
   * 获取当前时间
   * @resolve {Object[]} nowTime
   */
  async nowTime(){
    const res = await myRequest({
      url:'/getNowTime',
      method:'get'
    })
    return res.data;
  }

  /**
   * 获取疫情总览信息
   * @resolve {Object[]} totalInfo
   */
  async totalEpidemicInfo(){
    const res = await myRequest({
      url:'/getTotalEpidemicInfo',
      method:'get'
    })
    return res.data;
  }

  /**
   * 获取国内疫情信息
   * @resolve {Object[]} domesticInfo
   */
  async domesticEpidemicInfo(){
    const res = await myRequest({
      url:'/getDomesticEpidemicInfo',
      method:'get'
    })
    return res.data;
  }

  /**
   * 获取国际疫情信息
   * @resolve {Object[]} foreignInfo
   */
  async foreignEpidemicInfo(){
    const res = await myRequest({
      url:'/getForeignEpidemicInfo',
      method:'get'
    })
    return res.data;
  }

}

export default new dataService();