import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { IRequests } from 'typings'
import { convertParamsToUrl } from 'packages/net/helper'

const prefix = '/api'

const axios = Axios.create({ baseURL: prefix })

axios.interceptors.request.use(
  (onFulfilled: AxiosRequestConfig) => onFulfilled,
  (onRejected) => onRejected
)

axios.interceptors.response.use(
  (onFulfilled: AxiosResponse) => onFulfilled,
  (onRejected) => onRejected
)

const request = {}
const response = {}

// TODO export interceptors
const interceptors = {
  request,
  response
}

export const requests: IRequests = {
  async get(url, params, config) {
    try {
      const res = await axios.get(convertParamsToUrl(url, params), config)
      return res.data
    } catch (err) {
      return err
    }
  },
  async post(url, data, config) {
    try {
      const res = await axios.post(url, data, config)
      return res.data
    } catch (err) {
      return err
    }
  },
  async put(url, data, config) {
    try {
      const res = await axios.put(url, data, config)
      return res.data
    } catch (err) {
      return err
    }
  },
  async delete(url, params, config) {
    try {
      const res = await axios.delete(convertParamsToUrl(url, params), config)
      return res.data
    } catch (err) {
      return err
    }
  },
  async patch(url, data, config) {
    try {
      const res = await axios.patch(url, data, config)
      return res.data
    } catch (err) {
      return err
    }
  },
  download(url, params) {
    window.location.href = `${convertParamsToUrl(url, params)}&access_token=${sessionStorage.token}`
    return Promise.resolve()
  }
}
export { interceptors }
export default requests
