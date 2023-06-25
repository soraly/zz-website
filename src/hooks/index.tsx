import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { message } from "antd"
import { useHistory, useLocation } from "react-router-dom";

const useIndex = () => {
  const [tabKey, setTabKey] = useState("Following")

  const useError = error => {
    const err: any = error
    console.log(error, 'errorrr')

    if (err && err.code === 4001) {  //User denied transaction signature
      window.location.reload()
    } else if (err && err.code === -32603) {
      message.warn(err?.data?.message || err?.message, 3)
    } else {
      console.log(error, "errorerrorerror");
      message.error(String(error).slice(0, 40))
    }
  }

  return {
    tabKey,
    setTabKey,
    useError,
  }
}

export const useQuery = function () {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default useIndex
