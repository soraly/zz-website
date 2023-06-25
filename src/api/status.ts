export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
}

export const HTTP_TEXT = {
  OK: "200 - success",
  CREATED: "201 - created",
  ACCEPTED: "202 - received",
  CLIENT_ERROR: "400 - error! ",
  AUTHENTICATE: "401 - no permission! ",
  FORBIDDEN: "403 - access denied! ",
  NOT_FOUND: "404 - Bad request, resource not found! ",
  SERVER_ERROR: "500 - Server error, please check server! ",
  BAD_GATEWAY: "502 - Gateway error! ",
  SERVICE_UNAVAILABLE:
    "503 - The service is unavailable, the server is temporarily overloaded or maintained! ",
  GATEWAY_TIMEOUT: "504 - Connection timed out!"
}

export const getHttpStatusText = function (code: number | null, err?: any): string {
  if (err && err.response && err.response.status) {
    code = err.response.status
  }
  for (const key in HTTP_STATUS) {
    if (HTTP_STATUS[key] === code) {
      const text = HTTP_TEXT[key]
      return text
    }
  }
  if (typeof err === "string" && err.indexOf("timeout") > -1) {
    return "Request timed out, please try again later!"
  }
  if (typeof err === "string" && err.indexOf("Network") > -1) {
    return "The request failed, please check the network connection"
  }
  return `Network Error`
}
