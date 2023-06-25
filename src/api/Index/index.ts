import request from "../request"
import { AxiosResponse } from "axios"

class IndexApi {

  static login = (params: {
    address: string
    signatures: string
    invite_address?: string
    auth_code?: string
  }): Promise<AxiosResponse> =>
    request(`/api/user/login`, "POST", params, false)

  static getHotData = (params: {
  }): Promise<AxiosResponse> =>
      request(`/sister/hot-goods/listPage`, "POST", params, false)

  static getAppContext = (params: {
  }): Promise<AxiosResponse> =>
      request(`/zmtools/app-context/listPage`, "POST", params, false)

  static addJoin = (params: {
  }): Promise<AxiosResponse> =>
      request(`/zmtools/cooperate-join/add`, "POST", params, false)

  static getVersion = (params: {
  }): Promise<AxiosResponse> =>
      request(`/sister/app-version-tbl/getVersionInfo`, "GET", params, false)
  
      static getUpdates = (params: {
      }): Promise<AxiosResponse> =>
          request(`/sister/app-version-tbl/listPage`, "POST", params, false)

}

export default IndexApi
