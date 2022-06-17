export default function () {
  function formatDecimal(inputString) {
    return inputString.substr(2).slice(0, -2)
  }
  function formatArray(inputString) {
    return inputString.substr(4).slice(0, -4)
  }

  return {
    formatDecimal,
    formatArray
  }
}
