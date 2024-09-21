import dayjs from "dayjs"
import { isValidDate } from "./isValidDate"

export const DATE_FORMAT = "DD MMM YYYY"
export const DATE_TIME_FORMAT = "ddd DD MMM YYYY, h:mm A"
export const DATE_TIME_FORM_FORMAT = "YYYY-MM-DD HH:mm"

/**
 * formats a date string
 *
 * @param {date} date a valid date string
 * @param {string} [format='DD MMM YYYY'] e.g. "DD MMM YYYY"
 * @return {*} formatted date string
 */
export const formatDate = (date, format = DATE_FORMAT) => {
  if (date && isValidDate(date)) return dayjs(date).format(format)
  return date
}

export const formatDateTime = (date, format = DATE_TIME_FORMAT) => {
  if (date && isValidDate(date)) return dayjs(date).format(format)
  return date
}

export const formatDateTimeForForm = (date, format = DATE_TIME_FORM_FORMAT) => {
  if (date && isValidDate(date)) return dayjs(date).format(format)
  return date
}

export default formatDate
