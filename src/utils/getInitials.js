export const getInitials = (string) => {
  if (!string) return ""
  if (!string.match(/\b(\w)/g)) return string[0]
  return string
    .match(/\b(\w)/g)
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export default getInitials
