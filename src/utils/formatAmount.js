export const formatAmount = ({ amount = 0, symbol = "" } = {}) => {
  const formattedAmount = new Intl.NumberFormat().format(amount || 0)
  if (symbol) return `${symbol}${formattedAmount}`
  return formattedAmount
}

export default formatAmount
