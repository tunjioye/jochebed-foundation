import fetch from "isomorphic-fetch"
import qs from "qs"

const methodAcceptsBody = ["POST", "PUT", "PATCH"]

export type FetcherRequestArg<T extends any = undefined> = {
  readonly url?: string
  readonly method?: string
  readonly data?: T
  readonly headers?: any
  readonly successMessage?: string
  readonly errorMessage?: string
  readonly requiresAuth?: boolean
  readonly appendToUrl?: string
  readonly query?: Record<string, any>
}

export const fetcher = <T extends any = null>(url: string, options: any) => {
  const { arg = {} } = options
  const {
    url: argUrl,
    method,
    data,
    headers,
    appendToUrl,
    query,
    ...rest
  } = arg as FetcherRequestArg
  const acceptsBody = method && methodAcceptsBody.includes(method)
  const finalUrl = () => {
    const newUrl = (argUrl || url) + (appendToUrl || "")
    const queryString = query
      ? "?" + qs.stringify(query, { encode: false })
      : ""
    return newUrl + queryString
  }

  return customFetch<T>({
    url: finalUrl(),
    options: {
      method,
      body: acceptsBody ? JSON.stringify(data) : undefined,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    },
    ...rest,
  })
}

export const nullFetcher = <T extends any = null>(): Promise<FetchResponseType<T>> => {
  return new Promise((resolve) => {
    return resolve({
      headers: null,
      body: null as any,
      message: "",
      status: 200,
      statusText: "ok",
    })
  })
}

export const getFetcher = <T extends any = null>(url: string, options: any) => {
  options.arg.method = "GET"
  return fetcher<T>(url, options)
}

export const postFetcher = <T extends any = null>(
  url: string,
  options: any
) => {
  options.arg.method = "POST"
  return fetcher<T>(url, options)
}

export const putFetcher = <T extends any = null>(url: string, options: any) => {
  options.arg.method = "PUT"
  return fetcher<T>(url, options)
}

export const patchFetcher = <T extends any = null>(
  url: string,
  options: any
) => {
  options.arg.method = "PATCH"
  return fetcher<T>(url, options)
}

export const deleteFetcher = <T extends any = null>(
  url: string,
  options: any
) => {
  options.arg.method = "DELETE"
  return fetcher<T>(url, options)
}

// customFetch

const jsonContentTypeKey1 = "Content-Type"
const jsonContentTypeKey2 = "content-type"
const jsonContentTypeValue = "application/json"

const isResponseJson = (resHeaders: any) => {
  return (
    resHeaders?.[jsonContentTypeKey1]?.includes(jsonContentTypeValue) ||
    resHeaders?.[jsonContentTypeKey2]?.includes(jsonContentTypeValue)
  )
}

export type FetchResponseType<T extends any = null> = {
  readonly headers: any
  readonly body: T & {
    readonly error?: {
      readonly details: any
      readonly message: string
    }
  }
  readonly message: string
  readonly status: number
  readonly statusText: string
}

export const customFetch = async <T extends any = null>(
  requestParams = {} as any
): Promise<FetchResponseType<T>> => {
  const {
    url,
    options = {},
    successMessage,
    errorMessage,
  } = requestParams || {}
  const { headers: initialHeaders = {} } = options || {}
  const headers = {
    [jsonContentTypeKey1]: jsonContentTypeValue, // default Content-Type = application/json
    ...initialHeaders,
  }

  // Note: if you want to send formData, you must delete the Content-Type header
  if (headers["Content-Type"] === "multipart/form-data") {
    delete headers["Content-Type"]
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    }).then((res) => {
      const resHeaders = Object.fromEntries(res.headers.entries())
      const getResBody = isResponseJson(resHeaders) ? res.json() : res.text()

      return new Promise<FetchResponseType<T>>((resolve, reject) => {
        getResBody.then((resBody) => {
          // response = { headers: {...}, body: {...}, message: '', status = 200, statusText = '' }
          const getStatusMessage = () => {
            if (res.status >= 500) return "Something went wrong"
            if (res.status == 403) return "Unauthorized access"
            return res.statusText
          }
          const finalSuccessMessage = () => {
            return resBody?.message || successMessage || getStatusMessage()
          }

          const finalErrorMessage = () => {
            if (res.status == 403) return "Unauthorized access"
            if (res.status == 400 || res.status == 404) {
              return (
                resBody?.error?.message ||
                resBody?.message ||
                errorMessage ||
                getStatusMessage()
              )
            }
            return resBody?.message || errorMessage || getStatusMessage()
          }

          const response = {
            headers: resHeaders,
            body: resBody,
            message: res.ok ? finalSuccessMessage() : finalErrorMessage(),
            status: res.status,
            statusText: res.statusText,
          }

          if (!res.ok) return reject(response)
          return resolve(response)
        })
      })
    })

    return new Promise((resolve) => resolve(response))
  } catch (error: any) {
    return new Promise((_, reject) => reject(error))
  }
}
