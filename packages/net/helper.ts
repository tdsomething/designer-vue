import { IUnknowObject } from 'typings'

const convert = (data: IUnknowObject) => {
  const type = Object.prototype.toString.call(data)
  if (type === '[object Object]') {
    const result = Object.keys(data).map((key) => {
      return `${key}=${data[key]}`
    })
    return result.join('&')
  }
  return JSON.stringify(data)
}

export const convertParamsToUrl = (url: string, params: unknown): string => {
  return `${url}?${convert(params as object)}`
}
