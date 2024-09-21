/**
 * returns a mapped array with label and value keys
 *
 * @param {array} options an array of strings OR objects
 * @param {object} getOptionKeys { getLabel: function; getValue: function }
 * @return {array} an array of objects with label and value
 */
export const mapSelectOptions = (options, getOptionKeys) => {
  return options.map((option) => {
    if (getOptionKeys) {
      const {
        getLabel = (option) => option?.label,
        getValue = (option) => option?.value,
      } = getOptionKeys
      return {
        __option: option,
        label: getLabel(option),
        value: getValue(option),
      }
    }
    return { label: option, value: option }
  })
}

export default mapSelectOptions
